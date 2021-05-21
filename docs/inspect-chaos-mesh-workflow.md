---
title: 检查 Workflow 状态
sidebar_label: 检查 Workflow 状态
---

## 通过 Chaos Dashboard 检查 Workflow 状态

<!--TODO: 待 Chaos Dashboard 完善后补充这一部分 -->

## 通过 `kubectl` 检查 Workflow 状态

可以通过

```shell
kubectl -n <namespace> get workflow
```

来获取当前已经创建的 Workflow.

Workflow 在执行过程中的步骤会以 WorkflowNode 这一 CustomResource 来表示, 可以通过

```shell
kubectl -n <namespace> get workflownode --selector="chaos-mesh.org/workflow=<workflow-name>"
```

来获取当前 namespace 中名为 `<workflow-name>` 的 Workflow 下属的所有 WorkflowNode.

可以通过

```shell
kubectl -n <namespace> describe workflownode <workflow-node-name>
```

获取 WorkflowNode 的详细状态, 例如当前节点是否执行完成, 并行/串行节点的执行状态, 对应 Chaos 实验对象等.
