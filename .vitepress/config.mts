import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Yinux 笔记",
  description: "好记性不如烂笔头，这是一个记录编程中点点滴滴的地方",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  lang: "zh-CN",
  base: "/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    nav: [
      { text: "首页", link: "/" },
      { text: "Go", link: "/go" },
      { text: "C#", link: "/csharp" },
      { text: "SQL", link: "/sql" },
    ],

    sidebar: {
      "/go/": [
        {
          text: "Go",
          items: [
            { text: "Go 语言基础", link: "/go/go-base" },
            { text: "Go 语言并发编程", link: "/go/go-concurrency" },
            { text: "Go 语言高级编程", link: "/go/go-advanced" },
            { text: "Go 语言标准库", link: "/go/go-stdlib" },
          ],
        },
      ],
      "/csharp/": [
        {
          text: "C#",
          items: [
            { text: "C# 语言基础", link: "/csharp/csharp-base" },
            { text: "C# 语言并发编程", link: "/csharp/csharp-concurrency" },
            { text: "C# 语言高级编程", link: "/csharp/csharp-advanced" },
            { text: "C# 语言标准库", link: "/csharp/ " },
          ],
        },
      ],
    },
    socialLinks: [{ icon: "github", link: "https://gitee.com/Yinux" }],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present Yinux",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    search: {
      provider: "local",
    },
  },
});
