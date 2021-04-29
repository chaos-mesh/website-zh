---
title: 模拟文件 I/O 故障
sidebar_label: 模拟文件 I/O 故障
---

## IOChaos简介
IOChaos能够帮助你模拟文件系统故障。目前支持以下类型的故障：

1. latency：为文件系统调用加入延迟
2. fault：使文件系统调用返回错误
3. attrOverride：修改文件属性
4. mistake：使文件读到或写入错误的值

详细的功能介绍参见“使用yaml文件创建实验”。

## 注意事项
1. 请确保目标Pod上没有运行 Chaos Mesh 的 Control Manager。
2. IOChaos可能会损坏你的数据。

## 使用 dashboard 方式创建实验

## 使用 yaml 方式创建实验
### latency 配置文件示例

```yaml
apiVersion: chaos-mesh.org/v1alpha1
kind: IoChaos
metadata:
  name: io-latency-example
  namespace: chaos-testing
spec:
  action: latency
  mode: one
  selector:
    labelSelectors:
      app: etcd
  volumePath: /var/run/etcd
  path: '/var/run/etcd/**/*'
  delay: '100ms'
  percent: 50
  duration: '400s'
  scheduler:
    cron: '@every 10m'
```

### fault 配置文件示例

```yaml
apiVersion: chaos-mesh.org/v1alpha1
kind: IoChaos
metadata:
  name: io-fault-example
  namespace: chaos-testing
spec:
  action: fault
  mode: one
  selector:
    labelSelectors:
      app: etcd
  volumePath: /var/run/etcd
  path: /var/run/etcd/**/*
  errno: 5
  percent: 50
  duration: "400s"
  scheduler:
    cron: "@every 10m"
```

### attrOverride 配置文件示例

```yaml
apiVersion: chaos-mesh.org/v1alpha1
kind: IoChaos
metadata:
  name: io-attr-example
  namespace: chaos-testing
spec:
  action: attrOverride
  mode: one
  selector:
    labelSelectors:
      app: etcd
  volumePath: /var/run/etcd
  path: /var/run/etcd/**/*
  attr:
    perm: 72
  percent: 10
  duration: "400s"
  scheduler:
    cron: "@every 10m"
```

### mistake 配置文件示例
```yaml
apiVersion: chaos-mesh.org/v1alpha1
kind: IoChaos
metadata:
  name: io-mistake-example
  namespace: chaos-testing
spec:
  action: mistake
  mode: one
  selector:
    labelSelectors:
      app: etcd
  volumePath: /var/run/etcd
  path: /var/run/etcd/**/*
  mistake:
    filling: zero
    maxOccurrences: 1
    maxLength: 10
  methods:
    - READ
    - WRITE
  percent: 10
  duration: "400s"
  scheduler:
    cron: "@every 10m"
```

### 字段说明
#### 通用字段
|参数|类型|说明|默认值|是否必填|示例|
|---|---|---|---|---|---|
|action|string|表示具体的故障类型，仅支持latency、fault、attrOverride、mistake||是|latency
|mode|string|表示运行实验时候的运行方式，支持one、all、fixed、fixed-percent、random-random-max-percent||是|one|
|value|string|取决与mode的取值，为mode提供参数||否|2|
|volumePath|string|volume在目标容器内的挂载点，必须为挂载的根目录||是|/var/run/etcd|
|path|string|注入错误的位置，可以是通配符，也可以是单个文件||是|/var/run/etcd/**/*|
|methods|string[]|需要注入故障的文件系统调用类型，具体支持的类型见附录A|所有类型|否|READ
|percent|int|每次操作发生故障的概率，单位为%|100|否|100|
|containerName|string|指定注入的容器名||否||
|duration|string|指定具体实验的持续时间||是|30s|
|scheduler|string|指定具体实验的运行时间调度规则||否|5 * * * *|

#### 与 action 相关的字段
这些字段仅在action为对应值时才有意义

- latency

  |参数|类型|说明|默认值|是否必填|示例|
  |---|---|---|---|---|---|
  |delay|string|具体的延迟时长||是|100ms|

- fault
  |参数|类型|说明|默认值|是否必填|示例|
  |---|---|---|---|---|---|
  |errno|int|返回的错误号||是|22|

- attrOverride
  |参数|类型|说明|默认值|是否必填|示例|
  |---|---|---|---|---|---|
  |attr|AttrOverrideSpec|具体的属性覆写规则||是|见下|

  AttrOverrideSpec定义如下
  |参数|类型|说明|默认值|是否必填|示例|
  |---|---|---|---|---|---|
  |ino|int|inode号||否||
  |size|int|文件大小||否||
  |blocks|int|文件占用块数||否||
  |atime|Timespec|最后访问时间||否||
  |mtime|Timespec|最后修改时间||否||
  |ctime|Timespec|最后状态变更时间||否||
  |kind|string|文件类型，详见 [fuser::FileType](https://docs.rs/fuser/0.7.0/fuser/enum.FileType.html)||否||
  |perm|int|文件权限的10进制表示||否|72（8进制下为110）|
  |nlink|int|硬链接数量||否||
  |uid|int|所有者的用户ID||否||
  |gid|int|所有者的组ID||否||
  |rdev|int|设备ID||否||

  Timespec定义如下
  |参数|类型|说明|默认值|是否必填|示例|
  |---|---|---|---|---|---|
  |sec|int|以秒为单位的时间戳||否||
  |nsec|int|以纳秒为单位的时间戳||否||

  关于参数的具体含义，你可以参考 [man stat](https://man7.org/linux/man-pages/man2/lstat.2.html) 。

- mistake
  |参数|类型|说明|默认值|是否必填|示例|
  |---|---|---|---|---|---|
  |mistake|MistakeSpec|具体错误规则||是||

  MistakeSpec定义如下
  |参数|类型|说明|默认值|是否必填|示例|
  |---|---|---|---|---|---|
  |filling|string|错误数据的填充内容，只能为zero（填充0）和random（填充随机字节）||是||
  |maxOccurrences|int|错误在每一次操作中最多出现次数||是|1|
  |maxLength|int|每次错误的最大长度（单位为字节）||是|1|


## 本地调试
如果你不确定某个chaos的效果，也可以使用 [toda](https://github.com/chaos-mesh/toda) 在本地测试相应功能。chaos mesh 同样使用 toda 实现 IOChaos。
