import React from 'react'

const features = [
  {
    title: <>多种多样的故障注入</>,
    imgUrl: 'img/undraw_Operating_system_re_iqsc.svg',
    description: (
      <>
        <p>
          Chaos Mesh 提供多种多样的故障注入能力。混沌实验的核心是注入故障，Chaos Mesh 从分布式系统的出发，
          充分考虑分布式系统可能出现的故障，提供更加全面、细粒度的故障类型，
          能全方位的帮用户对网络、磁盘、文件系统、操作系统等进行故障注入。
        </p>
      </>
    ),
  },
  {
    title: <>使用简单</>,
    imgUrl: 'img/undraw_server_down_s4lk.svg',
    description: (
      <>
        <ul>
          <li>
          无特殊依赖，可以在 Kubernetes 集群上直接部署，包括 {' '}
          <a href="https://github.com/kubernetes/minikube">Minikube</a> and{' '}
          <a href="https://kind.sigs.k8s.io/docs/user/quick-start/">Kind</a>.
          </li>
          <li>无需修改应用的部署逻辑，理想的情况是可以在生产环境上进行混沌实验 </li>
          <li>易于编排实验的错误注入行为，易于查看实验的状态和结果，并能够快速地对注入的故障进行回滚</li>
          <li>隐藏底层的实现细节，用户更聚焦于编排自己需要的实验</li>
          <li>提供 Dashboard，用户可以在网页上轻松的进行混沌实验</li>
        </ul>
      </>
    ),
    reverse: true,
  },
  {
    title: <>为 Kubernetes 设计</>,
    imgUrl: 'img/logos/kubernetes.svg',
    description: (
      <>
        <p>
          Chaos Mesh 使用 {' '}
          <a
            href="https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"
            target="_blank"
          >
            CustomResourceDefinitions
          </a>{' '}
          (CRD) 来定义混沌实验.
        </p>
        <p>
          在 Kubernetes 生态中 CRD 是用来实现自定义资源的成熟方案，又有非常成熟的实现案例和工具集供我们使用，
          这样我们就可以借助于生态的力量，避免重复造轮子。并且可以更好的融合到 Kubernetes 生态中。
        </p>
      </>
    ),
  },
  {
    title: <>安全可控</>,
    imgUrl: 'img/undraw_security_o890.svg',
    description: (
      <>
        <p>
          Chaos Mesh 提供基于角色的访问控制，用户可以根据自己需求创建对应权限的角色，例如游客角色，管理角色等。
        </p>
        <p>
          此外，Chaos Mesh 支持设置 Namespace 白名单和黑名单，用户可以通过次功能保护重要的 Namespace,
          可以更大程度控制实验的“爆炸半径”，提供更加安全可控的混沌实验体验。
        </p>
      </>
    ),
    reverse: true,
  },
]

export default features
