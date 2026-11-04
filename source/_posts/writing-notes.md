---
title: 学习笔记：如何更新这个博客
date: 2026-11-04 09:01:00
categories:
  - 学习笔记
tags:
  - Markdown
  - 写作
description: 新建文章、设置分类、本地预览和发布的常用操作。
---

## 新建文章

在博客目录执行：

~~~sh
npx hexo new post "my-first-post"
~~~

打开生成的 `source/_posts/my-first-post.md`，把 `title` 改成文章标题，填写正文，并在顶部添加分类和标签：

~~~yaml
categories:
  - 技术文章
tags:
  - Git
~~~

笔记类文章使用 `学习笔记` 分类，便会出现在对应导航中。

## 本地预览

~~~sh
npm run server
~~~

在浏览器打开 http://localhost:4000 。按 Ctrl+C 结束预览。

## 发布更新

~~~sh
npm run build
git add .
git commit -m "docs: add a new post"
git push
~~~

推送后到仓库的 Actions 页面查看构建和发布结果。
