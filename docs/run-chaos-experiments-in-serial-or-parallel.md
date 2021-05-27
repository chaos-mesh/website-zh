---
title: 串行或并行运行实验
sidebar_label: 串行或并行运行实验
---

Chaos Mesh Workflow 提供了两种最基本的编排方式: 串行与并行。

## 串行

在 Workflow 中创建 `templates` 时, 使用 `templateType: Serial` 便可以声明一个串行节点。

串行节点中另一个必须的字段为 `tasks`, 类型为 `string` 列表, 值为串行执行的其他 `template` 名称, 例如:

```yaml
templates:
- name: serial-of-3-chaos
  templateType: Serial
  tasks:
  - chaos-a
  - chaos-b
  - chaos-c
...
```

声明了一个串行节点, 名为 `serial-of-3-chaos`, 将按照顺序执行 `chaos-a`, `chaos-b` 与 `chaos-c`, 待所有任务完成后, 串行节点被标记为完成。

串行节点执行时, 会依次执行 `tasks` 中声明的任务, 保持同一时间点只有一个任务在执行。

串行节点中的 `duration` 可选字段, 目的为限制整个串行流程的最长执行时间, 若达到了这个时间, 其下属的子节点将会被停止, 未执行的节点也不会再执行。 若所有子节点先于 `duration` 完成了行为, 串行节点即会立刻被标记为完成, `duration` 没有任何影响。

## 并行

在 Workflow 中创建 `templates` 时, 使用 `templateType: Parallel` 便可以声明一个并行节点。

并行节点中另一个必须的字段为 `tasks`, 类型为 `string` 列表, 值为并行执行的其他 `template` 名称, 例如:

```yaml
templates:
- name: parallel-of-3-chaos
  templateType: Parallel
  tasks:
  - chaos-a
  - chaos-b
  - chaos-c
...
```

声明了一个并行节点, 名为 `parallel-of-3-chaos`, 将同时执行 `chaos-a`, `chaos-b` 与 `chaos-c`, 待所有任务完成后, 并行节点被标记为完成。

并行节点执行时, 会同时执行 `tasks` 中所有声明的任务。

并行节点同样存在 `duration` 可选字段, 类似于串行节点, 目的为限制整个并行流程的最长执行时间, 若达到了这个时间, 其下属的子节点将会被停止。 若所有子节点先于 `duration` 完成了行为, 并行节点即会立刻被标记为完成, `duration` 没有任何影响。
