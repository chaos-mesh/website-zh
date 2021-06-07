---
title: 模拟 AWS 故障
sidebar_label: 模拟 AWS 故障
---

## AwsChaos 介绍
AwsChaos 能够帮助你模拟指定的 AWS 实例发生故障的情景。目前，AwsChaos 支持以下类型的故障：

-  **Ec2 Stop**: 使指定的 EC2 实例进入停止状态。
-  **Ec2 Restart**: 重启指定的 EC2 实例。
-  **Detach Volume**:  从指定的 EC2 实例中卸载存储卷。

## Secret 文件

为了方便的连接 AWS 集群，你可以提前创建一个 kubernetes Secret 文件存储认证相关信息。

以下是一个`secret`文件示例：

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: cloud-key-secret
  namespace: chaos-testing
type: Opaque
stringData:
  aws_access_key_id: your-aws-access-key-id
  aws_secret_access_key: your-aws-secret-access-key
```

- **name** 表示 Kubernetes Secret 对象的名字.
- **namespace** 表示 kubernetes secret 对象的命名空间.
- **aws_access_key_id** 存储 AWS 集群的 访问密钥 ID .
- **aws_secret_access_key** 存储 AWS 集群的秘密访问密钥.


## 使用 dashboard 方式创建实验

:::note 注意

## 使用前提
1. 请确保已经安装了 dashboard 。
2. 可以通过**kubectl port-forward**方式访问 dashboard ：
   ```bash
    kubectl port-forward -n chaos-testing svc/chaos-dashboard 2333:2333
   ```
   接着你可以在浏览器通过[`http://localhost:2333`](http://localhost:2333)访问 dashboard 。

:::

1. 单击实验页面中的**新的实验**按钮进行创建实验。

![img](./img/create-pod-chaos-on-dashborad-1.jpg)

2. 在**选择目标**处选择 **Aws 故障**，并选择具体行为，例如 **Ec2 Stop**。

3. 填写实验信息，指定实验范围以及实验计划运行时间。

4. 提交实验。

## 使用 yaml 方式创建实验
### ec2-stop 配置文件示例

```yaml
apiVersion: chaos-mesh.org/v1alpha1
kind: AwsChaos
metadata:
  name: ec2-stop-example
  namespace: chaos-testing
spec:
  action: ec2-stop
  secretName: 'cloud-key-secret'
  awsRegion: 'us-east-2'
  ec2Instance: 'your-ec2-instance-id'
  duration: '5m'
```

依据此配置示例，Chaos Mesh 将向指定的 EC2 实例中注入 ec2-stop 故障，使该 EC2 实例将在 5 分钟 时间内处于不可用的状态。

查看更多关于停止 EC2 实例的消息, 可以参考 [停止和启动您的实例](https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/Stop_Start.html)。

### ec2-restart 配置文件示例

```yaml
apiVersion: chaos-mesh.org/v1alpha1
kind: AwsChaos
metadata:
  name: ec2-restart-example
  namespace: chaos-testing
spec:
  action: ec2-restart
  secretName: 'cloud-key-secret'
  awsRegion: 'us-east-2'
  ec2Instance: 'your-ec2-instance-id'
```

依据此配置示例，Chaos Mesh 将向指定的 EC2 实例中注入 ec2-restart 故障，使该 EC2 实例将重启一次。

查看更多关于重启 EC2 实例的消息, 可以参考 [重启实例](https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/ec2-instance-reboot.html)。

### detach-volume 配置文件示例

```yaml
apiVersion: chaos-mesh.org/v1alpha1
kind: AwsChaos
metadata:
  name: ec2-detach-volume-example
  namespace: chaos-testing
spec:
  action: ec2-stop
  secretName: 'cloud-key-secret'
  awsRegion: 'us-east-2'
  ec2Instance: 'your-ec2-instance-id'
  volumeID: 'your-volume-id'
  deviceName: '/dev/sdf'
  duration: '5m'
```

依据此配置示例，Chaos Mesh 将向指定的 EC2 实例中注入 detach-volume 故障，使该 EC2 实例在 5 分钟 内与指定存储卷分离。

查看更多关于分离 Amazon EBS 卷的消息, 可以参考 [分离 Amazon EBS 卷](https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/ebs-detaching-volume.html)。


### 字段说明

|参数|类型|说明|默认值|是否必填|示例|
|---|---|---|---|---|---|
|action|string|表示具体的故障类型，仅支持ec2-stop、ec2-restart、detach-volume|ec2-stop|是|ec2-stop|
|mode|string|表示运行实验时候的运行方式，支持one、all、fixed、fixed-percent、random-max-percent|无|是|one|
|value|string|取决与mode的取值，为mode提供参数|无|否|2|
|secretName|string|指定存储AWS认证信息的Kubernetes Secret名字|无|否|cloud-key-secret|
|awsRegion|string|指定AWS区域|无|是|us-east-2|
|ec2Instance|string|指定EC2实例的ID|无|是|your-ec2-instance-id|
|volumeID|string|当action为detach-volume必填，指定EBS卷的ID|无|否|your-volume-id|
|deviceName|string|当action为detach-volume必填，指定设备名|无|否|/dev/sdf|
|duration|string|指定具体实验的持续时间|无|是|30s|

-  **mode**选项:
    
    如果为 **one** ，表示随机选择出一个符合条件的 Pod 。
    
    如果为 **all** ，表示选择出所有符合条件的 Pod 。
    
    如果为 **fixed** ，表示选择出指定数量的符合条件的 Pod。
    
    如果为 **fixed-percent** ，表示选择出占符合条件的 Pod 中指定百分比的 Pod。
    
    如果为 **random-max-percent** ，表示选择出占符合条件的 Pod 中不超过指定百分比的 Pod。
