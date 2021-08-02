module.exports = {
  title: 'Chaos Mesh®',
  tagline: '强大的混沌工程平台',
  url: 'https://chaos-mesh.org',
  baseUrl: '/website-zh/',
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
        { to: 'interactive-tutorial', label: '在线教程' },
        {
          href: 'https://github.com/chaos-mesh/chaos-mesh',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://chaos-mesh.org',
          label: 'English',
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
              label: '快速试用',
              to: 'docs/quick-start',
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
              href: 'https://slack.cncf.io/',
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
          editUrl: 'https://github.com/chaos-mesh/website-zh/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/chaos-mesh/website-zh/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/styles/custom.css'),
        },
      },
    ],
  ],
}
