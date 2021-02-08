module.exports = {
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
    ['meta', { name: 'theme-color', content: '#33C0FF' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    logo: '/assets/img/logo.png',
    editLinks: true,
    search: false,
    smoothScroll: true,
    lastUpdated: true,
    
    editLinks: true,
    repo: 'FlyReader/FlyReader.github.io',
    docsDir: 'docs',
    docsBranch: 'master',
 
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
          { text: "服务协议", link: "/zh-hans/servicesagreement.md"},
          { text: "隐私声明", link: "/zh-hans/privacystatement.md"},
        ]
      }     
    }
  },
  plugins: [
    ['@vuepress/back-to-top',true],
    ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
    }],
    ['@vuepress/medium-zoom', true],
  ],
  
}

