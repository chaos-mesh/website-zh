---
title: 运行实验
sidebar_label: 运行实验
---

:::note 注意

以下为样例内容，用于测试本网站显示功能。最终内容将在后续版本中提供。

:::

import PickVersion from '@site/src/components/PickVersion'

现在你已经在你的环境中部署了 Chaos Mesh，是时候使用它进行混沌实验了。本文将带领你完成运行混沌实验的过程。它还描述了对混沌实验的常规操作。

## 步骤 1：部署目标集群

部署一个测试集群。为了说明问题，[web-show](https://github.com/chaos-mesh/web-show)被用作例子集群，因为它允许我们直接观察网络混沌的效果。你也可以部署你自己的应用程序进行测试。

<PickVersion className="language-bash">
  curl -sSL https://mirrors.chaos-mesh.org/latest/web-show/deploy.sh | bash
</PickVersion>

执行上述命令后，你可以在浏览器中访问[`http://localhost:8081`](http://localhost:8081)，以检查网络展示的应用程序。

:::note 注意

如果 web-show 被部署在服务器上，你需要使用主机 IP 来访问该应用程序。

:::

## 步骤 2：定义实验配置文件

混乱的实验配置是在 YAML 文件中定义的。你需要根据下面样本中的可用字段来创建自己的实验配置文件。

<! -- prettier-ignore -->

```yaml
apiVersion: chaos-mesh.org/v1alpha1
类型。NetworkChaos
元数据。
  name: web-show-network-delay
规格。
  action: delay # 要注入的特定混沌动作
  mode: one # 运行混乱动作的模式；支持的模式有one/all/fixed/fixed-percent/random-max-percent
  选择器。# 注入混沌行动的pods
    命名空间。
      - 默认
    labelSelectors:
      "app": "web-show" # 用于注入混沌的pod的标签
  延迟。
    latency: "10ms"
  持续时间。"30s" # 注入混沌实验的持续时间
  scheduler: # 关于pod的混沌实验的运行时间的调度器规则。
    cron: "@every 60s"
```

## 第三步：应用混沌实验

运行下面的命令来应用实验。

```bash
# 确保你在 chaos-mesh/examples/web-show 目录中
kubectl apply -f network-delay.yaml
```

然后你可以在浏览器中访问[`http://localhost:8081`](http://localhost:8081)，查看混沌实验的结果。

从线图中可以看出，每 60 秒有一个 10 毫秒的网络延迟。如果你感到好奇，想用混沌网格尝试更多的混沌实验，请查看[examples/web-show](https://github.com/pingcap/chaos-mesh/tree/master/examples/web-show)。

## 混沌实验的常规操作

在本节中，你将学习一些混沌实验运行时的后续操作。

### 更新一个混沌实验

``bash
vim network-delay.yaml # 修改 network-delay.yaml 为你想要的样子
kubectl apply -f network-delay.yaml

````

### 暂停一个混沌实验

```bash
kubectl annotate networkchaos web-show-network-delay experiment.chaos-mesh.org/pause=true
````

###恢复混沌实验

```bash
kubectl annotate networkchaos web-show-network-delay experiment.chaos-mesh.org/pause
```

###删除一个混沌实验

```bash
kubectl delete -f network-delay.yaml
```

如果你遇到删除动作受阻的情况，这意味着有一些目标 pod 无法恢复。你可以查看 Chaos Mesh 的日志，或者随时提交一个[issue](https://github.com/pingcap/chaos-mesh/issues)。此外，你也可以通过以下命令强制删除混沌实验。

``bash
kubectl annotate networkchaos web-show-network-delay chaos-mesh.chaos-mesh.org/cleanFinalizer=forced

```

###在Chaos Dashboard中观看你的混沌实验

Chaos Dashboard是一个用于管理、设计、监控混沌实验的Web UI。请继续关注更多的支持，或者加入我们，使之成为现实。

:::note 注意

如果没有安装Chaos Dashboard，请通过执行`helm upgrade chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --set dashboard.create=true'升级Chaos Mesh。

:::

一个典型的方法是使用`kubectl port-forward`来访问它。

``bash
kubectl port-forward -n chaos-testing svc/chaos-dashboard 2333:2333
```

然后你就可以在浏览器中访问[`http://localhost:2333`](http://localhost:2333)。

要快速了解 Chaos Dashboard 的工作流程，请查看以下文章。

- [Craig Morten: K8s Chaos Dive: Chaos-Mesh Part 1] (https://dev.to/craigmorten/k8s-chaos-dive-2-chaos-mesh-part-1-2i96)
