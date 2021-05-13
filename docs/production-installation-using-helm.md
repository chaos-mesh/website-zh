---
title: 使用 Helm 安装（生产推荐）
sidebar_label: 使用 Helm 安装（生产推荐）
---

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

推荐将 Chaos Mesh 安装在 `chaos-testing` 命名空间下，你也可以指定任何命名空间安装 Chaos Mesh：

```sh
kubectl create ns chaos-testing
```

### 在不同环境下安装

由于存在多种容器环境，在安装的时候需要指定不同的值，可以根据不同的环境来运行不同的安装命令。

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

要查看 Chaos Mesh 的运行情况，请执行以下命令：

```sh
kubectl get po -n chaos-testing
```

以下是预期输出：

```sh
NAME                                        READY   STATUS    RESTARTS   AGE
chaos-controller-manager-69fd5c46c8-xlqpc   1/1     Running   0          2d5h
chaos-daemon-jb8xh                          1/1     Running   0          2d5h
chaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h
```

如果你的实际输出与预期输出一致，表示 Chaos Mesh 已经成功安装。

:::info

如果实际输出的 `STATUS` 状态不是 `Running`，则需要运行以下命令查看 Pod 的详细信息，然后依据错误提示排查并解决问题。

```sh
# 以 chaos-controller 为例
kubectl describe po -n chaos-testing chaos-controller-manager-69fd5c46c8-xlqpc
```

:::
