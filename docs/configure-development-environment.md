---
title: 配置开发环境
sidebar_label: 配置开发环境
---

本文档帮助你搭建 Chaos Mesh 的开发环境

## 环境要求

- [golang](https://golang.org/dl/) 版本不低于 v1.15
- [docker](https://www.docker.com/)
- [gcc](https://gcc.gnu.org/)
- [helm](https://helm.sh/) 版本不低于 v2.8.2
- [kind](https://github.com/kubernetes-sigs/kind)
- [nodejs](https://nodejs.org/en/) 和 [yarn](https://yarnpkg.com/lang/en/) (以开发 Chaos Dashboard)

## 准备工具链

确保你已经配置好了上述的环境，遵从如下步骤来配置用于编译 Chaos Mesh 的工具链

1. 将 Chaos Mesh 项目克隆至本地.

   ```bash
   git clone https://github.com/chaos-mesh/chaos-mesh.git
   cd chaos-mesh
   ```

2. 安装 Kubernetes API 开发框架 - [kubebuilder](https://github.com/kubernetes-sigs/kubebuilder) 和 [kustomize](https://github.com/kubernetes-sigs/kustomize).

   ```bash
   make ensure-all
   ```

3. 确保 [Docker](https://docs.docker.com/install/) 已经在你的电脑上安装并且正在运行.

4. 确保 [Docker Registry](https://docs.docker.com/registry/) 正在运行. 将环境变量 `DOCKER_REGISTRY` 设置为其地址:

   ```bash
   echo 'export DOCKER_REGISTRY=localhost:5000' >> ~/.bash_profile
   source ~/.bash_profile
   ```

5. 确保 `${GOPATH}/bin` 在你的 `PATH` 环境变量中.

   ```bash
   echo 'export PATH=$(go env GOPATH)/bin:${PATH}' >> ~/.bash_profile
   ```

   ```bash
   source ~/.bash_profile
   ```

6. 检查 Nodejs 相关环境.

   ```bash
    node -v
    yarn -v
   ```

现在你可以尝试编译 Chaos Mesh

```bash
make
```

如果没有报错，那么工具链已经配置完毕。

## 准备部署环境

在工具链准备完之后，你还需要一个本地的 Kubernetes 集群以部署 Chaos Mesh。由于 kind 已经安装好了，你可以直接使用我们提供的脚本启动一个 Kubernetes 集群：

```bash
hack/kind-cluster-build.sh
```

当你使用完这个集群，希望删除它时，可以使用：

```bash
kind delete cluster --name=kind
```

> 启动 Chaos Dashboard. (非必须)
>
> ```bash
> cd ui && yarn
> # 启动
> yarn start:default # cross-env REACT_APP_API_URL=http://localhost:2333 BROWSER=none react-scripts start
> ```

## 下一步

恭喜你！你现在已经完成了 Chaos Mesh 开发的准备工作，试试我们为你提供的两个例子吧：

- [新增混沌实验类型](add-new-chaos-experiment-type.md)
- [拓展 Chaos Daemon 接口](extend-chaos-daemon-interface.md)
