import fs from 'fs'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { tree2array } from '@axolo/tree-array'
import icons from './data/icons'
import tag from './utils/tag'
import archive from './utils/archive'
import category from './utils/category'

const pages = []

export default withMermaid({
  title: 'Yinux 的博客',
  description: '约定大于配置，配置大于编码。自上而下分解，自下而上构建。数据驱动算法，目标领导计划。',
  lang: 'zh-CN',
  srcDir: './src', // 博客源文件目录
  // outDir: './dist', // 方便部署各种Pages
  cacheDir: './cache',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['link', { rel: 'stylesheet', href: '/styles/app.css' }],
    // ['script', { src: '/scripts/baidu-hm.js' }]
  ],
  themeConfig: {
    lastUpdatedText: '最近更新',
    logo: 'logo.png',
    search: {
      provider: 'local'
    },
    nav: [
      { text: '标签', link: '/tag' },
      { text: '归档', link: '/archive' },
      { text: '分类', link: '/category' }
    ],
    socialLinks: [{
      link: 'https://gitee.com/Yinux',
      icon: { svg: icons.gitee }
    }, {
      link: 'https://github.com/Yinux',
      icon: 'github'
    }],
    footer: {
      message: '© 2024 Yinux',
      copyright: ''
    }
  },
  async transformPageData(pageData) {
    if(!process.argv.includes('--save')) return // --save = 更新数据
    if(pageData.frontmatter.unsave) return // 过滤不保存的
    const links = tree2array(pageData.headers).map(header => header.link)
    const data = { ...pageData, ...pageData.frontmatter, links }
    delete data.frontmatter
    delete data.headers
    pages.push(data)
  },
  async buildEnd(siteConfig) {
    if(!process.argv.includes('--save')) return // --save = 更新数据
    // FIXME: 屏蔽被重复push文章
    const unique = [...new Set(pages.map(p => p.relativePath))]
    const uniquePages = unique.map(u => pages.find(p => p.relativePath === u))
    const data = uniquePages.sort((a, b) => {
      // 第一排序：置顶顺序，第二排序：时间倒序
      const sortA = (a.top || 0) + (a.time?.toISOString() || '0000-00-00T00:00:00.000Z')
      const sortB = (b.top || 0) + (b.time?.toISOString() || '0000-00-00T00:00:00.000Z')
      return sortB.localeCompare(sortA)
    })
    const tagMarkdown = tag(data)
    const archiveMarkdown = archive(data)
    const categoryMarkdown = category(data)
    fs.writeFileSync('./.vitepress/data/docs.json', JSON.stringify(data), { encoding: 'UTF-8' })
    fs.writeFileSync('./src/tag.md', tagMarkdown, { encoding: 'UTF-8' })
    fs.writeFileSync('./src/archive.md', archiveMarkdown, { encoding: 'UTF-8' })
    fs.writeFileSync('./src/category.md', categoryMarkdown, { encoding: 'UTF-8' })
  }
})
