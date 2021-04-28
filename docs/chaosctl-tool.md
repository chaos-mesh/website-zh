---
title: chaosctl
sidebar_label: chaosctl
---

## 1. 简介
Chaosctl 是一个用于辅助调试 chaos mesh 的工具。我们希望利用 chaosctl 简化开发调试新chaos类型，以及提交issue相关日志的流程。

## 获取
我们为linux提供了可执行文件。你可以直接下载chaosctl。
```
curl -sSL https://mirrors.chaos-mesh.org/v1.2.0/chaosctl
```


使用windows或macOS的用户，可以从源代码自行编译。我们推荐使用go 1.15以上版本进行编译。具体步骤如下：

1. 将chaos mesh克隆至本地
   ```
   git clone https://github.com/chaos-mesh/chaos-mesh.git
   ```
2. 切换至chaos mesh目录下
3. 执行
   ```
   go build -o bin/chaosctl ./cmd/chaosctl/*.go
   ```

## 2. 功能介绍
chaosctl 有两类功能。


### 2.1 日志查看
使用 `chaosctl logs` 可以查看所有chaos mesh组件的日志。`chaosctl logs -h` 会提供关于此功能的帮助和例子。

### 2.2 调试chaos
使用 `chaosctl debug` 可以查看chaos的调试信息。`chaosctl debug -h` 会提供关于此功能的帮助和例子。使用这一功能时，chaosctl 需要与相应的 chaos daemon 建立连接，如果你在部署 chaos mesh 时关闭了 tls （默认打开），您需要使用 `-i` 选项来告知 chaosctl 不使用 tls 。

目前，chaosctl 只支持 iochaos, networkchaos, stresschaos 三类chaos的调试信息。

## 3. 使用场景
如果你希望提交关于 chaos mesh 的问题，在问题中附上相关的日志与 chaos 信息很有帮助。你可以将 `chaosctl logs` 的输出附在issue尾部以供开发人员参考。如果你希望提交的问题与 iochaos, networkchaos, stresschaos 有关，那么 `chaosctl debug` 的相关信息也会很有用。

## 4. 开发与改进
chaosctl 的代码目前托管于 chaos mesh 项目中，您可以在 `chaos-mesh/pkg/chaosctl` 找到相关实现。如果你有兴趣帮助我们改进这一工具，你可以联系我们，或是在 chaos mesh 项目中寻找相关issue。


