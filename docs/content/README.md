# 内容层

文章和独立页都在 `source/`。主题只渲染 front matter 和正文，不改历史文章的措辞。

## 新文章

```bash
hexo new "标题"
```

模板在 `scaffolds/post.md`：

```yaml
---
title:
date:
cover_image:
tags:
---
```

| 字段 | 约定 |
|---|---|
| `title` | 列表和正文标题。中文标题会进永久链接 |
| `date` | 排序和落款。主题把日期写成「二〇二一 · 六月 · 初四」或 `June 4, 2021` |
| `cover_image` | 相对站点根的路径，如 `images/breath_on_top.png`。文件放在 `source/images/`。缺省时用主题配置 `default_cover_image`（`images/unsplash.jpg`） |
| `tags` | `life` 显示印章「生」，`work` 显示印章「事」。其他标签不显示印章 |

正文是普通 Markdown。图片懒加载已在根配置打开（`hexo-lazyload-image`）。

## 独立页

| 路径 | 菜单 | 说明 |
|---|---|---|
| `source/about/index.md` | About | 自我介绍，文末「每日一卦」读取 `eightDiagrams.js` 的全局变量 `diagramWords`、`analysisLink` |
| `source/nickname/index.md` | Nickname | 爱称墙。名单写在页面内的 `NICKNAMES`，音频是 `source/music/cannon.mp3` |

独立页走 `layout/page.ejs`。有 `cover_image` 才渲染顶图。页面里的中英文同样用 `<span class="zh">` 和 `<span class="en">`，规则见 [主题层](../theme/README.md)。

## 不要做的事

- 不要为了双语再复制一份英文文章。界面文案在模板里切换，文章正文保持中文。
- 不要把封面放到 `public/images/`。生成时会被清掉。
- 不要改已发布文章的 `date` 或文件名，否则永久链接会变。
