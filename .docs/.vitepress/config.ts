import UnoCss from 'unocss/vite'
import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '@oiij/chrome-tabs',
  description: 'A Google-Chrome Style Tab Bar.',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/install' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Install', link: '/install' },
          { text: 'Usage', link: '/usage' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/oiij/chrome-tabs' },
    ],
  },
  vite: {
    plugins: [
      // eslint-disable-next-line ts/ban-ts-comment
      // @ts-expect-error
      UnoCss(),
    ],
  },
})
