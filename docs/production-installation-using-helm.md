---
title: 使用 Helm 安装（生产推荐）
sidebar_label: 使用 Helm 安装（生产推荐）
---

import VerifyInstallation from './common/verify-installation.md'
import QuickRun from './common/quick-run.md'

本片文档描述如何在生产环境安装 Chaos Mesh。

## 环境准备

在安装之前，请先确保环境中已经安装 [Helm](https://helm.sh/docs/intro/install/)。

如要查看 Helm 是否已经安装，请执行如下命令：

```sh
helm version
```

以下是预期输出：

```sh
version.BuildInfo{Version:"v3.5.4", GitCommit:"1b5edb69df3d3a08df77c9902dc17af864ff05d1", GitTreeState:"dirty", GoVersion:"go1.16.3"}
```

如果你的实际输出与预期输出一致，这表示 Helm 已经成功安装了。

:::note

后续的命令将会使用 Helm v3 来安装 Chaos Mesh。如果你使用的是 Helm v2，请参考 [Migrating Helm v2 to v3](https://helm.sh/docs/topics/v2_v3_migration/) 或按照 v2 的格式进行修改。

:::

## 使用 Helm 安装

在安装前，首先需要在 Helm 仓库中添加 Chaos Mesh 仓库：

```sh
helm repo add chaos-mesh https://charts.chaos-mesh.org
```

添加后，执行如下命令显示可以安装的 charts：

```sh
helm search repo chaos-mesh
```

在上述命令完成后，接下来开始安装 Chaos Mesh。

### 创建命名空间

推荐将 Chaos Mesh 安装在 `chaos-testing` 命名空间下，也可以指定任意命名空间安装 Chaos Mesh：

```sh
kubectl create ns chaos-testing
```

### 在不同环境下安装

由于存在多种容器环境，在安装时需要设置不同的值，可以根据不同的环境来运行如下不同的安装命令。

#### Docker

```sh
helm install chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing
```

#### containerd

```sh
helm install chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock
```

#### K3s

```sh
helm install chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/k3s/containerd/containerd.sock
```

## 验证安装

<VerifyInstallation />

## 运行 Chaos 实验

<QuickRun />

## 升级 Chaos Mesh

如要升级 Chaos Mesh，请根据需要设置不同的值。例如如下命令会卸载 `chaos-dashboard`：

```sh
helm upgrade chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --set dashboard.create=false
```

:::note

如果想了解更多的值及其相关的用法，请参考 [所有的值](https://github.com/chaos-mesh/chaos-mesh/blob/master/helm/chaos-mesh/values.yaml)。

:::

## 卸载 Chaos Mesh

如要卸载 Chaos Mesh，请执行以下命令：

```sh
helm uninstall chaos-mesh -n chaos-testing
```

## 常见问题解答

### 如何安装最新版本的 Chaos Mesh

Chaos Mesh 仓库中的 `helm/chaos-mesh/values.yaml` 定义了最新版本的 images，若想要安装最新版本的 Chaos Mesh，请执行一下命令：

```sh
git clone https://github.com/chaos-mesh/chaos-mesh.git
cd chaos-mesh

helm install chaos-mesh helm/chaos-mesh --namespace=chaos-testing
```
