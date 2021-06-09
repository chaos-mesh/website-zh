---
title: 检查 Workflow 状态
sidebar_label: 检查 Workflow 状态
---

## 通过 Chaos Dashboard 检查 Workflow 状态

<!--TODO: 待 Chaos Dashboard 完善后补充这一部分 -->

## 通过 `kubectl` 检查 Workflow 状态

1. 执行以下命令获取当前已经创建的 workflow。

```shell
kubectl -n <namespace> get workflow
```

2. 执行以下命令获取当前 workflow 下的所有 WorkflowNode。

```shell
kubectl -n <namespace> get workflownode --selector="chaos-mesh.org/workflow=<workflow-name>"
```

Workflow 在执行过程中的步骤会以 WorkflowNode 这一 CustomResource 来表示。

3. 执行以下命令获取 WorkflowNode 的详细状态。

```shell
kubectl -n <namespace> describe workflownode <workflow-node-name>
```

例如当前节点是否执行完成, 并行/串行节点的执行状态, 对应 Chaos 实验对象等。
