import { defineUserConfig } from '@vuepress/cli';
// const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')
import theme from './theme';

const base = (process.env.BASE as '/' | `/${string}/`) || '/';

export default defineUserConfig({
  base,

  dest: './dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.icon' }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Yezi’s Blog',
      description: '学习技术',
    },
    // '/zh/': {
    //   lang: 'zh-CN',
    //   title: '主题演示',
    //   description: 'vuepress-theme-hope 的演示',
    // },
  },
  theme,

  shouldPrefetch: false,
  plugins: [
    // googleAnalyticsPlugin({
    //   id: 'G-BTL86KX7LE'
    // })
  ]
});
