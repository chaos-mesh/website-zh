---
title: 模拟压力场景
sidebar_label: 模拟压力场景
---

## StressChaos 介绍

StressChaos 能够帮助你模拟容器内压力的场景。

## 使用 Dashboard 方式创建实验

1. 单击实验页面中的新的实验按钮进行创建实验:

   ![创建实验](./img/create-new-exp.jpeg)

<!-- TODO -->

## 使用 YAML 方式创建实验

1. 将实验配置写入到文件中 `memory-stress.yaml`，内容如下所示：

```yaml
apiVersion: chaos-mesh.org/v1alpha1
kind: StressChaos
metadata:
  name: memory-stress-example
  namespace: chaos-testing
spec:
  mode: one
  selector:
    labelSelectors:
      'app': 'app1'
  stressors:
    memory:
      workers: 4
      size: '256MB'
```

该实验配置会在选中容器中创建进程，不断分配和读写内存。最多占用 256MB。

2. 使用 `kubectl` 创建实验，命令如下：

```bash
kubectl apply -f memory-stress.yaml
```

### 字段说明

| 参数              | 类型                    | 说明                                                                                | 默认值 | 是否必填 | 示例             |
| ----------------- | ----------------------- | ----------------------------------------------------------------------------------- | ------ | -------- | ---------------- |
| mode              | string                  | 表示运行实验时候的运行方式，支持 one、all、fixed、fixed-percent、random-max-percent | 无     | 是       | one              |
| value             | string                  | 取决与 mode 的取值，为 mode 提供参数                                                | 无     | 否       | 2                |
| selector          | struct                  | 指定注入故障的目标 pod，可以参考[文档](./define-chaos-experiment-scope.md)          | 无     | 是       |                  |
| duration          | string                  | 指定具体实验的持续时间                                                              | 无     | 是       | 30s              |
| containerNames    | []string                | 指定注入故障的目标 container 名                                                     | 无     | 否       | prometheus,nginx |
| stressors         | [Stressors](#Stressors) | 指定 CPU 或 内存压力的参数                                                          | 无     | 否       |                  |
| stressngStressors | string                  | 指定 stress-ng 的参数来达到更丰富的压力注入                                         | 无     | 否       | --clone 2        |

#### Stressors

| 参数   | 类型                              | 说明               | 默认值 | 是否必填 | 示例 |
| ------ | --------------------------------- | ------------------ | ------ | -------- | ---- | --- |
| memory | [MemoryStressor](#MemoryStressor) | 指定内存压力的参数 | 无     | 否       |      |     |
| cpu    | [CPUStressor](#CPUStressor)       | 指定内存压力的参数 | 无     | 否       |      |     |

##### MemoryStressor

| 参数    | 类型   | 说明                       | 默认值 | 是否必填 | 示例  |
| ------- | ------ | -------------------------- | ------ | -------- | ----- |
| workers | int    | 指定施加内存压力的线程个数 |        | 是       | 1     |
| size    | string | 指定总共最大使用的内存大小 |        | 否       | 256MB |

##### CPUStressor

| 参数    | 类型 | 说明                                                            | 默认值 | 是否必填 | 示例 |
| ------- | ---- | --------------------------------------------------------------- | ------ | -------- | ---- |
| workers | int  | 指定施加内存压力的线程个数                                      |        | 是       | 1    |
| load    | int  | 指定占据 CPU 的百分比。0 意味着睡眠，毫无负载；100 意味着满负载 |        | 否       | 50   |
