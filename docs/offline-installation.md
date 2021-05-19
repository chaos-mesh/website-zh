---
title: 离线安装
sidebar_label: 离线安装
---

import PickVersion from '@site/src/components/PickVersion'

本篇文档描述如何离线安装 Chaos Mesh。

## 环境准备

在离线安装前，请先确保环境中已经安装 Docker 并部署 Kubernetes 集群。如果环境尚未准备好，可以参考以下链接进行安装和部署：

- [Docker](https://www.docker.com/get-started)
- [Kubernetes](https://kubernetes.io/docs/setup/)

## 准备安装

为了离线安装 Chaos Mesh，首先需要在网络连通的条件下获取所有的安装镜像。

### 指定版本号

首先，设置 Chaos Mesh 的版本号到环境变量中：

<PickVersion className="language-bash">
export CHAOS_MESH_VERSION=latest
</PickVersion>
