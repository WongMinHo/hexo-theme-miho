hexo-theme-miho
================

miho 一款单栏响应式的[Hexo](https://hexo.io)主题。
基于 Hexo 3.0+ 制作，兼容移动端浏览。 点击 [我的博客](http://blog.minhow.com/) 查看效果。

## 安装

### 安装主题
``` bash
$ git clone https://github.com/WongMinHo/hexo-theme-miho.git themes/miho
```

### 更新
``` bash
cd themes/miho
git pull
```

### 依赖安装
#### Json-content
生成站点文章静态数据，用于站内搜索；详细的配置请查看[hexo-generator-json-content](https://github.com/alexbruno/hexo-generator-json-content)
``` bash
npm install hexo-generator-json-content --save
```

### 配置主题

修改hexo根目录下的 `_config.yml` ： `theme: miho`

## 配置

配置文件`_config.yml`在主题的根目录下的，请根据自己需要修改使用。

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

# Article excerpt | 文章摘录
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
# google分析
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

### 文章配置举例
``` bash
---
title: Hello World
date: 2017-06-18
categories: First
tags:
    - First
    - Second
---
MinHow-这是摘要
<!-- more -->
cover_picture: /images/banner.jpg
---
```


