const path = require("path");

module.exports = {
  title: 'Ting 的博客 ｜ Ting Blog',
  description: '个人博客',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  
  evergreen: true,

  plugins: [
    ['@vuepress/google-analytics', {
      ga: 'UA-165839722-1',
    }],
  ],

  theme: 'melodydl',
  themeConfig: {
    title: 'Ting Blog',

    // aside personInfo
    personalInfo: {
      name: 'zhangting',
      avatar: '/avatar-top.jpeg',
      headerBackgroundImg: '/avatar-bg.jpeg',
      description: '前端开发  铲屎官',
      email: 'facecode@foxmail.com',
      location: 'Beijing, China',
      // organization: '',
    },
    // Nav link
    nav: [ 
      {text: 'HOME', link: '/' },
      {text: 'ABOUT', link: '/about/'},
      {text: 'TAGS', link: '/tags/'}      
    ],
    header: {
      home: {
        title: 'Top Blog', 
        subtitle: '好好生活，慢慢相遇', 
        headerImage: '/home-bg.jpeg'
      },
      tags: {
        title: 'Tags', 
        subtitle: '好好生活，慢慢相遇', 
        headerImage: '/tags-bg.jpg'
      },
      postHeaderImg: '/post-bg.jpeg',
    },
    // footer sns
    sns: {
      weibo: { 
        account: 'weibo', 
        link: '', 
      },
      juejin: { 
        account: 'juejin',
        link: ''
      },
      zhihu: { 
        account: 'zhihu',
        link: ''
      },
      github: { 
        account: 'github',
        link: 'https://github.com/diandianyezi'
      }
    },

    // footer github button
    footer: {
      gitbtn: {
        repository: "https://ghbtns.com/github-btn.html?user=youdeliang&repo=vuepress-theme-melodydl&type=star&count=true",
        frameborder: 0,
        scrolling: 0,
        width: "80px",
        height: "20px"
      },
      custom: `Copyright &copy; Top Blog 2020 <br /> 
        Theme By <a href="https://www.vuepress.cn/" target="_blank">VuePress</a>
        | <a href="https://www.github.com/youdeliang/" target="_blank">youdeliang</a>`
    },
    pagination: {
      perPage: 5,
    },

    comments: false,
  }
}