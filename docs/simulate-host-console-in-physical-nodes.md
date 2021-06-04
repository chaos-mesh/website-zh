---
title: 模拟主机故障
sidebar_label: 模拟主机故障
---

## 模拟主机故障

通过shutdown模拟主机关机。

### 使用命令行模式创建实验

可以通过运行以下命令行查看 Chaosd 支持哪些类型的主机关机实验：

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

### 示例

```bash
chaosd attack host shutdown
```

输出如下所示：

```bash
andrew@LAPTOP-NUS30NQD:~/chaosd/bin$ ./chaosd attack host shutdown
Shutdown successfully, uid: 4bc9b74a-5fe2-4038-b4f3-09ae95b57694
```

##### 命令会导致在关闭所有进程后关机。