# 资源层

运行时资源分两处：文章用的图和音频在 `source/`，主题字体、图标、脚本在 `themes/edinburgh/source/`。Hexo 生成时把主题 `source/` 拷到站点根。

## 字体

| 路径 | 用途 |
|---|---|
| `themes/edinburgh/source/fonts/raw/slidefu.ttf` | 演示佛系体全文，只给 font-spider 当输入 |
| `themes/edinburgh/source/fonts/raw/CrimsonText.ttf` | Crimson Text 全文，只给 font-spider 当输入 |
| `themes/edinburgh/source/fonts/slidefu.ttf` | 子集，页面 `@font-face` 引用 |
| `themes/edinburgh/source/fonts/CrimsonText.ttf` | 子集，页面 `@font-face` 引用 |

`styles.css` 里的地址是 `../fonts/slidefu.ttf` 和 `../fonts/CrimsonText.ttf`（相对 CSS 文件）。生成后浏览器请求 `/fonts/slidefu.ttf`。手机没有方正姚体和华文仿宋时，会落到这两个文件。`font-display: swap`。

子集过期的表现是：正文里新出现的字在手机上变成后备衬线，而不是姚体/佛系体。补字要重跑字体脚本，并保证 CSS 仍然指向子集，而不是 `raw`。

## fontspider.sh

仓库根目录的 `fontspider.sh` 是 macOS 上的打包脚本，顺序是：

1. `hexo clean`
2. 把 `head.ejs` 里的 CSS 地址和 `styles.css` 里的字体地址临时改成 font-spider 能读到的绝对路径与 `raw` 全文
3. `hexo generate`
4. 对 `public/**/*.html` 跑 `font-spider`
5. 把 `public/fonts/raw/` 里压出来的两个 ttf 拷回 `themes/edinburgh/source/fonts/`
6. 还原 `head.ejs` 和 `styles.css`
7. `hexo clean && hexo generate && gulp && hexo deploy`

脚本里的绝对路径是 `/Users/annwayli/Private/Code/annwayart-blog`，`sed -i ''` 是 BSD sed。在当前 Windows 工作副本上不能直接执行。

脚本还假设 `head.ejs` 里有字面量 `css/bootstrap.min.css`。现在的 `head.ejs` 只用 `<%- css('css/styles.css') %>`，没有 Bootstrap。若在 macOS 上按原脚本跑，`css/styles.css` 这段替换会改坏 `css()` 调用。重做子集前要先改脚本：生成期间让 HTML 以绝对路径引用 `public/css/styles.css`，字体临时指向 `raw`，结束后两处都还原。

用户没有要求发布时，不要跑脚本最后的 `hexo deploy`。

## 图片、音频、图标

| 路径 | 用途 |
|---|---|
| `source/images/` | 文章封面。front matter 写 `images/文件名` |
| `source/music/cannon.mp3` | 爱称墙，页面里写 `/music/cannon.mp3` |
| `themes/edinburgh/source/favicon/` | 图标，`head.ejs` 请求 `/favicon/favicon.ico` |
| `themes/edinburgh/source/images/unsplash.jpg` | 封面缺省图，对应主题配置 `default_cover_image` |

封面不要提交进 `public/`。
