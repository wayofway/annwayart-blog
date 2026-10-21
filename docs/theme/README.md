# 主题层

主题目录 `themes/edinburgh/`。视觉是一册纸页：首页首篇是「开」（leaf），其余是横条目录。上游作品集布局已经不用。

## 模板

```
layout/layout.ejs          外壳：head、顶栏、#stage、两份脚本
layout/index.ejs           首页：首篇 leaf + 其余 row + 分页
layout/post.ejs            文章，转给 portfolio-full
layout/page.ejs            独立页，转给 page-full
layout/_partial/header.ejs 顶栏、语言按钮、晨宣/夜读
layout/_partial/head.ejs   首屏主题与语言，避免闪烁
layout/_partial/list.ejs   首页横条
layout/_partial/inscription.ejs  中文落款 / 英文日期
layout/_partial/seals.ejs  life → 生，work → 事
layout/_partial/portfolio-full.ejs  文章页
layout/_partial/page-full.ejs       独立页
```

`layout.ejs` 在正文后加载：

- `themes/edinburgh/source/libs/eightDiagrams.js`：按日缓存一卦，写出全局 `diagramWords`、`analysisLink`
- `themes/edinburgh/source/libs/album.js`：语言、主题切换，以及站内链接的短过渡

`bgColor.js` 还在 `source/libs/`，当前模板没有引用它。

## 双语

`html` 的 `data-lang` 为 `zh` 或 `en`，由 `head.ejs` 在绘制前写入，键名 `localStorage["album-lang"]`。默认中文。

```html
<span class="zh">首页</span><span class="en">Home</span>
```

`styles.css` 按 `data-lang` 隐藏另一侧。新增界面文案时两段都要写。文章标题、正文不包这两段。

英文状态下，竖排标题和落款改为横排（`.vtitle`、`.vdate`）。首页分页中文是「上一开 / 下一开」，英文是 `Previous` / `Next leaf`，页码后缀英文是 `leaf`。

顶栏文案表在 `header.ejs` 的 `menuCopy`，键与 `_config.yml` 的 `menu` 一致。缺键时中英文都回退成键名。

品牌字「安安戈」是 `header.ejs` 里的固定文字。

## 晨宣 / 夜读

`data-theme` 为 `paper` 或 `night`。键名 `localStorage["album-theme"]`。没有记录时跟随 `prefers-color-scheme`。

颜色只改 `styles.css` 里 `:root` 与 `html[data-theme="night"]` 的变量：`--paper`、`--sheet`、`--ink`、`--soft`、`--faint`、`--line`、`--seal`、`--sky`。

按钮文案：晨宣 / Paper，夜读 / Night。`aria-pressed="true"` 表示当前是夜读。

## 样式与移动端

唯一样式文件：`themes/edinburgh/source/css/styles.css`。Hexo 会把它复制到站点根的 `/css/styles.css`。

字体变量是 `--font-title` 和 `--font-text`。默认栈把本机姚体、仿宋放在打包字体 `slidefu`、`Crimson Text` 前面。打包字体的来源见 [资源层](../assets/README.md)。`data-font` 的 fang / song / kai 等分支留在 CSS 里，页面没有切换控件，默认走 `:root` 的姚体栈。

窄屏断点是 `720px`：

- 顶栏变成两行，导航横向滚动，不换行
- 首页首篇改成单列，竖排标题改横排
- 目录横条把日期放到标题下方

`album.js` 会拦截同源普通点击，给 `#stage` 加上 `out`，约 250ms 后再跳转。改链接行为时保留 `target="_blank"`、锚点和修饰键的直跳。`prefers-reduced-motion: reduce` 时不做这段过渡。

首页当前项：Home 在首页和文章页都标成当前；其余内链用 `is_current`。
