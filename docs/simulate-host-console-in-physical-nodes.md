---
title: 模拟主机故障
sidebar_label: 模拟主机故障
---

## 模拟主机故障

Chaosd 支持模拟主机关机故障。本文档介绍如何使用命令行模拟主机关机故障。

### 创建实验

可以通过运行以下命令模拟主机关机故障：

```bash
chaosd attack host shutdown
```

执行该命令后，你的主机会在所有进程关闭后关机。

要查看 Chaosd 支持哪些类型的主机关机实验，执行以下命令：

```bash
chaosd attack host shutdown -h
```

输出如下所示：

```bash
shutdowns system, this action will trigger shutdown of the host machine

Usage:
  chaosd attack host shutdown [flags]

Flags:
  -h, --help   help for shutdown

Global Flags:
      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'
```

### 创建实验示例

```bash
chaosd attack host shutdown
```
