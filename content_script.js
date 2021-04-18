
const text = document.querySelectorAll('h1, h2, p, span, a');
const images = document.querySelectorAll('img[src]');
const sources = document.querySelectorAll('source');
console.log('text is: ',text);
console.log('images is: ',images);

const date = new Date();
for (let i = 0; i < text.length; i++) {
    const element = text[i];
    element.innerHTML = `Nadav Zvaig was here ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} `;
}

for (let i = 0; i < images.length; i++) {
    const img = images[i];
    console.log('image src: ',img.src)
    img.src  = img.src ?  "https://assets-global.website-files.com/5d83597c28a6017e74723191/5e451768ff66cf2a6792215c__0012_Nadav.jpg" : '';
    img.srcset  = img.srcset ?  "https://assets-global.website-files.com/5d83597c28a6017e74723191/5e451768ff66cf2a6792215c__0012_Nadav.jpg 400w, https://assets-global.website-files.com/5d83597c28a6017e74723191/5e451768ff66cf2a6792215c__0012_Nadav.jpg 1000w" : '';
}

for (let i = 0; i < sources.length; i++) {
    const src = sources[i];
    console.log('image srcset: ',src.srcset)
    src.srcset = "https://assets-global.website-files.com/5d83597c28a6017e74723191/5e451768ff66cf2a6792215c__0012_Nadav.jpg 400w, https://assets-global.website-files.com/5d83597c28a6017e74723191/5e451768ff66cf2a6792215c__0012_Nadav.jpg 1000w"
    console.log('srcset after: ',src.srcset)
    src['data-srcset'] = "https://assets-global.website-files.com/5d83597c28a6017e74723191/5e451768ff66cf2a6792215c__0012_Nadav.jpg 400w, https://assets-global.website-files.com/5d83597c28a6017e74723191/5e451768ff66cf2a6792215c__0012_Nadav.jpg 1000w"
}