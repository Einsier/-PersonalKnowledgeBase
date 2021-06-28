// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '后端',
    link: '/backend/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '开发语言',
        items: [
          { text: 'Java', link: '/pages/704d68/' },
        ],
      },
      {
        text: '中间件',
        items: [
          { text: 'ElasticSearch', link: '/pages/03f97d/' },
        ],
      },
    ],
  },
  {
    text: '算法',
    link: '/algorithm/',
    items: [
      {
        text: '算法思想',
        items: [
          { text: '数据结构', link: '/pages/e43ec8/' },
          { text: '经典算法', link: '/pages/34f617/' },
        ],
      },
      {
        text: '算法实战',
        items: [
          { text: '代码碎片', link: '/pages/2ac963/' },
          { text: 'LeetCode', link: '/pages/489e06/' },
        ],
      },
    ],
  },
  {
    text: '杂记',
    link: '/tech-note/',
    items: [
      { text: '使用手册', link: '/pages/49b5fe/' },
      { text: '操作记录', link: '/pages/7d5ed0/' },
      { text: '折腾笔记', link: '/pages/7177a0/' },
    ],
  },
  // {
  //   text: '更多',
  //   link: '/more/',
  //   items: [
  //     { text: '', link: '/pages/3c7547/' },
  //   ],
  // },
  {
    text: '收藏',
    items: [
      { text: '实用网站', link: '/pages/05805b/' },
      { text: '技术资源', link: '/pages/1f9c4c/' },
      { text: '书影清单', link: '/pages/a6775b/' },
      { text: '好文记录', link: '/pages/8db7c4/' },
    ],
  },
]
