module.exports = {
  title: 'Chaos Mesh®',
  tagline: '强大的混沌工程平台',
  url: 'https://chaos-mesh.github.io/website-zh',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'chaos-mesh', // Usually your GitHub org/user name.
  projectName: 'website-zh', // Usually your repo name.
  themeConfig: {
    image: 'img/logos/logo-mini.svg',
    algolia: {
      apiKey: '49739571d4f89670b12f39d5ad135f5a',
      indexName: 'chaos-mesh',
    },
    googleAnalytics: {
      trackingID: 'UA-90760217-2',
    },
    navbar: {
      hideOnScroll: true,
      title: 'Chaos Mesh®',
      logo: {
        alt: 'Chaos Mesh Logo',
        src: 'img/logos/logo-mini.svg',
        srcDark: 'img/logos/logo-mini-white.svg',
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'left',
        },
        {
          to: 'docs',
          activeBasePath: 'docs',
          label: '文档',
        },
        { to: 'interactiveTutorial', label: '在线教程' },
        {
          href: 'https://github.com/chaos-mesh/chaos-mesh',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: '文档',
          items: [
            {
              label: '快速开始',
              to: 'https://chaos-mesh.org/docs/get_started/get_started_on_kind',
            },
            {
              label: '使用指导',
              to: 'https://chaos-mesh.org/docs/user_guides/installation',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/chaos_mesh',
            },
            {
              label: 'Slack (#project-chaos-mesh)',
              href: 'https://join.slack.com/t/cloud-native/shared_invite/zt-fyy3b8up-qHeDNVqbz1j8HDY6g1cY4w',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/chaos-mesh/chaos-mesh',
            },
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
        {
          title: '其他',
          items: [
            {
              html:
                '<a href="https://www.netlify.com"><img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" /></a>',
            },
          ],
        },
      ],
      copyright: `
        <br />
        <strong>© Chaos Mesh® Authors ${new Date().getFullYear()} | Documentation Distributed under CC-BY-4.0 </strong>
        <br />
        <br />
        © ${new Date().getFullYear()} The Linux Foundation. All rights reserved. The Linux Foundation has registered trademarks and uses trademarks. For a list of trademarks of The Linux Foundation, please see our <a href="https://www.linuxfoundation.org/trademark-usage/"> Trademark Usage</a> page.
      `,
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
    },
  },
  onBrokenLinks: 'warn',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/chaos-mesh/website/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/chaos-mesh/website/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/styles/custom.css'),
        },
      },
    ],
  ],
}
