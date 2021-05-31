---
title: 定义实验范围
sidebar_label: 定义实验范围
---

本篇文档描述如何为单个混沌实验定义实验范围，帮助用户更有准备地控制故障爆炸半径。

## 简介

Chaos Mesh 中通过 Selectors 的方式选择混沌实验目标对象，不同的 Selector 定义不同的过滤规则，如果同时指定多个 Selector，代表当前实验目标需要满足所有的 Selectors 规则。

## Selectors

### Namespace Selectors

字符串数组类型，用来指定待实验目标 Pod 所属的 Namespaces。如果此配置项为空，Chaos Mesh 会自动将其设置成当前混沌实验所属的 Namespace，也就是说 Chaos Mesh 默认当用户不单独指定目标 Namespace 时，会将混沌实验创建在混沌实验目标对象的 Namespace 下。

当用户通过 YAML 文件创建实验，配置如下：

```yaml
spec:
  selector:
    namespaces:
      - 'app-ns'
```

### Label Selector

键值对类型，用来过滤实验目标，用户需要根据实验目标 Pod 的 [Labels](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/) 填写此选项。如果设置了多个 Labels，意味实验目标需要带有此选项设置的所有 Labels。

当用户通过 YAML 文件创建实验，配置如下：

```yaml
spec:
  selector:
    labelSelectors:
      'app.kubernetes.io/component': 'tikv'
```

### Expression Selector

一组用来定义 Label 规则的[表达式](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#resources-that-support-set-based-requirements)，用户可以通过此选项设置不满足某些 Labels 的实验目标 Pod。

当用户通过 YAML 文件创建实验，配置如下：

```yaml
spec:
  selector:
    expressionSelectors:
      - { key: tier, operator: In, values: [cache] }
      - { key: environment, operator: NotIn, values: [dev] }
```

### Annotation Selector

键值对类型，用来过滤实验目标，用户需要根据实验目标 Pod 的 [Annotations](https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/) 填写此选项。如果设置了多个 Annotations，意味实验目标需要带有此选项设置的所有 Annotations。

当用户通过 YAML 文件创建实验，配置如下：

```yaml
spec:
  selector:
    annotationSelectors:
      'example-annotation': 'group-a'
```

### Field Selector

键值对类型，用来过滤实验目标，用户需要根据实验目标 Pod 的 [Fields](https://kubernetes.io/docs/concepts/overview/working-with-objects/field-selectors/) 填写此选项。如果设置了多个 Fields 字段，意味实验目标需要带有此选项设置的所有 Fields。

当用户通过 YAML 文件创建实验，配置如下：

```yaml
spec:
  selector:
    fieldSelectors:
      'metadata.name': 'my-pod'
```

### PodPhase Selector

字符串数组类型，用来指定实验目标 Pod 的 Phase。支持的 Phase 有：Pending、Running、Succeeded、Failed、Unknown。此选项默认为空，意味不限制目标 Pod 的 Phase。

当用户通过 YAML 文件创建实验，配置如下：

```yaml
spec:
  selector:
    podPhaseSelectors:
      - 'Running'
```

### Node Selector

键值对类型，用来过滤实验目标所属的 Node，用户需要根据目标 Pod 所在 [Node 的 Labels](https://kubernetes.io/docs/tasks/configure-pod-container/assign-pods-nodes/) 填写此选项。如果设置了多个 Node Labels，意味这实验目标 Pod 所属的 Node 需要带有所设置的所有的 Labels。

当用户通过 YAML 文件创建实验，配置如下：

```yaml
spec:
  selector:
    nodeSelectors:
      'node-label': 'label-one'
```

### Node List

字符串数组，用来指定实验目标所属的 Node，用户需要根据目标 Pod 所属的 Node 来填写此项。目标 Pod 只需属于配置的列表中其中一个 Node 即可。

当用户通过 YAML 文件创建实验，配置如下：

```yaml
spec:
  selector:
    nodes:
      - node1
      - node2
```

### Pod List

键值对类型，"键"为目标 Pod 所属的 Namespace, "值"为目标 Pod 列表。如果此选项不为空，则会**忽略其他配置的 Selectors**。

当用户通过 YAML 文件创建实验，配置如下：

```yaml
spec:
  selector:
    pods:
      tidb-cluster: # namespace of the target pods
        - basic-tidb-0
        - basic-pd-0
        - basic-tikv-0
        - basic-tikv-1
```

## 在 Dashboard 上定义实验范围

当用户在 Chaos Dashboard 上创建混沌实验时，配置混沌实验范围也是必须的步骤。目前 Chaos Dashboard 上提供设置 `Namespace Selectors`、`Label Selectors`、`Annotation Selectors` 和 `Phase Selectors`。此外用户在设置 Selectors 同时可以在 Dashboard 中实时的预览实验目标的实际范围，并且可以直接修改 Selectors 过滤出的目标 Pod。

:::note TODO

增加 Dashboard 截图

:::

## 拓展定义实验范围的规则

TODO
