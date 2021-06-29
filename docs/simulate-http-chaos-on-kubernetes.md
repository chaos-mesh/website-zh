---
title: 模拟 HTTP 故障
sidebar_label: 模拟 HTTP 故障
---

## HTTPChaos 简介

HTTPChaos 是 Chaos Mesh 提供的混沌类型之一，能够帮助你模拟 HTTP 服务端故障。目前 Chaos Mesh 支持在请求过程或响应过程中注入 HTTPChaos 相关故障，支持的故障类型如下：

- `abort`：中断服务端的连接
- `delay`：为目标过程注入延迟
- `replace`：替换请求报文或者响应报文的部分内容
- `patch`：给请求报文或响应报文添加额外内容

HTTPChaos 支持多种类型故障的组合，且注入故障的优先级（顺序）固定为 `abort` -> `delay` -> `replace` -> `patch`。其中 `abort` 故障会导致短路，直接中断此次连接。

HTTPChaos 详细的配置介绍参见 [YAML 配置文件](#yaml-配置文件)部分。

## 注意事项

在注入 HTTPChaos 相关故障之前，请注意以下事项：

- 确保目标 Pod 上没有运行 Chaos Mesh 的 Control Manager。
- 为使 HTTPChaos 注入生效，尽量避免复用客户端的 TCP socket。因为在注入故障前建立的 TCP socket 上进行 HTTP 请求不受 HTTPChaos 影响。
- 在生产环境下谨慎使用非幂等语义请求（例如大多数 POST 请求）。若使用了这类请求，注入故障后可能无法通过重复请求使目标服务恢复正常状态。

## 创建实验

目前只支持使用 YAML 配置文件创建 HTTPChaos 实验。以配置文件名 `example.yaml` 为例，使用 `kubectl` 命令 `kubectl apply -f example.yaml` 即可创建实验。

### YAML 配置文件

每次创建实验前，你需要准备好故障的 YAML 配置文件。本节提供 YAML 配置文件示例，以及对文件中的字段进行介绍。

#### `abort` 故障配置文件示例

```yaml
apiVersion: chaos-mesh.org/v1alpha1
kind: HTTPChaos
metadata:
  name: test-http-chaos
spec:
  mode: all
  selector:
    labelSelectors:
      app: nginx
  target: Request
  port: 80
  method: GET
  path: /api
  abort: true
  duration: 5m
  scheduler:
    cron: '@every 10m'
```

#### 其它故障组合的配置文件示例

```yaml
apiVersion: chaos-mesh.org/v1alpha1
kind: HTTPChaos
metadata:
  name: test-http-chaos
spec:
  mode: all
  selector:
    labelSelectors:
      app: nginx
  target: Request
  port: 80
  method: GET
  path: /api/*
  delay: 10s
  replace:
    path: /api/v2/
    method: DELETE
  patch:
    headers:
      - ['Token', '<one token>']
      - ['Token', '<another token>']
    body:
      type: JSON
      value: '{"foo": "bar"}'
  duration: 5m
  scheduler:
    cron: '@every 10m'
```

#### 通用字段说明

通用字段指注入目标为 Request 和 Response 时均有意义的字段。

| 参数               | 类型                | 说明                                                                                                | 默认值             | 是否必填 | 示例                             |
| ------------------ | ------------------- | --------------------------------------------------------------------------------------------------- | ------------------ | -------- | -------------------------------- |
| `mode`             | `string`            | 表示运行实验时候的运行方式，支持`one`、`all`、`fixed`、`fixed-percent`、`random-random-max-percent` |                    | 是       | `one`                            |
| `value`            | `string`            | 取决于 `mode` 的取值，为 `mode` 提供参数                                                            |                    | 否       | `2`                              |
| `target`           | `string`            | 故障注入的目标过程，`Request` 或 `Response`                                                         |                    | 是       | `Request`                        |
| `port`             | `int32`             | 目标服务监听的 TCP 端口                                                                             |                    | 是       | `80`                             |
| `method`           | `string`            | 目标请求的 HTTP method                                                                              | 默认对所有方法生效 | 否       | `GET`                            |
| `path`             | `string`            | 目标请求的 URI 路径，支持[通配符](https://www.wikiwand.com/en/Matching_wildcards)                   | 默认对所有路径生效 | 否       | `/api/*`                         |
| `request_headers`  | `map[string]string` | 目标请求的请求头匹配                                                                                | 默认对所有请求生效 | 否       | `Content-Type: application/json` |
| `abort`            | `bool`              | 是否注入连接中断故障                                                                                | `false`            | 否       | `true`                           |
| `delay`            | `string`            | 指定延迟故障的时间                                                                                  | `0`                | 否       | `10s`                            |
| `replace.header`   | `map[string]string` | 指定请求头或响应头替换故障中用于替换的键值对                                                        |                    | 否       | `Content-Type: application/xml`  |
| `replace.body`     | `[]byte`            | 指定请求体或响应体替换故障的内容（base64 编码）                                                     |                    | 否       | `eyJmb28iOiAiYmFyIn0K`           |
| `patch.header`     | `[][]string`        | 指定请求头或响应头附加故障中附加的键值对                                                            |                    | 否       | `- [Set-Cookie, one cookie]`     |
| `patch.body.type`  | `string`            | 指定请求体或响应体附加故障的类型，目前只支持 [`JSON`](https://tools.ietf.org/html/rfc7396)          |                    | 否       | `JSON`                           |
| `patch.body.value` | `string`            | 指定请求体或响应体附加故障的故障内容                                                                |                    | 否       | `"{"foo": "bar"}"`               |
| `duration`         | `string`            | 指定具体实验的持续时间                                                                              |                    | 是       | `30s`                            |
| `scheduler`        | `string`            | 指定具体实验的运行时间调度规则                                                                      |                    | 否       | `5 * * * *`                      |

#### Request 专用字段说明

| 参数              | 类型                | 说明                                  | 默认值 | 是否必填 | 示例           |
| ----------------- | ------------------- | ------------------------------------- | ------ | -------- | -------------- |
| `replace.path`    | `string`            | 指定 URI 路径替换内容                 |        | 否       | `/api/v2/`     |
| `replace.method`  | `string`            | 指定请求 HTTP 方法的替换内容          |        | 否       | `DELETE`       |
| `replace.queries` | `map[string]string` | 指定 URI query 的替换键值对           |        | 否       | `foo: bar`     |
| `patch.queries`   | `[][]string`        | 指定 URI query 附加故障中附加的键值对 |        | 否       | `- [foo, bar]` |

#### Response 专用字段说明

| 参数               | 类型                | 说明                     | 默认值               | 是否必填 | 示例                             |
| ------------------ | ------------------- | ------------------------ | -------------------- | -------- | -------------------------------- |
| `code`             | `int32`             | 目标响应的状态码         | 默认对所有状态码生效 | 否       | `200`                            |
| `response_headers` | `map[string]string` | 目标响应的响应头匹配     | 默认对所有响应生效   | 否       | `Content-Type: application/json` |
| `replace.code`     | `int32`             | 指定响应状态码的替换内容 |                      | 否       | `404`                            |

## 本地调试

如果你不确定某种故障的效果，也可以使用 [rs-tproxy](https://github.com/chaos-mesh/rs-tproxy) 在本地测试相应功能。Chaos Mesh 同样使用 rs-tproxy 实现 HTTPChaos。
