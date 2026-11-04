const fs = require('fs/promises');
const path = require('path');
const sharp = require('sharp');
(async () => {
  const dir='public/images/csdn';
  await fs.mkdir('public/images/previews',{recursive:true});
  let before=0,after=0;
  for(const name of await fs.readdir(dir)) {
    if(!/\.(png|jpg|jpeg)$/i.test(name)) continue;
    const original=await fs.readFile(path.join(dir,name));
    const preview=await sharp(original).resize({width:1000,withoutEnlargement:true}).webp({quality:78,effort:5}).toBuffer();
    await fs.writeFile(path.join('public/images/previews',name+'.webp'),preview);
    before+=original.length;after+=preview.length;
  }
  async function walk(dir){for(const item of await fs.readdir(dir,{withFileTypes:true})){const p=path.join(dir,item.name);if(item.isDirectory())await walk(p);else if(p.endsWith('.html')){let html=await fs.readFile(p,'utf8');html=html.replace(/<img\b[^>]*>/g,tag=>tag.replace(/src="(\/images\/csdn\/([^"/]+))"/, (m,url,name)=>'data-original="'+url+'" src="/images/previews/'+name+'.webp"'));await fs.writeFile(p,html);}}}
  await walk('public');
  console.log('Article image bytes:',before,'->',after);
})().catch(e=>{console.error(e);process.exit(1)});
