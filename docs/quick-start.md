---
title: 快速试用（测试推荐）
sidebar_label: 快速试用（测试推荐）
---

import PickVersion from '@site/src/components/PickVersion'

本篇文档描述如何在测试环境或本机环境快速试用 Chaos Mesh。

## 先决条件

在试用之前，请确保环境中已经搭建好 Kubernetes。可以通过以下链接来部署 Kubernetes 集群：

- [kubernetes](https://kubernetes.io/docs/setup/)
- [minikube](https://minikube.sigs.k8s.io/docs/start/)
- [kind](https://kind.sigs.k8s.io/docs/user/quick-start/)
- [k3s](https://rancher.com/docs/k3s/latest/en/quick-start/)
- [microk8s](https://microk8s.io/)

## 安装

运行如下脚本安装 Chaos Mesh：

<PickVersion className="language-bash">
curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash
</PickVersion>

:::note

- 如果当前环境为 [kind](https://kind.sigs.k8s.io/)，请在脚本后添加 `--local kind` 参数。

  <PickVersion className="language-bash">
  curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --local kind
  </PickVersion>

- 如果当前环境为 [k3s](https://k3s.io/)，请在脚本后添加 `--k3s` 参数。

  <PickVersion className="language-bash">
  curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --k3s
  </PickVersion>

- 如果当前环境为 [microk8s](https://microk8s.io/)，请在脚本后添加 `--microk8s` 参数。

  <PickVersion className="language-bash">
  curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --microk8s
  </PickVersion>
:::

以上的脚本将会自动应用与版本相符的 CRD，所有的组件及相关的 Service Account 配置。

如果想了解更多的安装细节，请参考 `install.sh` 的源代码：<https://github.com/chaos-mesh/chaos-mesh/blob/master/install.sh>。

:::caution

**通过脚本安装 Chaos Mesh 的方式只适用于快速试用。**

如果需要在生产环境或者是其他严格的非测试场景下安装，我们推荐使用 [Helm](https://helm.sh/)，详情请参考[使用 Helm 安装（生产推荐）](production-installation-using-helm.md)。

:::

## 验证安装

通过执行如下命令查看 Chaos Mesh 的运行情况：

```sh
kubectl get po -n chaos-testing

# 期望输出
NAME                                        READY   STATUS    RESTARTS   AGE
chaos-controller-manager-69fd5c46c8-xlqpc   1/1     Running   0          2d5h
chaos-daemon-jb8xh                          1/1     Running   0          2d5h
chaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h
```

如果输出与上面的期望输出一致，这表示 Chaos Mesh 已经成功安装了 🎉。

:::info

如果出现了 `Status` 不是 `Running` 的输出，则需要检查一下 pod 的细节：

```sh
# 以 chaos-controller 为例
kubectl describe po -n chaos-testing chaos-controller-manager-69fd5c46c8-xlqpc
```

:::

## 运行 Chaos 实验

现在可以运行一个 Chaos 实验来检验 Chaos Mesh 的能力了 😎。

我们推荐从[模拟 Pod 故障](simulate-pod-chaos-on-kubernetes.md)入手，在成功创建实验后，您可以通过 Chaos Dashboard 观察实验的运行状态。

## 卸载

通过执行如下命令卸载 Chaos Mesh：

<PickVersion className="language-bash">
curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --template | kubectl delete -f -
</PickVersion>

也可以通过删除 `chaos-testing` 命名空间直接卸载 Chaos Mesh：

```sh
kubectl delete ns chaos-testing
```

## FAQ

### 为什么会出现安装后根目录会出现 `local` 目录

如果使用了 `--local kind` 参数但是当前环境并没有安装 kind，`install.sh` 将会自动安装 kind 到根目录的 `local` 中。

### 如何指定 `kind` 版本

在脚本后添加 `--kind-version xxx` 参数，如：

<PickVersion className="language-bash">
curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --local kind --kind-version v0.10.0
</PickVersion>

### 在中国大陆拉取镜像

在脚本后添加 `--docker-mirror` 参数。

这将让 `install.sh` 使用 `dockerhub.azk8s.cn` 和 `gcr.azk8s.cn` 拉取镜像。
