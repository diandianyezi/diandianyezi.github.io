import { defineUserConfig } from '@vuepress/cli';
import theme from './theme';

const base = (process.env.BASE as '/' | `/${string}/`) || '/';

export default defineUserConfig({
  base,

  dest: './dist',

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Yezi的博客',
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
});
