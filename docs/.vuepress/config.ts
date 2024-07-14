import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  head: [
    [
      'script', {}, `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?5d8b8e54bdda43c4bb376891fc6f17d6";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `
    ],
    [
      'script', {}, `
        function increaseFontSize() {
          const allElements = document.querySelectorAll('p');
          
          for (let i = 0; i < allElements.length; i++) {
            const style = window.getComputedStyle(allElements[i], null).getPropertyValue('font-size');
            const fontSize = parseFloat(style); 

            if (!isNaN(fontSize)) {
              allElements[i].style.fontSize = (fontSize + 1) + 'px';
            }
          }
        }

        // 调用该函数以调整字体大小
        increaseFontSize();
      `
    ],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=LXGW+WenKai+Mono+TC:wght@300;400;700&display=swap",
        rel: "stylesheet",
      },
    ],
  ],

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ],

  base: "/blog/",

  lang: "zh-CN",
  title: "罗潇阳的博客",
  description: "知识自留地",

  theme,

  // Enable it with pwa
  shouldPrefetch: false,
});
