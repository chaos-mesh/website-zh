---
title: 快速试用（测试推荐）
sidebar_label: 快速试用（测试推荐）
---

本篇文档描述如何在测试环境或本机环境快速试用 Chaos Mesh。

## 先决条件

在试用之前，请确保环境中已经搭建好 Kubernetes，你可以通过以下链接来部署 Kubernetes 集群：

- [kubernetes](https://kubernetes.io/docs/setup/)
- [minikube](https://minikube.sigs.k8s.io/docs/start/)
- [kind](https://kind.sigs.k8s.io/docs/user/quick-start/)
- [k3s](https://rancher.com/docs/k3s/latest/en/quick-start/)

## 通过脚本安装

<PickVersion className="language-bash">
  curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash
</PickVersion>

:::note

如果当前环境为 [k3s](https://k3s.io/)，请在脚本后添加 `--k3s` 参数。

<PickVersion className="language-bash">
  curl -sSL https://mirrors.chaos-mesh.org/v1.2.0/install.sh | bash -s -- --k3s
</PickVersion>

:::

以上的脚本将会自动应用与版本相符的 CRD，所有的组件及相关的 Service Account 配置。

:::caution

**通过脚本安装 Chaos Mesh 的方式只适用于快速试用。**

如果您想要在生产环境或者是其他严格的非测试场景下使用，我们推荐使用 [Helm](https://helm.sh/) 安装，详情请参考[使用 Helm 安装（生产推荐）](production-installation-using-helm.md)。

:::

## 验证安装

通过执行如下命令查看 pod 的运行情况：

```sh
kubectl get po -n chaos-testing

# 期望输出
NAME                                        READY   STATUS    RESTARTS   AGE
chaos-controller-manager-69fd5c46c8-xlqpc   1/1     Running   0          2d5h
chaos-daemon-jb8xh                          1/1     Running   0          2d5h
chaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h
```

## 运行 Chaos 实验

现在你可以运行一个 Chaos 实验来检验 Chaos Mesh 的能力了 😎。

我们推荐您从 [模拟 Pod 故障](simulate-pod-chaos-on-kubernetes.md) 入手，在成功创建 Pod 故障后，您可以通过 Chaos Dashboard 观察实验的运行状态。

## 卸载

通过执行如下命令卸载 Chaos Mesh：

<PickVersion className="language-bash">
  curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --template | kubectl delete -f -
<PickVersion>

也可以通过删除 `chaos-testing` 命名空间直接卸载 Chaos Mesh：

```sh
kubectl delete ns chaos-testing
```

## 最后

如果你想了解更多的安装细节，请参考 `install.sh` 的源代码：

<https://github.com/chaos-mesh/chaos-mesh/blob/master/install.sh>
