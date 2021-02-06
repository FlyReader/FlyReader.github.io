module.exports = {
  base: '/Docs/',
  locales: {
    '/en-US/': {
      lang: 'en-US',
      title: 'Fly Reader',
      description: 'Probably the best UWP reader'
    },
    '/zh-hans/': {
      lang: 'zh-hans',
      title: '越飞阅读',
      description: '可能是最好的UWP阅读器'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/assets/img/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#0078D7' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    repo: 'FlyReader/Docs',
    editLinks: true,
    docsDir: 'docs',
    logo: '/assets/img/logo.png',
    lastUpdated: true,
    locales: {
      '/en-US/': {
        selectText: "Languages",
        label: "English",
        editLinkText: "Edit this page on GitHub",
        serviceWorker: {
          updatePopup: { 
            message: "New content is available.", 
            buttonText: "Refresh" 
          }
        },
        lastUpdated: 'Last Updated',
        nav: [
          { text: "Home", link: '/en-US/'}
        ]
      },
      '/zh-hans/': {
        selectText: "选择语言",
        label: "简体中文",
        editLinkText: "在 GitHub 上编辑此页",
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用。",
            buttonText: "刷新"
          }
        },
        lastUpdated: '最后更新时间',
        nav: [
          { text: "首页", link: '/zh-hans/'},
          { text: "文档", link: "/zh-hans/docs/"},
        ]
      }     
    }
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
    }
  ],
}

