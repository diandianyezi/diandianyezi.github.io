import { sidebar } from 'vuepress-theme-hope';

export const zh = sidebar({
  '/guide/': [
    // 'home',
    // { text: '幻灯片', icon: 'slide', prefix: '/slide/', children: 'structure' },
    // 'slide',
    {
      text: '如何使用',
      icon: 'creative',
      prefix: '',
      // link: '/',
      children: 'structure',
    }
  ],
});
