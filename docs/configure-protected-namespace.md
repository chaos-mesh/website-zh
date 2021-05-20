---
title: 配置受保护的命名空间
sidebar_label: 配置受保护的命名空间
---

## 控制混沌实验生效的范围

每个混沌实验可以通过选择器来指定混沌实验生效的范围。除此以外 Chaos Mesh 还提供了
全局定义生效范围的功能，允许用户限制混沌实验只在指定的范围内生效。

该功能通过 `controllerManager.enableFilterNamespace` 配置控制是否启用，默认处于
关闭状态。在开启此项配置之后，混沌实验将只会在标记有
`chaos-mesh.org/inject=enabled` 的 `namespace` 中进行。

## 开启 FilterNamespace 功能

在使用 helm 进行安装时，可以添加 `--set
controllerManager.enableFilterNamespace=true` 来启动这项功能。例如使用以下命令安
装：

```bash
helm install chaos-mesh chaos-mesh/chaos-mesh -n chaos-testing --set controllerManager.enableFilterNamespace=true
```

如果已经通过 helm 安装了 chaos-mesh ，可以通过 `helm upgrade` 来更新配置：

```bash
helm upgrade chaos-mesh chaos-mesh/chaos-mesh -n chaos-testing --set controllerManager.enableFilterNamespace=true
```

`helm upgrade` 中可以通过设置多个 `--set` 参数来设置多个参数，覆盖规则是后设置的
覆盖前设置的。比如 `--set controllerManager.enableFilterNamespace=false --set
controllerManager.enableFilterNamespace=true` 仍将开启这项功能。

也可以通过 `-f` 参数来指定一个 YAML 文件用于描述配置，详细请参考 [helm 文
档](https://helm.sh/zh/docs/helm/helm_upgrade/#%E7%AE%80%E4%BB%8B)

## 为 Namespace 添加 Annotation

在打开 FilterNamespace 功能后，Chaos Mesh 将只会对标记有
`chaos-mesh.org/inject=enabled` 的 `namespace` 施加影响。所以在进行混沌实验之
前，需要将允许实验的部分命名空间加上该 `annotation`，其他命名空间则受到保护不会
被 Chaos Mesh 注入。

使用 `kubectl` 可以通过如下命令为一个 `namespace` 添加注解：

```bash
kubectl annotate ns $NAMESPACE chaos-mesh.org/inject=enabled
```

其中 `$NAMESPACE` 为命名空间的名子，比如 `default`。如果成功，得到输出如下：

```bash
namespace/$NAMESPACE annotated
```

如果希望删除这一注解，则可以通过以下命令：

```bash
kubectl annotate ns $NAMESPACE chaos-mesh.org/inject-
```

成功输出如下：

```bash
namespace/$NAMESPACE annotated
```

## 查询所有启用 Chaos 的 Namespace

可以通过以下命令列出所有含有此注解的 `namespace`：

```bash
kubectl get ns -o jsonpath='{.items[?(@.metadata.annotations.chaos-mesh\.org/inject=="enabled")].metadata.name}'
```

将会输出所有拥有此注解的`namespace`的名字，例如：

```bash
default
```