import{a5 as t}from"./app-BNqwguoq.js";var a={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://waline-comment.vuejs.press"};const i=async()=>{try{const{pageviewCount:e}=await t(()=>import("./app-BNqwguoq.js").then(r=>r.af),__vite__mapDeps([]));return e({serverURL:a.serverURL})}catch{console.error("@waline/client is not installed!");return}};export{i as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
