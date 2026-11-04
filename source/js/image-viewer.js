document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.createElement('dialog');
  dialog.className = 'article-image-viewer';
  dialog.innerHTML = '<button type="button" aria-label="关闭图片">关闭 ×</button><a target="_blank" rel="noopener">打开原图</a><div><img alt="文章原图"></div>';
  document.body.append(dialog);
  const full = dialog.querySelector('img');
  const close = () => { dialog.close(); document.body.style.overflow = ''; };
  dialog.querySelector('button').addEventListener('click', close);
  dialog.addEventListener('close', () => { document.body.style.overflow = ''; });
  dialog.addEventListener('click', e => { if (e.target === dialog) close(); });
  full.addEventListener('click', () => full.classList.toggle('actual-size'));
  document.querySelectorAll('#article-container img').forEach(img => {
    img.tabIndex = 0;
    img.title = '点击查看大图，再次点击可按原始尺寸查看';
    const open = e => {
      e.preventDefault();
      full.src = img.currentSrc || img.src;
      full.classList.remove('actual-size');
      dialog.querySelector('a').href = full.src;
      dialog.showModal(); document.body.style.overflow = 'hidden';
    };
    img.addEventListener('click', open);
    img.addEventListener('keydown', e => { if (e.key === 'Enter') open(e); });
  });
});
