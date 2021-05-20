---
title: 离线安装
sidebar_label: 离线安装
---

import PickVersion from '@site/src/components/PickVersion'

本篇文档描述如何离线安装 Chaos Mesh。

## 环境准备

在离线安装前，请先确保环境中已经安装 Docker 并部署了 Kubernetes 集群。如果环境尚未准备好，可以参考以下链接进行 Docker 的安装和 Kubernetes 的部署：

- [Docker](https://www.docker.com/get-started)
- [Kubernetes](https://kubernetes.io/docs/setup/)

## 准备安装

为了离线安装 Chaos Mesh，首先需要在网络连通的条件下获取所有的安装镜像。

### 指定版本号

首先，设置 Chaos Mesh 的版本号到环境变量中：

<PickVersion className="language-bash">
export CHAOS_MESH_VERSION=latest
</PickVersion>

### 归档 Chaos Mesh 镜像

拉取指定镜像：

```sh
docker pull pingcap/chaos-mesh:${CHAOS_MESH_VERSION}
docker pull pingcap/chaos-daemon:${CHAOS_MESH_VERSION}
docker pull pingcap/chaos-dashboard:${CHAOS_MESH_VERSION}
```

保存镜像为 tar 包：

```sh
docker save pingcap/chaos-mesh:${CHAOS_MESH_VERSION} > chaos-mesh-${CHAOS_MESH_VERSION}.tar
docker save pingcap/chaos-daemon:${CHAOS_MESH_VERSION} > chaos-daemon-${CHAOS_MESH_VERSION}.tar
docker save pingcap/chaos-dashboard:${CHAOS_MESH_VERSION} > chaos-dashboard:${CHAOS_MESH_VERSION}.tar
```
