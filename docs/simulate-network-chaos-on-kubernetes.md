---
title: 模拟网络故障
sidebar_label: 模拟网络故障
---

## NetworkChaos 介绍

NetworkChaos 用于模拟集群中网络故障的场景，目前支持以下几种类型：

1. **Partition**：网络断开、分区。
2. **Net Emulation**：用于模拟网络状态不良的情况，比如高延迟、高丢包率、包乱序等情况。
3. **Bandwidth**：用于限制节点之间通信的带宽。

## 注意事项

1. 请在进行网络注入的过程中保证 Controller Manager 与 Chaos Daemon 之间的连接通畅，否则将无法恢复。
2. 如果使用 Net Emulation 功能，请确保 Linux 内核拥有 NET_SCH_NETEM 模块。对于 CentOS 可以通过 kernel-modules-extra 包安装，大部分其他发行版已默认安装相应模块。

## 使用 dashboard 方式创建实验

<!-- TODO -->

## 使用 YAML 方式创建实验

### Net Emulation 示例

1. 将实验配置写入到文件中 `network-delay.yaml`，内容示例如下：

```yaml
apiVersion: chaos-mesh.org/v1alpha1
kind: NetworkChaos
metadata:
  name: delay
spec:
  action: delay
  mode: one
  selector:
    namespaces:
      - default
    labelSelectors:
      'app': 'web-show'
  delay:
    latency: '10ms'
    correlation: '100'
    jitter: '0ms'
```

