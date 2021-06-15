---
title: 模拟 HTTP 故障
sidebar_label: 模拟 HTTP 故障
---

## HTTPChaos简介
HTTPChaos 能够帮助你模拟 HTTP 服务端故障。目前支持的注入阶段包括请求过程和响应过程，且均支持以下类型的故障：

1. abort：服务端中断连接
2. delay：为目标过程加入延迟
3. replace：替换请求报文或者响应报文的部分内容
4. patch：给请求报文或响应报文添加额外内容

HTTPChaos 支持多种类型故障的组合，且固定的故障注入优先级（顺序）为 `abort -> delay -> replace -> patch`. 
其中 abort 故障是短路的，它会直接中断此次连接。

详细的功能介绍参见[*yaml 配置文件*](#yaml配置文件)。

## 注意事项
1. 请确保目标Pod上没有运行 Chaos Mesh 的 Control Manager。
2. 为使 HTTPChaos 注入生效，请尽量避免客户端的 TCP socket 复用，因为在注入之前建立的 TCP socket 上进行 HTTP 请求不受 HTTPChaos 影响。
3. 非幂等语义请求（如大多数 POST 请求）注入故障后恢复，可能无法通过重复请求使得目标服务恢复正常状态，生产环境慎重使用。

## 创建实验

### yaml 配置文件

#### abort 故障配置文件示例

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

#### 其它故障组合配置文件示例

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
      - ["Token", "<one token>"]
      - ["Token", "<another token>"]
    body:
      type: JSON
      value: "{\"foo\": \"bar\"}"
  duration: 5m
  scheduler:
    cron: '@every 10m'
```

#### 字段说明

##### 通用字段

通用字段指注入目标为 Request 和 Response 时均有意义的字段。

|参数|类型|说明|默认值|是否必填|示例|
|---|---|---|---|---|---|
|mode|string|表示运行实验时候的运行方式，支持one、all、fixed、fixed-percent、random-random-max-percent||是|one|
|value|string|取决与 mode 的取值，为 mode 提供参数||否|2|
|target|string|故障注入的目标过程，Request 或 Response||是|Request|
|port|int32|目标服务监听的 TCP 端口||是|80|
|method|string|目标请求的 HTTP method|默认对所有方法生效|否|GET|
|path|string|目标请求的 URI path，支持[通配](https://www.wikiwand.com/en/Matching_wildcards)|默认对所有路径生效|否|/api/*|
|request_headers|map\[string\]string|目标请求的请求头匹配|默认对所有请求生效|否|Content-Type: application/json|
|abort|bool|是否注入连接中断故障|false|否|true|
|delay|string|指定延迟故障的时间|0|否|10s|
|replace.header|map\[string\]string|指定请求头/响应头替换故障的替换键值对||否|Content-Type: application/xml|
|replace.body|[]byte|指定请求体/响应体替换故障的内容（base64 编码）||否|eyJmb28iOiAiYmFyIn0K|
|patch.header|\[\]\[\]string|指定请求头/响应头附加故障的附加键值对||否|\- \[Set-Cookie, one cookie\]|
|patch.body.type|string|指定请求体/响应体附件故障的类型，目前只支持 [JSON](https://tools.ietf.org/html/rfc7396)||否|JSON|
|patch.body.value|string|指定请求体/响应体附件故障的内容||否|"{\"foo\": \"bar\"}"|
|duration|string|指定具体实验的持续时间||是|30s|
|scheduler|string|指定具体实验的运行时间调度规则||否|5 * * * *|

##### Request 专用字段

|参数|类型|说明|默认值|是否必填|示例|
|---|---|---|---|---|---|
|replace.path|string|指定 URI path 替换内容||否|/api/v2/|
|replace.method|string|指定请求 HTTP 方法的替换内容||否|DELETE|
|replace.queries|map\[string\]string|指定 URI query 的替换键值对||否|foo: bar|
|patch.queries|\[\]\[\]string|指定 URI query 附加故障的附加键值对||否|\- \[foo, bar\]|

##### Response 专用字段

|参数|类型|说明|默认值|是否必填|示例|
|---|---|---|---|---|---|
|code|int32|目标响应的状态码|默认对所有状态码生效|否|200|
|response_headers|map\[string\]string|目标响应的响应头匹配|默认对所有响应生效|否|Content-Type: application/json|
|replace.code|int32|指定响应状态码的替换内容||否|404|

## 本地调试
如果你不确定某种故障的效果，也可以使用 [rs-tproxy](https://github.com/chaos-mesh/rs-tproxy) 在本地测试相应功能。chaos mesh 同样使用 rs-tproxy 实现 HTTPChaos。
