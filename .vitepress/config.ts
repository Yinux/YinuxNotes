import { defineConfig } from 'vitepress';

export default  defineConfig({
  title: 'Yinux Notes',
  description: 'Yinux 编程笔记',

  assetsDir:'assets',
  srcDir:'src',
  outDir:'dist',
  cacheDir:'cache',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],
  }
})