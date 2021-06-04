---
title: 模拟 DNS 故障
sidebar_label: 模拟 DNS 故障
---

## DNSChaos 介绍

DNSChaos 可以用于模拟错误的 DNS 响应，例如在收到 DNS 请求时返回错误，或者返回随机的 IP 地址。

## 部署 Chaos DNS Service

在使用 Chaos Mesh 创建 DNSChaos 混沌实验前，你需要部署一个专门的 DNS 服务用于注入故障，命令如下：

```bash
helm upgrade chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-testing --set dnsServer.create=true
```

执行后，可以通过如下命令检查 DNS 服务的状态是否正常：

```bash
kubectl get pods -n chaos-testing -l app.kubernetes.io/component=chaos-dns-server
```

确认 Pod 的状态为 `Running` 即可。

## 注意事项

1. 目前 DNSChaos 只支持 DNS 记录类型 `A` 和 `AAAA`。

2. Chaos DNS 服务运行的带有 [k8s_dns_chaos](https://github.com/chaos-mesh/k8s_dns_chaos) 插件的 CoreDNS。如果 Kubernetes 集群本身的 CoreDNS 服务包含一些特殊配置，你可以通过编辑 configMap `dns-server-config`，使 Chaos DNS 服务的配置与 K8s CoreDNS 服务的配置一致，编辑命令如下:

   ```bash
   kubectl edit configmap dns-server-config -n chaos-testing
   ```

## 使用 Dashboard 方式创建实验

1. 单击实验页面中的新的实验按钮进行创建实验:

   ![创建实验](./img/create-new-exp.jpeg)

2. 在选择目标处选择 DNS 故障，选择具体行为，例如 `ERROR`，然后填写匹配规则：

   ![DNSChaos 实验](./img/dnschaos-exp.png)

   图中配置的匹配规则可以对域名 `google.com`、`chaos-mesh.org` 和 `github.com` 生效，DNS 请求将返回错误。具体的匹配规则填写方式，参考[配置说明](#配置说明)中 `patterns` 字段的介绍。

3. 填写实验信息，指定实验范围以及实验计划运行时间:

   ![实验信息](./img/exp-info.png)

4. 提交实验。

## 使用 Yaml 方式创建实验

1. 将实验配置写入到文件中 `dnschaos.yaml`，内容如下所示：

   ```yaml
   apiVersion: chaos-mesh.org/v1alpha1
   kind: DNSChaos
   metadata:
     name: dns-chaos-example
     namespace: chaos-testing
   spec:
     action: random
     mode: all
     patterns:
       - google.com
       - chaos-mesh.*
       - github.?om
     selector:
       namespaces:
         - busybox
     duration: '50s'
     scheduler:
       cron: '@every 100s'
   ```

   该实验配置可以对域名 `google.com`、`chaos-mesh.org` 和 `github.com` 生效，DNS 请求将返回随机 IP 地址。具体的匹配规则填写方式，参考[配置说明](#配置说明)中 `patterns` 字段的介绍。

2. 使用 kubectl 创建实验，命令如下：

   ```bash
   kubectl apply -f dnschaos.yaml
   ```

### 配置说明

| 参数     | 类型        | 说明                                                                                                                                   | 默认值 | 是否必填 | 示例                |
| :------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------- | :----- | :------- | :------------------ | -------------------------------------------- |
| action   | string      | 定义 DNS 故障的行为，值可以为 `random` 或 `error`。当值为 `random` 时， DNS 服务返回随机的 IP 地址；当值为 `error` 时 DNS 服务返回错误 | 无     | 是       | `random` 或 `error` |
| patterns | string 数组 | 选择匹配故障行为的域名模版， 支持占位符 `?` 以及通配符 `*`                                                                             | []     | 无       | 否                  | `google.com`，`chaos-mesh.org`，`github.com` |

:::note 注意

- `patterns` 配置中的通配符必须位于字符串的尾部，例如 `chaos-mes*.org` 是不合法的配置。

- 当 `patterns` 没有配置时，默认对所有域名注入故障。

:::
