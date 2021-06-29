---
title: 升级至 Chaos Mesh 2.0
sidebar_label: 升级至 Chaos Mesh 2.0
---

本文将介绍从 Chaos Mesh 1.x 升级至 2.0 的详细步骤。Chaos Mesh 2.0 引入了一些新功能，并修复了许多问题。Chaos Mesh 2.0 重构了一部分代码，因此需要做一些额外的操作从 Chaos Mesh 1.x 来升级到 2.0。

## 升级工具

为了简化升级过程，Chaos Mesh 2.0 为你提供了升级工具（位于 tools/schedule-migration 路径下），包括一个 Bash 脚本文件以及用于将旧版 YAML 更新为新版 YAML 的 Go 程序。

为使用这一工具，我们建议将 Chaos Mesh 项目克隆至本地，或是从（这里应该有一个打包好的链接）获取。你需要拥有 Go 编译环境用于编译升级工具。

## 导出并升级实验

由于 CRD 在 Chaos Mesh 2.0 中发生了变化，旧版本的实验无法在 Chaos Mesh 2.0 上运行。如果希望继续使用这些实验，则需要将它们导出，修改并在升级后重新导入。升级脚本提供了这些功能。为了方便演示，我们假设这一脚本就在当前目录下。在运行之前，请确保当前用户有足够的权限访问集群：

```bash
bash migrate.sh -e
```

在当前目录下出现了许多 YAML 文件，这些就是被导出的实验文件。导出的实验已经被自动升级。

当然，你也可以使用工具手动升级旧版 YAML。将工具目录下的 `main.go` 编译为可执行文件，接着运行：

```bash
./main <path-to-old-yaml> <path-to-new-yaml>
```

就可以看到被升级过的新 YAML 文件。在删除旧资源后重新应用新 YAML 即可完成更新。

## 升级 CRD

当使用 Helm 升级 Chaos Mesh 时，为了能最大程度保证升级成功，请运行以下命令手动升级一次 CRD：

```bash
bash migrate.sh -c
```

即可看到 CRD 被删除后重新添加。

## 升级 Chaos Mesh

由于 2.0 的改动较大，我们推荐在卸载 1.x 后重新进行安装。具体安装步骤，请参考[使用 Helm 安装（生产推荐）](/production-installation-using-helm.md)。。

## 导入实验

Chaos Mesh 2.0 对实验定义进行了一些修改，需要对旧实验进行更新后才能继续使用。

在导出实验文件的同一目录下，请运行以下命令：

```bash
bash migrate.sh -i
```

## 问题反馈

如果在升级过程中遇到任何问题，请将命令行输出提交至 [slack](https://cloud-native.slack.com/archives/C0193VAV272) 或在 Github 上新建一个 [issue](https://github.com/pingcap/chaos-mesh/issues)。感谢你的反馈，Chaos Mesh 团队很乐意帮助解决。
