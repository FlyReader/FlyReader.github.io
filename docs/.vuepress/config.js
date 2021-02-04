module.exports = {
    lang: 'en-US',
    title: 'Fly Reader',
    description: 'Probably the best UWP reader',
    base: '/Docs/',
    head: [
      ['link', { rel: 'icon', href: '/logo.png' }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
      ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    plugins: ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
    }],
  }
