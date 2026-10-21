# 说明文档

给在本仓库里改代码的 agent 用。从根目录 [AGENTS.md](../AGENTS.md) 进入，按层往下读。

```
AGENTS.md                 入口与约束
docs/
├── site/README.md        站点层：Hexo、目录、命令
├── content/README.md     内容层：文章与独立页
├── theme/README.md       主题层：布局、双语、主题色、样式
├── assets/README.md      资源层：字体、图片、音乐
└── release/README.md     发布层：压缩与 GitHub Pages
```

一条改动通常只跨相邻两层。例如改顶栏文案要同时看内容层的菜单键和主题层的 `header.ejs`；换字体要同时看资源层和主题层的 `@font-face`。
