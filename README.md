# wxszz1 的技术博客

正式网站：https://blog.wxszz.top/

备用网站：https://wxszz1.github.io/

推送 main 后，GitHub Actions 构建并发布 GitHub Pages，同时更新 server-site 静态分支。服务器每分钟检查该分支，仅更新 /opt/wxszz1-blog/public，保留上次文件备份，不重启服务。构建失败时不会发布新版本。请勿直接编辑 server-site 分支。

Hexo + Butterfly，使用 GitHub Actions 自动部署到 GitHub Pages。

## 本地运行

需要 Node.js 22 和 Git。在本项目目录执行：

~~~sh
npm ci
npm run server
~~~

浏览器访问 http://localhost:4000 。

## 写文章与发布

1. 执行 `npx hexo new post "english-slug"`。
2. 编辑 `source/_posts/english-slug.md`，填写中文标题和正文。
3. 在文章顶部的 `categories` 中填 `技术文章` 或 `学习笔记`。
4. 执行 `npm run build` 检查构建。
5. 执行 `git add .`、`git commit -m "docs: update blog"`、`git push`。
6. 在仓库 Actions 中确认部署成功后访问网站。

## 修改栏目与外观

- 项目作品：`source/projects/index.md`
- 关于我：`source/about/index.md`
- 网站标题、作者、网址：`_config.yml`
- 导航、头像、主题样式：`_config.butterfly.yml`
- 自定义样式：`source/css/custom.css`

`public/` 和 `node_modules/` 不提交到 Git；依赖版本保存在 `package-lock.json`。
仓库公开，提交前请确认文章和图片可以公开，不要提交密码、令牌或个人敏感信息。

## 首次部署设置

仓库 Settings → Pages → Source 选择 GitHub Actions。推送 main 分支触发发布。
