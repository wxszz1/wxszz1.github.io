---
title: 博客搭建记录：Hexo + Butterfly
date: 2026-11-04 09:00:00
categories:
  - 技术文章
tags:
  - Hexo
  - GitHub Pages
description: 记录这个博客的组成，以及从 Markdown 到公开网页的发布流程。
---

这个博客使用 Hexo 生成静态网页，Butterfly 提供页面布局与主题样式。

<!-- more -->

## 网站如何运作

1. 在本地使用 Markdown 写文章。
2. 使用 Git 保存修改，并推送到 GitHub 仓库。
3. GitHub Actions 安装依赖、构建网站。
4. GitHub Pages 托管生成的网页。

文章和配置保存在仓库中，生成的网页由自动部署流程发布。

## 栏目安排

- 技术文章：记录完整的技术方案与实践过程。
- 项目作品：展示项目及其源码。
- 学习笔记：记录可复用的知识与命令。
- 关于我：个人简介与 GitHub 入口。

## 参考资料

- [Hexo 文档](https://hexo.io/zh-cn/docs/)
- [Butterfly 文档](https://butterfly.js.org/)