该配置将令选中 Pod 内的网络连接产生 10ms 的延迟。除了注入延迟以外，Chaos Mesh 还支持注入丢包、乱序等功能，详见[字段说明](#字段说明)

2. 使用 `kubectl` 创建实验，命令如下：

```bash
kubectl apply -f ./network-delay.yaml
```

### Partition 示例

1. 将实验配置写入到文件中 `network-partition.yaml`，内容示例如下：

```yaml
apiVersion: chaos-mesh.org/v1alpha1
kind: NetworkChaos
metadata:
  name: partition
spec:
  action: partition
  mode: all
  selector:
    namespaces:
      - default
    labelSelectors:
      'app': 'app1'
  direction: to
  target:
    mode: all
    selector:
      namespaces:
        - default
      labelSelectors:
        'app': 'app2'
```

该配置将阻止从 `app1` 向 `app2` 建立的连接。direction 字段可以选择 to, from, both，详见[字段说明](#字段说明)。

2. 使用 `kubectl` 创建实验，命令如下：

```bash
kubectl apply -f ./network-partition.yaml
```

### Bandwidth 示例

1. 将实验配置写入到文件中 `network-bandwidth.yaml`，内容示例如下：

```yaml
apiVersion: chaos-mesh.org/v1alpha1
kind: NetworkChaos
metadata:
  name: bandwidth
spec:
  action: bandwidth
  mode: all
  selector:
    namespaces:
      - default
    labelSelectors:
      'app': 'app1'
  bandwidth:
    rate: '1mbps'
```

该配置将限制 app1 的带宽为 1mbps.

2. 使用 `kubectl` 创建实验，命令如下：

```bash
kubectl apply -f ./network-bandwidth.yaml
```

### 字段说明

| 参数      | 类型     | 说明                                                                                                                           | 默认值 | 是否必填 | 示例      |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------ | ------ | -------- | --------- |
| action    | string   | 表示具体的故障类型，netem,delay,loss,duplicate,corrupt 对应 net emulation 类型；partition 表示网络分区；bandwidth 表示限制带宽 | 无     | 是       | partition |
| mode      | string   | 表示运行实验时候的运行方式，支持 one、all、fixed、fixed-percent、random-max-percent                                            | 无     | 是       | one       |
| value     | string   | 取决与 mode 的取值，为 mode 提供参数                                                                                           | 无     | 否       | 2         |
| selector  | struct   | 指定注入故障的目标 pod，可以参考[文档](./define-chaos-experiment-scope.md)                                                     | 无     | 是       |           |
| duration  | string   | 指定具体实验的持续时间                                                                                                         | 无     | 是       | 30s       |
| target    | Selector | 与 direction 组合使用，使得 Chaos 只对部分包生效                                                                               | 无     | 否       |           |
| direction | enum     | 值为 from,to 或 both。用于指定选出来自 target 的包，发往 target 包，还是全都选中                                               | to     | 否       | both      |

针对不同的 `action`，还有不同的配置项可以填写。

#### Net Emulation

| 参数      | 类型                    | 说明                     | 是否必填 |
| --------- | ----------------------- | ------------------------ | -------- |
| delay     | [Delay](#Delay)         | 描述网络的延迟状态       | 否       |
| loss      | [Loss](#Loss)           | 描述网络的丢包状态       | 否       |
| duplicate | [Duplicate](#Duplicate) | 描述网络重复包的状态     | 否       |
| corrupt   | [Corrupt](#Corrupt)     | 描述网络包出现错误的状态 | 否       |

##### Delay

| 参数        | 类型              | 说明                                           | 默认值 | 是否必填 | 示例 |
| ----------- | ----------------- | ---------------------------------------------- | ------ | -------- | ---- |
| latency     | string            | 表示延迟的时间长度                             | 0      | 否       | 2ms  |
| correlation | string            | 表示延迟时间的时间长度与前一次延迟时长的相关性 | 0      | 否       | 0.5  |
| jitter      | string            | 表示延迟时间的变化范围                         | 0      | 否       | 1ms  |
| reorder     | Reorder(#Reorder) | 表示网络包乱序的状态                           |        | 否       |      |

`correlation` 的计算模型如下：

1. 首先生成一个分布与上一个值有关的随机数：

```c
value = prandom_u32();
corr_plus_one = corr + 1;
rnd = (value * ((1ull<<32) - corr_plus_one) + last_rnd * corr_plus_one) >> 32;
```

其中 `rnd` 为这一随机数。`corr` 为填写的 `correlation`。

2. 使用这一随机数决定当前包的延迟：

```c
((rnd % (2 * sigma)) + mu) - sigma
```

其中 `sigma` 为 `jitter`，`mu` 为 `latency`。

##### Reorder

| 参数        | 类型   | 说明                                   | 默认值 | 是否必填 | 示例 |
| ----------- | ------ | -------------------------------------- | ------ | -------- | ---- |
| reorder     | string | 表示发生重新排序的概率                 | 0      | 否       | 0.5  |
| correlation | string | 表示发生重新排序的概率与前一次的相关性 | 0      | 否       | 0.5  |
| gap         | int    | 表示乱序将包推后的距离                 | 0      | 否       | 5    |

##### Loss

| 参数        | 类型   | 说明                                       | 默认值 | 是否必填 | 示例 |
| ----------- | ------ | ------------------------------------------ | ------ | -------- | ---- |
| loss        | string | 表示丢包发生的概率                         | 0      | 否       | 0.5  |
| correlation | string | 表示丢包发生的概率与前一次是否发生的相关性 | 0      | 否       | 0.5  |

##### Duplicate

| 参数        | 类型   | 说明                                         | 默认值 | 是否必填 | 示例 |
| ----------- | ------ | -------------------------------------------- | ------ | -------- | ---- |
| duplicate   | string | 表示包重复发生的概率                         | 0      | 否       | 0.5  |
| correlation | string | 表示包重复发生的概率与前一次是否发生的相关性 | 0      | 否       | 0.5  |

##### Corrupt

| 参数        | 类型   | 说明                                         | 默认值 | 是否必填 | 示例 |
| ----------- | ------ | -------------------------------------------- | ------ | -------- | ---- |
| corrupt     | string | 表示包错误发生的概率                         | 0      | 否       | 0.5  |
| correlation | string | 表示包错误发生的概率与前一次是否发生的相关性 | 0      | 否       | 0.5  |

对于 `reorder`, `loss`, `duplicate`, `corrupt` 这些偶发事件，`correlation` 则更为复杂。具体模型描述在 [NetemCLG](http://netgroup.uniroma2.it/twiki/bin/view.cgi/Main/NetemCLG) 。

#### Bandwidth

| 参数     | 类型   | 说明                     | 默认值 | 是否必填 | 示例  |
| -------- | ------ | ------------------------ | ------ | -------- | ----- |
| rate     | string | 表示带宽限制的速率       |        | 是       | 1mbps |
| limit    | uint32 | 表示在队列中等待的字节数 |        | 是       | 1     |
| buffer   | uint32 | 能够瞬间发送的最大字节数 |        | 是       | 1     |
| peakrate | uint64 | `bucket` 的最大消耗率    |        | 否       | 1     |
| minburst | uint32 | `peakrate bucket` 的大小 |        | 否       | 1     |

其中 `peakrate` 和 `minburst` 通常情况下不需要设置。如果需要进一步了解这些字段的含义，可以参考 [tc-tbf 文档](https://man7.org/linux/man-pages/man8/tc-tbf.8.html)
