import { SidebarItem, defineUserConfig } from "vuepress";

const path = require("path");
// const { defaultTheme } = require('@vuepress/theme-default')
import { localTheme } from "./theme";
const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Vuepress',
  description: 'Vuepress 记录学习',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  
  plugins: [
    googleAnalyticsPlugin({
      ga: 'G-BTL86KX7LE',
    }),
  ],

  // theme: 'melodydl',
  theme: localTheme({

    // aside personInfo
    // personalInfo: {
    //   name: 'zhangting',
    //   avatar: '/avatar-top.jpeg',
    //   headerBackgroundImg: '/avatar-bg.jpeg',
    //   description: '前端开发  铲屎官',
    //   email: 'facecode@foxmail.com',
    //   location: 'Beijing, China',
    //   // organization: '',
    // },
    // Nav link
    home: '/',
    navbar: [ 
      {text: 'HOME', link: '/' },
      {text: 'ABOUT', link: '/about/'},
      {text: 'TAGS', link: '/tags/'}      
    ],
    repo: 'https://github.com/diandianyezi/diandianyezi.github.io.git',
    repoLabel: 'github',
    // header: {
    //   home: {
    //     title: 'Top Blog', 
    //     subtitle: '好好生活，慢慢相遇', 
    //     headerImage: '/home-bg.jpeg'
    //   },
    //   tags: {
    //     title: 'Tags', 
    //     subtitle: '好好生活，慢慢相遇', 
    //     headerImage: '/tags-bg.jpg'
    //   },
    //   postHeaderImg: '/post-bg.jpeg',
    sidebar: {
      '/': [
        { 
          text: 'posts',
          children: [

          ]
        }
      ],
      '/about/': [
        {
          text: 'about',
          children: []
        }
      ]
    }
    // },
    // footer sns
    // sns: {
    //   weibo: { 
    //     account: 'weibo', 
    //     link: '', 
    //   },
    //   juejin: { 
    //     account: 'juejin',
    //     link: ''
    //   },
    //   zhihu: { 
    //     account: 'zhihu',
    //     link: ''
    //   },
    //   github: { 
    //     account: 'github',
    //     link: 'https://github.com/diandianyezi'
    //   }
    // },

    // footer github button
    // footer: {
    //   gitbtn: {
    //     repository: "https://ghbtns.com/github-btn.html?user=youdeliang&repo=vuepress-theme-melodydl&type=star&count=true",
    //     frameborder: 0,
    //     scrolling: 0,
    //     width: "80px",
    //     height: "20px"
    //   },
    //   custom: `Copyright &copy; Top Blog 2022 <br /> 
    //     Theme By <a href="https://www.vuepress.cn/" target="_blank">VuePress</a>
    //     | <a href="https://www.github.com/youdeliang/" target="_blank">youdeliang</a>`
    // },
    // pagination: {
    //   perPage: 5,
    // },

    // comments: false,
  })
})