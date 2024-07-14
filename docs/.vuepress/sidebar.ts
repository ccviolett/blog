import { sidebar } from "vuepress-theme-hope";

function clink(text, icon, prefix) : { 
  text, icon, prefix, collapsible, children
} {
  return {
    text, icon, prefix,
    collapsible: true,
    children: "structure"
  }
}

export default sidebar({
  "/": [
    "",
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "wiki/",
      link: "wiki/",
      children: "structure",
    },
    "intro",
    "slides",
    "links",
  ],
  "/posts/": "structure",
  "/subjects/": [
    clink("数学基础", "book", "FM"),
    clink("控制工程基础", "book", "CE"),
    clink("数控技术", "book", "NC"),
    clink("机械制造技术", "book", "MM"),
    clink("工程测试技术", "book", "ET"),
    clink("互换性原理", "book", "CG"),
    clink("机械设计", "book", "MD"),
  ]
});
