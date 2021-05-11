---
slug: /
title: Chaos Mesh 简介
sidebar_label: Chaos Mesh 简介
---

## 简介

Chaos Mesh 是一个开源的云原生混沌工程平台，提供丰富的故障模拟类型以及故障场景编排能力，方便用户在开发测试中以及生产环境中模拟现实世界中可能出现的各类异常，帮助用户发现系统潜在的问题。Chaos Mesh 从用户角度出发，为了进一步降低用户继续混沌工程门槛，提供了完善的可视化操作，用户可以方便的在 Web UI 界面上设计自己的混沌场景以及监控混沌实验的运行状态。

## Chaos Mesh 的核心优势

Chaos Mesh 作为业内领先的混沌测试平台，具备以下几个核心优势：

- 核心能力稳固。脱胎于 [TiDB](https://github.com/pingcap/tidb) 核心测试平台，发布伊始即包含了大量 TiDB 现存测试经验。
- 被充分验证。被众多公司以及组织所使用，同时被用于大量的知名分布式系统的测试体系中。
- 系统易用性强。图形化操作和基于 Kubernetes 的使用方式，充分利用了自动化能力。
- 云原生。Kubernetes 环境原生支持提供了强悍的自动化能力。
- 丰富的故障模拟场景。几乎涵盖了分布式测试体系中基础故障模拟的绝大多数场景。
- 灵活的实验编排能力。可以通过平台设计自己的混沌实验场景，包含多个混沌实验编排，以及应用状态检查等。
- 安全性高。多层次安全控制设计。
- 活跃的社区。全球知名开源混沌测试平台，CNCF 开源基金会孵化项目。
- 强大的扩展能力。为故障测试类型扩展和功能扩展提供了充分的扩展能力。

## 架构概览

Chaos Mesh 基于 Kubernetes CRD (Custom Resource Definition) 构建，按照不同的故障类型定义了多个 CRD 类型，并为不同的 CRD 对象实现单独的 Controller 去管理不同混沌实验。 Chaos Mesh 主要包含三个组件，分别为：

- **Chaos Dashboard**：Chaos Mesh 可视化组件，提供 Web 界面对混沌实验进行操作和观测。Chaos Dashboard 提供了一套友好的用户界面，同时提供了依照 RBAC 的权限管理机制。
- **Chaos Controller Manager**：Chaos Mesh 核心逻辑组件，主要负责混沌实验的调度与管理，该组件包含多个 CRD controller, 如 Workflow controller, scheduler controller 以及各类故障类型的 Controller。
- **Chaos Daemon**：Chaos Mesh 主要执行组件，Chaos Daemon 以 [DaemonSet](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/) 的方式运行，
  默认具有 Privileged 权限（可以关闭），该组件主要通过侵入到目标 Pod Namespace，干扰具体的网络设备，文件系统，内核等。

![Architecture](img/architecture.png)

Chaos Mesh 的整体架构如上图所展示，可以自上而下分为三个部分：

1. 用户输入、观测的部分。用户输入的部分是以用户的操作为起点，以 Kubernetes API Server 为重点，不直接和 Chaos Mesh 的 Controller 交互。一切的用户操作最终都将反映为某个 Chaos 资源的变更（比如 NetworkChaos 资源的变更）。Chaos Mesh 提供了三种输入的方式:
   1. 通过 kubectl 等命令行工具提交 YAML 文件。
   2. 通过 [kubernetes/client-go](https://github.com/kubernetes/client-go) 等包来对 Workflow 和 Chaos 资源进行增删查改。
   3. 通过 Chaos Dashboard 提供的 Web UI 界面对混沌试验进行操作和观测。
2. 监听资源变化，调度 Workflow 以及混沌实验。Chaos Mesh 的 Controller 总是只接受来自 Kubernetes API Server 的事件 —— 这种事件会描述“什么资源发生了什么变化”，如新的 Workflow 对象或者 Chaos 对象被创建。
3. 在具体节点上进行故障注入。该部分主要由 Chaos Daemon 组件负责，接受来自 Chaos Controller Manager 组件的指令，侵入到目标 Pod 的 Namespace 下，执行具体的故障注入。如设置 TC 网络规则，启动 stress-ng 进程抢占 CPU 或 Memory 资源等。

## 开始混沌实验

### 安装 Chaos Mesh

为了进行混沌实验，首先安装 Chaos Mesh，具体安装步骤参考 Chaos Mesh 安装文档。

### 进行混沌实验

安装成功后，可以参考具体操作文档，开始自己的混沌实验之旅。
