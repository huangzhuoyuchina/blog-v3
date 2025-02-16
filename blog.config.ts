import type { BundledLanguage, BundledTheme } from 'shiki'
import type { FeedEntry } from '~/types/feed'
import { zhCN } from 'date-fns/locale'

// 存储 nuxt.config 和 app.config 共用的配置
const blogConfig = {
    title: '同山月',
    subtitle: '与山同行，与月同辉',
    description: '纸鹿本鹿的个人博客，分享技术与生活。“折腾不止，摸鱼生活——摸门🙏🏻”。纸鹿是一名开源爱好者，结识了许多志同道合的朋友。这个博客记录了他在生活和技术学习中的点滴经历，充满启发与思考。网站界面简洁美观，内容丰富实用，人气互动活跃，涵盖了编程、生活、学习等多个领域，为读者提供了卓越的阅读体验。',
    author: {
        name: '纸鹿本鹿',
        avatar: 'https://www.zhilu.cyou/api/avatar.png',
        email: 'tsynws@outlook.com',
        homepage: 'https://www.tsy.re/',
    },
    copyright: {
        abbr: 'CC BY-NC-SA 4.0',
        name: '署名-非商业性使用-相同方式共享 4.0 国际',
        url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans',
    },
    favicon: 'https://www.zhilu.cyou/api/icon.png',
    language: 'zh-CN',
    qqGroup: '169994096',
    timeEstablished: '2024-01-01',
    timezone: 'Asia/Shanghai',
    url: 'https://www.tsy.re/',

    feed: {
        limit: 50,
    },

    hideContentPrefixes: ['/posts'],

    imageDomains: [
        // 自动启用本域名的 Nuxt Image
        // 'www.tsy.re',
        // '7.isyangs.cn',
    ],

    robotsNotIndex: ['/preview', '/previews/*'],

    scripts: [
        // 自己部署的 umami 统计服务
        { 'src': 'https://zhi.zhilu.cyou/zhi.js', 'data-website-id': 'a1997c81-a42b-46f6-8d1d-8fbd67a8ef41', 'defer': true },
        // Cloudflare Insights 统计服务
        { 'src': 'https://static.cloudflareinsights.com/beacon.min.js', 'data-cf-beacon': '{"token": "97a4fe32ed8240ac8284e9bffaf03962"}', 'defer': true },
    ],

    // 用于 Shiki、Plain Shiki 引入代码高亮
    // 同时用于显示代码块语言对应的 Iconify Catppuccin 图标
    shiki: {
        bundledLangs: <BundledLanguage[]>['bat', 'log', 'sh', 'powershell'],
        langs: <BundledLanguage[]>['bat', 'c', 'cpp', 'css', 'diff', 'html', 'ini', 'java', 'js', 'json', 'log', 'makefile', 'matlab', 'md', 'mdc', 'powershell', 'python', 'sh', 'sql', 'ssh-config', 'toml', 'ts', 'tsx', 'vb', 'vue', 'xml', 'yaml'],
        themes: <BundledTheme[]>['catppuccin-latte', 'one-dark-pro'],
        defaultTheme: <BundledTheme>'catppuccin-latte',
        darkTheme: <BundledTheme>'one-dark-pro',
    },

    twikoo: {
        js: 'https://gcore.jsdelivr.net/npm/twikoo@1.6.40/dist/twikoo.all.min.js',
        envId: 'https://twikoo.zhilu.cyou/',
        preload: 'https://twikoo.zhilu.cyou/',
    },
}

export const dateLocale = zhCN

// 用于生成 OPML 和友链页面配置
export const myFeed = <FeedEntry>{
    author: blogConfig.author.name,
    sitenick: '同行处',
    title: blogConfig.title,
    desc: blogConfig.subtitle || blogConfig.description,
    link: blogConfig.url,
    feed: new URL('/atom.xml', blogConfig.url).toString(),
    icon: blogConfig.favicon,
    avatar: blogConfig.author.avatar,
    archs: ['Nuxt', 'Vercel'],
    date: blogConfig.timeEstablished,
    comment: '这是我自己',
}

export default blogConfig
