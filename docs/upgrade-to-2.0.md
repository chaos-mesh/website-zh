---
title: 升级至 Chaos Mesh 2.0
sidebar_label: 升级至 Chaos Mesh 2.0
---

Chaos Mesh 2.0 修复了许多问题，同时引入了一些新功能。我们对代码进行了一定程度上的重构，导致 Chaos Mesh 1.x 的用户需要一些额外的操作来升级到 2.0 。本文将介绍从 Chaos Mesh 1.x 升级至 2.0 的详细步骤。

## 升级工具

我们提供了一个升级脚本来简化升级过程。你可以在 tools/schedule-migration 找到它们。为使用这一工具，我们建议您将 Chaos Mesh 项目克隆至本地，或是从（这里应该有一个打包好的链接）获取。你需要拥有 go 编译环境以编译升级工具。

## 导出并升级实验

由于 CRD 在 Chaos Mesh 2.0 中发生了变化，旧版本的实验无法在 Chaos Mesh 2.0 上运行。如果希望继续使用这些实验，则需要将它们导出，修改并在升级后重新导入。升级脚本提供了这些功能。为了方便演示，我们假设这一脚本就在当前目录下。在运行之前，请确保当前用户有足够的权限访问集群：

```bash
bash migrate.sh -e
```

在当前目录下出现了许多yaml文件，这些就是被导出的实验。导出的实验已经被自动升级。

## 升级 CRD

如果使用 helm 升级 Chaos Mesh ，可能需要手动升级 CRD 。无论如何，手动升级一次 CRD 能最大程度保证升级成功。运行：

```bash
bash migrate.sh -c
```

即可看到 CRD 被删除后重新添加。

## 升级 Chaos Mesh

由于 2.0 的改动较大，我们推荐在卸载 1.x 后重新进行安装。具体安装步骤参见（此处应有安装教程链接）。

## 导入实验

Chaos Mesh 2.0 对实验定义进行了一些修改，需要对旧实验进行更新后才能继续使用。在导出实验的基础上，在同一目录下，运行：

```bash
bash migrate.sh -i
```

## 问题反馈

如果在升级过程中遇到任何问题，我们很乐意帮助解决。请将命令行输出一并提交至 [slack](https://cloud-native.slack.com/archives/C0193VAV272) 或新建 github issue 。
