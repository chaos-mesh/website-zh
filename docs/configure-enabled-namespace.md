---
title: 配置允许混沌实验的命名空间
sidebar_label: 配置允许混沌实验的命名空间
---

本篇文章描述如何限制混沌实验只在指定的命名空间内生效，从而使其他命令空间受到保护不会被 Chaos Mesh 注入。

## 控制混沌实验生效的范围

Chaos Mesh 提供了全局定义生效范围的 FilterNamespace 功能，你可以限制混沌实验只在指定的命名空间内生效。默认情况下，此功能处于关闭状态。要开启此功能，你需要配置 `controllerManager.enableFilterNamespace` 的值为 `true`。在开启此项配置之后，你可以为允许混沌实验的命名空间添加 `chaos-mesh.org/inject=enabled` 注解限制混沌实验范围，其他命名空间则受到保护不会被 Chaos Mesh 注入。

除此以外，你也可以通过选择器来[为单个混沌实验指定实验生效的范围]("./define-chaos-experiment-scope")。

该功能通过 `controllerManager.enableFilterNamespace` 配置控制是否启用，默认处于关闭状态。在开启此项配置之后，混沌实验将只会在标记有`chaos-mesh.org/inject=enabled` 的 `namespace` 中进行。

## 开启 FilterNamespace 功能

如果你尚未安装 Chaos Mesh，在使用 Helm 进行安装时，可以在安装命令中添加 `--set controllerManager.enableFilterNamespace=true` 来开启这项功能。Docker 容器的命令示例如下：

```bash
helm install chaos-mesh chaos-mesh/chaos-mesh -n chaos-testing --set controllerManager.enableFilterNamespace=true
```

:::note 注意

当使用 Helm 进行安装时，不同容器运行时的命令和参数有所区别，详情请参阅[使用 Helm 安装](define-chaos-experiment-scope.md).

:::

如果已经通过 Helm 安装了 Chaos Mesh ，可以通过 `helm upgrade` 命令来更新配置。示例如下：

```bash
helm upgrade chaos-mesh chaos-mesh/chaos-mesh -n chaos-testing --set controllerManager.enableFilterNamespace=true
```

`helm upgrade` 中可以通过设置多个 `--set` 参数来设置多个参数，覆盖规则是后设置的覆盖前设置的。比如 `--set controllerManager.enableFilterNamespace=false --set controllerManager.enableFilterNamespace=true` 仍将开启这项功能。

也可以通过 `-f` 参数来指定一个 YAML 文件用于描述配置，详细请参考 [Helm 升级](https://helm.sh/zh/docs/helm/helm_upgrade/#%E7%AE%80%E4%BB%8B)

## 为命名空间添加混沌实验注解

在开启 FilterNamespace 功能后，Chaos Mesh 将只会向包含有 `chaos-mesh.org/inject=enabled` 注解的命名空间注入故障。因此，在进行混沌实验之前，你需要为允许混沌实验的命名空间添加该注解，其他命名空间则受到保护不会被注入故障。

使用 `kubectl` 可以通过如下命令为一个 `namespace` 添加注解：

```bash
kubectl annotate ns $NAMESPACE chaos-mesh.org/inject=enabled
```

其中 `$NAMESPACE` 为命名空间的名字，比如 `default`。如果成功，得到输出如下：

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

## 查看所有允许混沌实验的命名空间

你可以使用以下命令列出所有允许混沌实验的命名空间：

```bash
kubectl get ns -o jsonpath='{.items[?(@.metadata.annotations.chaos-mesh\.org/inject=="enabled")].metadata.name}'
```

此命令将会输出所有包含 `chaos-mesh.org/inject=enabled` 注解的命名空间。示例输出如下：

```bash
default
```