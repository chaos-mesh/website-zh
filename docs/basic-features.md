---
title: 基本功能
sidebar_label: 基本功能
---

## 故障注入

混沌实验的核心是注入故障，Chaos Mesh 从分布式系统的角度出发，充分考虑分布式系统可能出现的故障，提供全面、细粒度的故障类型，整体 Chaos Mesh 支持的故障类型可以分成三类：

- 基础资源类型故障
  - **[PodChaos](simulate-pod-chaos-on-kubernetes.md)**：模拟 Pod 故障，如 Pod 节点重启，持续不可用，以及具体 Pod 中的某些容器故障。
  - **[NetworkChaos](simulate-network-chaos-on-kubernetes.md)**：模拟网络故障，如网络延迟、网络丢包、包乱序、各类网络分区。
  - **[DNSChaos](simulate-dns-chaos-on-kubernetes.md)**：模拟 DNS 故障，如 DNS 域名解析失败、返回错误 IP 地址。
  - **[HTTPChaos](simulate-http-chaos-on-kubernetes.md)**：模拟 HTTP 通信故障，如 HTTP 通信延迟。
  - **[StressChaos](simulate-heavy-stress-on-kubernetes.md)**：模拟 CPU 抢占，或 Memory 抢占场景。
  - **[IOChaos](simulate-io-chaos-on-kubernetes.md)**：模拟具体某个应用的文件 I/O 故障，如 I/O 延迟、读写失败。
  - **[TimeChaos](simulate-time-chaos-on-kubernetes.md)**：模拟时间跳动异常。
  - **[KernelChaos](simulate-kernel-chaos-on-kubernetes.md)**：模拟内核故障，如应用内存分配异常。
- 平台类型故障
  - **[AWSChaos](simulate-aws-chaos.md)**：模拟 AWS 平台故障，如 AWS 节点重启。
  - **[GCPChaos](simulate-gcp-chaos.md)**：模拟 GCP 平台故障，如 GCP 节点重启。
- 应用层故障
  - **[JVMChaos](simulate-jvm-application-chaos.md)**：模拟 JVM 应用故障，如函数调用延迟。

## 混沌实验场景

混沌实验场景由一组混沌实验和和应用状态检查组成，目标帮助用户在平台上实现混沌工程闭环。用户运行混沌场景，可以通过一连串的混沌实验，不断的扩大爆炸半径（包括攻击范围）和故障类型。同时在运行混沌实验后，可以方便的检查当前的应用状态，判断是否进行后续的混沌实验。同时用户可以不断的迭代混沌实验场景，积累混沌实验场景，以及方便的将已有的混沌实验场景复用到其他的应用混沌实验上，很大程度上降低了混沌实验的成本。

目前混沌实验场景提供的共有：

- 编排串行混沌实验
- 编排并行混沌实验
- 支持状态检查步骤
- 支持中途暂停混沌实验
- 支持使用 YAML 文件方式定义和管理混沌实验场景
- 支持通过 Web UI 定义和管理混沌实验场景

具体的实验场景配置，参考具体[使用文档](create-chaos-mesh-workflow.md)。

## 可视化操作

Chaos Mesh 从用户角度出发，不仅可以提供通过 YAML 文件定义混沌实验和编排混沌实验场景的方式，还单独开发了 Chaos Dashbaord 组件，提供可视化支持。Chaos Dashboard 极大简化了混沌实验的复杂度，用户可以直接通过可视化界面来管理和监控混沌实验，仅需鼠标点一点就能够定义混沌实验的范围、指定混沌注入类型、定义调度规则，以及在界面上获取到混沌实验的结果等。

![混沌实验场景](img/dashboard-overview.png)

## 安全保障

Chaos Mesh 通过 Kubernetes 原生的 [RBAC](https://kubernetes.io/docs/reference/access-authn-authz/rbac/) (基于角色的权限控制) 功能对权限进行管理。可以根据实际的权限需求自由地创建多种 Role，然后绑定到用户名 Service Account 上，最后生成 Service Account 对应的 Token。使用该 Token 登陆 Dashboard，用户只能在该 Service Account 允许的权限范围内进行 Chaos 实验。此外 Chaos Mesh 还支持通过设置 Namespace Annotation 的方式开启特定 Namespace 下混沌实验的权限，进一步保障混沌实验的可控性。
