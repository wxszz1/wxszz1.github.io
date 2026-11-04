const fs = require('fs');
fs.mkdirSync('public', {recursive:true});
if (!fs.existsSync('public/index.html')) {
  fs.writeFileSync('public/index.html', '<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>wxszz1 的技术博客</title><main style="max-width:760px;margin:15vh auto;padding:24px;font-family:system-ui"><h1>wxszz1 的技术博客</h1><p>暂无文章，内容整理中。</p><p><a href="/projects/">项目作品</a> · <a href="/about/">关于我</a></p></main></html>');
}
