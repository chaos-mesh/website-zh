---
title: 模拟 Pod 故障
sidebar_label: 模拟 Pod 故障
---

## PodChaos 介绍
PodChaos 能够帮助你模拟指定的 Pod 或者容器发生故障的情景。目前，PodChaos 支持以下类型的故障：

-  **Pod Failure**: 向指定的 Pod 中注入故障，使得该 Pod 在一段时间内处于不可用的状态。
-  **Pod Kill**: 杀死指定的 Pod （为了保证 Pod 能够成功重启，需要配置 ReplicaSet 或者类似的机制）。
-  **Container Kill**:  杀死位于目标 Pod 中的指定容器。

## 使用限制
目前， Chaos Mesh 不支持向独立的 Pod 中注入故障（即，未绑定到 ReplicaSet 或 Deployment 的 Pod ），仅支持特定类型的 Pod ，例如 Deployment ， Statefulset ， Daemonset。

:::note 注意

## 注意事项
1. 请确保目标 Pod 上没有运行 Chaos Mesh 的 Control Manager。
2. 如果故障类型为 Pod Kill ，请确保配置了 ReplicaSet 或者类似保证 Pod 能够自动重启的机制。

:::

## 使用 dashboard 方式创建实验
1. 单击实验页面中的**新的实验**按钮进行创建实验。

![img](./img/create-pod-chaos-on-dashborad-1.jpg)

2. 在**选择目标**处选择 **POD 故障**，并选择具体行为，例如 **POD FAILURE**。

3. 填写实验信息，指定实验范围以及实验计划运行时间。

4. 提交实验。

## 使用 yaml 方式创建实验
### pod-failure 配置文件示例

```yaml
apiVersion: chaos-mesh.org/v1alpha1
kind: PodChaos
metadata:
  name: pod-failure-example
  namespace: chaos-testing
spec:
  action: pod-failure
  mode: one
  duration: '30s'
  selector:
    labelSelectors:
      'app.kubernetes.io/component': 'tikv'
```

依据此配置示例，Chaos Mesh 将向指定的 Pod 中注入 pod-failure 故障，使该 Pod 将在 30 秒 时间内处于不可用的状态。

### pod-kill 配置文件示例

```yaml
apiVersion: chaos-mesh.org/v1alpha1
kind: PodChaos
metadata:
  name: pod-kill-example
  namespace: chaos-testing
spec:
  action: pod-kill
  mode: one
  selector:
    namespaces:
      - tidb-cluster-demo
    labelSelectors:
      'app.kubernetes.io/component': 'tikv'
```

依据此配置示例，Chaos Mesh 将向指定的 Pod 中注入 pod-kill 故障，使该 Pod 将会被杀死一次。

### container-kill 配置文件示例

```yaml
apiVersion: chaos-mesh.org/v1alpha1
kind: PodChaos
metadata:
  name: container-kill-example
  namespace: chaos-testing
spec:
  action: container-kill
  mode: one
  containerName: 'prometheus'
  selector:
    labelSelectors:
      'app.kubernetes.io/component': 'monitor'
```

依据此配置示例，Chaos Mesh 将向指定的 Container 中注入 container-kill 故障，使该 Container 将会被杀死一次。

### 字段说明

|参数|类型|说明|默认值|是否必填|示例|
|---|---|---|---|---|---|
|action|string|表示具体的故障类型，仅支持pod-failure、pod-kill、container-kill|无|是|pod-kill|
|mode|string|表示运行实验时候的运行方式，支持one、all、fixed、fixed-percent、random-max-percent|无|是|one|
|value|string|取决与mode的取值，为mode提供参数|无|否|2|
|selector|struct|指定注入故障的目标pod，可以参考[文档](./define-chaos-experiment-scope.md)|无|是||
|containerName|string|当action为container-kill必填，指定注入故障的目标container名|无|否|prometheus|
|gracePeriod|int64|当action为pod-kill的时候需要，指定删除pod之前的持续时间 |0|否|0|
|duration|string|指定具体实验的持续时间|无|是|30s|

-  **mode**选项:
    
    如果为 **one** ，表示随机选择出一个符合条件的 Pod 。
    
    如果为 **all** ，表示选择出所有符合条件的 Pod 。
    
    如果为 **fixed** ，表示选择出指定数量的符合条件的 Pod。
    
    如果为 **fixed-percent** ，表示选择出占符合条件的 Pod 中指定百分比的 Pod。
    
    如果为 **random-max-percent** ，表示选择出占符合条件的 Pod 中不超过指定百分比的 Pod。
