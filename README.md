hexo-theme-miho
================

MiHo is a single and responsive design theme for [Hexo](https://hexo.io).
MiHo requires Hexo 3.0 and above, Compatible with mobile browsing; Theme DEMO:[MinHow's Blog](http://blog.minhow.com/).
中文文档请[查看](https://hexo.io).

## Installation

### Installation Theme
``` bash
$ git clone https://github.com/WongMinHo/hexo-theme-miho.git themes/miho
```

### Update
``` bash
cd themes/miho
git pull
```

### Dependency installation
#### Json-content
Generate site articles static data for in-site search; detailed configuration please check[hexo-generator-json-content](https://github.com/alexbruno/hexo-generator-json-content).
``` bash
npm install hexo-generator-json-content --save
```

### Theme Config
Change theme field in Hexo root's _config.yml file.
``` bash
theme: miho
```

## Configuration
Modify settings in `themes/miho/_config.yml`，Please use it as needed.

```
# Favicon of your site | 网站icon
favicon: /favicon.ico

# Header

# Keywords of your site | 网站关键字
keywords: MinHow,blog
# Head headline | 头部标题
header_title: MinHow-个人博客
# Head description | 头部描述
header_description: 一个专注 WEB 开发的技术博客
# Link to your logo | logo地址
logo: images/logo.png
# Link to your banner_img | 首页banner图地址
banner_img: images/banner.jpg

# Content

# Excerpt length | 摘录长度
excerpt_length: 200
# Excerpt link | 摘录链接
excerpt_link: more>>
# New window open link | 新窗口打开文章
open_new_link: false
# Article default cover picture | 文章默认封面图
cover_picture: images/banner.jpg
# Open background particles | 开启背景粒子
open_bg_particle: true

# Style customization | 样式定制
style:
  # Main color tone | 主色调
  main_color: '#0cc'
# 网易云跟帖
wangyiyun: false

# Analytics | 分析
# 站长分析，输入站点id
cnzz_analytics: false
# 百度分析，输入key值
baidu_analytics: false
# google analytics| google分析
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

### Article configuration example
``` bash
---
title: Hello World
date: 2017-06-18
categories: First
tags:
    - First
    - Second
---
MinHow-This is a summary
<!-- more -->
cover_picture: /images/banner.jpg
---
```


