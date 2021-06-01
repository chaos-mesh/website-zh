---
title: 创建 Chaos Mesh Workflow
sidebar_label: 创建 Chaos Mesh Workflow
---

## Chaos Mesh Workflow 简介

Chaos Mesh Workflow 是一个内置的工作流引擎， 允许你串行/并行地执行多种不同的 Chaos 实验， 用于模拟生产级别的错误。

目前， Chaos Mesh Workflow 支持以下功能：

- 串行编排
- 并行编排
- 自定义任务 (Work In Progress)
- 条件分支 (Work In Progress)

使用场景举例： 

- 使用并行编排同时注入多个 NetworkChaos 模拟复杂的网络环境
- 在串行编排中进行健康检查， 使用条件分支决定是否执行剩下的步骤

Chaos Mesh Workflow 在设计时一定程度上参考了 Argo Workflow， 如果您熟悉 Argo Workflow 您也能很快地上手 Chaos Mesh Workflow。

:::note 注意

Github 仓库中含有其他 Workflow 的[示例](https://github.com/chaos-mesh/chaos-mesh/tree/master/examples/workflow).

:::
## 使用 Chaos Dashboard 创建 Workflow

<!--TODO: 待 Chaos Dashboard 完善后补充这一部分 -->

## 使用 YAML 文件与 `kubectl` 创建 Workflow

类似于各种类型的 Chaos 对象， Workflow 同样作为 CRD 存在于 kubernetes 集群中， 也可以使用 `kubectl create -f <workflow.yaml>` 创建。

例如:

使用本地 YAML 文件创建 Workflow:

```shell
kubectl create -f <workflow.yaml>
```

使用网络上的 YAML 创建 Workflow:

```shell
kubectl create -f https://raw.githubusercontent.com/chaos-mesh/chaos-mesh/master/examples/workflow/serial.yaml
```


一个简单的 Workflow 定义如下所示， 这个 Workflow 将会同时注入 `StressChaos`， `NetworkChaos` 与 `PodChaos`：

```yaml
apiVersion: chaos-mesh.org/v1alpha1
kind: Workflow
metadata:
  name: try-workflow-parallel
spec:
  entry: the-entry
  templates:
    - name: the-entry
      templateType: Parallel
      duration: 240s
      tasks:
        - workflow-stress-chaos
        - workflow-network-chaos
        - workflow-pod-chaos
    - name: workflow-network-chaos
      templateType: NetworkChaos
      duration: 20s
      networkChaos:
        direction: to
        action: delay
        mode: all
        selector:
          labelSelectors:
            "app": "hello-kubernetes"
        delay:
          latency: "90ms"
          correlation: "25"
          jitter: "90ms"
    - name: workflow-pod-chaos
      templateType: PodChaos
      duration: 40s
      podChaos:
        action: pod-kill
        mode: one
        selector:
          labelSelectors:
            "app": "hello-kubernetes"
        scheduler:
          cron: "@every 10s"
    - name: workflow-stress-chaos
      templateType: StressChaos
      duration: 20s
      stressChaos:
        mode: one
        selector:
          labelSelectors:
            "app": "hello-kubernetes"
        stressors:
          cpu:
            workers: 1
            load: 20
            options: ["--cpu 1"， "--timeout 600"]
```

其中 `templates` 定义了实验中的各个步骤， `entry` 定义了 Workflow 执行时的入口。

`templates` 中的每个元素都代表了一个 Workflow 的步骤， 例如:

```yaml
name: the-entry
templateType: Parallel
duration: 240s
tasks:
  - workflow-stress-chaos
  - workflow-network-chaos
  - workflow-pod-chaos
``` 

`templateType: Parallel` 代表节点的类型为并行； `duration: 240s` 代表这个节点下的所有并行实验预期在 240 秒内执行完成， 否则将超时； `tasks` 中代表了将要并行执行的其他 template 的名称。


再例如：

```yaml
name: workflow-pod-chaos
templateType: PodChaos
duration: 40s
podChaos:
  action: pod-kill
  mode: one
  selector:
    labelSelectors:
      "app": "hello-kubernetes"
  scheduler:
    cron: "@every 10s"
```

`templateType: PodChaos` 代表节点的类型为 PodChaos 实验； `duration: 40s` 代表当前 Chaos 实验将持续 40 秒； `podChaos` 字段是 PodChaos 实验的定义；

与 Chaos Dashboard 相比， 通过 YAML 与 `kubectl` 创建 Workflow 会更加灵活； 你可以对串行/并行编排进行嵌套， 声明复杂的编排， 甚至可以与条件分支组合达到循环的效果。
