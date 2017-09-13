---
title: MiHo-主题安装和配置详情
date: 2017-08-01
categories: 开源项目
author: MinHow
tags:
    - 博客
    - 开源项目
cover_picture: http://oerolc7og.bkt.clouddn.com/images/miho/theme/github-second.jpg
top: 1
---
![miho](http://oerolc7og.bkt.clouddn.com/images/miho/theme/github.jpg)

### 一. 主题简介
&emsp;&emsp;MiHo 是一款单栏响应式的[Hexo](https://hexo.io)主题；基于 Hexo 3.0+ 制作，兼容移动端浏览；主题的代码托管在[GitHub](https://github.com/WongMinHo/hexo-theme-miho)上，
欢迎Star和Fork；如遇到问题或发表建议，可以提[Issues](https://github.com/WongMinHo/hexo-theme-miho/issues)，也可以在博客中留言给我，另外,喜欢的话不妨给个 Star。
### 二. 安装
#### 2.1 安装主题
``` bash
$ git clone https://github.com/WongMinHo/hexo-theme-miho.git themes/miho
```
MiHo 主题需要Hexo 3.0或以上版本，请先升级。
#### 2.2 更新
``` bash
cd themes/miho
git pull
```
#### 2.3 依赖安装
如下依赖如果已经安装，请看配置介绍。
##### Json-content
生成站点文章静态数据，用于站内搜索。
``` bash
npm install hexo-generator-json-content --save
```
### 三. 站点配置
站点配置文件`_config.yml`在hexo根目录下。
#### 3.1 启用主题
``` bash
`theme: miho`
```
#### 3.2 网站基本配置
以下配置是站点的全局配置，更多配置，请[查看](https://hexo.io/zh-cn/docs/configuration.html)
``` bash
title: MinHow's Blog
subtitle: 网站副标题
description: 专注 WEB 开发的技术博客
author: MinHow
language: 网站使用的语言
timezone: 网站时区
```
#### 3.3 jsonContent配置
详细的配置请查看[hexo-generator-json-content](https://github.com/alexbruno/hexo-generator-json-content)
``` bash
jsonContent:
  meta: false
  pages: false
  posts:
    title: true
    date: true
    path: true
    text: false
    raw: false
    content: false
    slug: false
    updated: false
    comments: false
    link: false
    permalink: false
    excerpt: false
    categories: false
    tags: false
```
###  四. 主题配置
编辑主题配置文件，`themes/miho/_config.yml`。
#### 4.1 属性
下面将介绍几个比较重要的配置。
``` bash
# hexo-theme-miho
# https://github.com/wongminho/hexo-theme-miho

# Favicon of your site | 网站icon
favicon: /favicon.ico

# Header

# Keywords of your site | 网站关键字
keywords: MinHow,MinHow's Blog
# Head headline | 头部标题
header_title: MinHow's Blog
# Head description | 头部描述
header_description: 一个专注 WEB 开发的技术博客
# Link to your logo | logo地址
logo: images/logo.png
# Link to your banner_img | 首页banner图地址
banner_img: images/banner.jpg
# Menu setting | 菜单设置
#  name:                  Font Awesome icon | Font Awesome 图标
#    title: Home          Title | 标题
#    url: //minhow.com    Url, absolute or relative path | 链接，绝对或相对路径
#    target: true         Whether to jump out | 是否跳出
menu:
  home:
    title: Home
    url: /
    target: false
  archive:
    title: Archives
    url: /archives
    target: false
  user:
    title: About
    url: /about
    target: false
# Social setting, use to display social information | 社交设置，用来展示社交信息
#  name:                  Font Awesome icon | Font Awesome 图标
#    title: Home          Icon title | 图标标题
#    url: //minhow.com    Url, absolute or relative path | 链接，绝对或相对路径
#    target: true         Whether to jump out | 是否跳出
social:
  home:
    title: MinHow
    url: //minhow.com
    target: true
  github:
    title: Github
    url: //github.com/wongminho
    target: true
  weibo:
    title: Weibo
    url: //weibo.com/WongMinHo
    target: true
  twitter:
    title: Twitter
    url: //twitter.com/huangminhow
    target: true
  #qq:
  #weixin:
  #snapchat:
  #telegram:
  #mail:
  #facebook:
  #google:
  #linkedin:

# Content

# Excerpt length | 摘录长度
excerpt_length: 190
# Excerpt link | 摘录链接
excerpt_link: more>>
# New window open link | 新窗口打开文章
open_new_link: false
# Article default cover picture，size：350*150 | 文章默认封面图，尺寸：350*150
cover_picture: images/banner.jpg
# Open background particles | 开启背景粒子
open_bg_particle: true
# Open animation in homepage and head | 开启主页及头部动画
open_animation: true

# Article

# Open toc | 是否开启toc
toc: true
# Open share | 是否开启分享
share: true

# Style customization | 样式定制
style:
  # Main color tone | 主色调
  main_color: '#0cc'

# Comments | 评论

# 畅言，输入appid和appkey
changyan_appid: false
changyan_appkey: false
# 友言，输入id
youyan_id: false
# disqus
disqus: false

# Analytics | 分析
# 站长分析，输入站点id
cnzz_analytics: false
# 百度分析，输入key值
baidu_analytics: false
# google analytics | google分析
google_analytics: false

# Footer

# Access statistics | “不蒜子”访问量统计
access_counter:
  on: true
  site_uv: 总访客数：
  site_pv: 总访问量：

# Copyright Information | 版权信息
copyright: 2017 MinHow
```
####  4.2 文章封面图
文章默认封面图，尺寸：350*150，当文章基本配置没有`cover_picture`时才显示。
``` bash
cover_picture: images/banner.jpg
```
####  4.3 开启背景粒子
是否开启背景粒子。
``` bash
open_bg_particle: true
```
####  4.4 开启主页及头部动画
是否开启主页及头部动画。
```
open_animation: true
```

####  4.5 评论
支持畅言、disqus。
``` bash
# 畅言，输入appid和appkey
changyan_appid: false
changyan_appkey: false
# 友言，输入id
youyan_id: false
# disqus
disqus: false
```
####  4.6 数据统计
支持站长、百度、google三种数据统计，正确填写配置信息即可。
``` bash
# 站长分析，输入站点id
cnzz_analytics: false
# 百度分析，输入key值
baidu_analytics: false
# google分析
google_analytics: false
```

####  4.7 文章基本配置
``` bash
---
title: Hello World
date: 2017-06-18
categories: First
author: MinHow
tags:
    - First
    - Second
cover_picture: /images/banner.jpg
---
 MinHow-This is a summary
<!-- more -->
```

说明：
*   需要注意`tags`和摘要的写法，不然首页不能正确显示标签和摘要；
*  `cover_picture`文章封面图，不填默认显示`_config.yml`配置的图片。
