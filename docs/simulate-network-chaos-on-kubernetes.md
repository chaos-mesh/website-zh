---
title: 模拟网络故障
sidebar_label: 模拟网络故障
---

## NetworkChaos 介绍

NetworkChaos 用于模拟集群中网络故障的场景，目前支持以下几种类型：

1. **Partition**：网络断开、分区。
2. **Net Emulation**：用于模拟网络状态不良的情况，比如高延迟、高丢包率、包乱序等情况。

## 注意事项

1. 请在进行网络注入的过程中保证 Controller Manager 与 Chaos Daemon 之间的连接通畅，否则将无法恢复。
2. 如果使用 Net Emulation 功能，请确保 Linux 内核拥有 NET_SCH_NETEM 模块。对于 CentOS 可以通过 kernel-modules-extra 包安装，大部分其他发行版已默认安装相应模块。

## 使用 dashboard 方式创建实验

1. 单击实验页面中的“新的实验”按钮创建实验

![新的实验](./img/create-networkchaos-on-dashboard-1.png)

2. 在“选择目标”处选择“网络攻击”，并选择具体行为，如“LOSS”

![选择目标](./img/create-networkchaos-on-dashboard-2.png)

3. 填入实验的具体配置，并点击提交

![填入配置](./img/create-networkchaos-on-dashboard-3.png)

提交成功后，显示如下

![提交完成](./img/create-networkchaos-on-dashboard-4.png)

4. 填写实验信息，指定实验范围以及实验计划运行的时间，并点击提交

![填入目标](./img/create-networkchaos-on-dashboard-5.png)

提交成功后，显示如下

![填入目标](./img/create-networkchaos-on-dashboard-6.png)

5. 提交实验。在提交后将跳转到实验页面，可以看到创建的实验

![提交实验](./img/create-networkchaos-on-dashboard-7.png)

### 配置选项说明

对于不同类型的网络注入，有不同的参数可用于配置。