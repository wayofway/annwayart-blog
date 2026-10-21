# 站点层

Hexo 5.4 静态博客。主题名 `edinburgh`，实现已经改成册页，不再沿用上游作品集布局。

## 目录

| 路径 | 作用 |
|---|---|
| `_config.yml` | 站点标题、菜单、分页、永久链接、部署 |
| `source/_posts/` | 文章 Markdown |
| `source/about/`、`source/nickname/` | 独立页 |
| `source/images/`、`source/music/` | 文章封面、卡农音频 |
| `source/CNAME` | GitHub Pages 自定义域名 `blog.annwayart.com` |
| `themes/edinburgh/` | 当前主题 |
| `scaffolds/` | `hexo new` 用的模板 |
| `public/` | `hexo generate` 的输出，已 gitignore |
| `.deploy_git/` | `hexo deploy` 的本地 git 目录，已 gitignore |

永久链接是 `:year/:month/:day/:title/`。首页每页 10 篇，按日期倒序。时区 `Asia/Shanghai`。

## 菜单

`_config.yml` 的 `menu` 决定顶栏有哪些项和链接。键名必须能在主题 `menuCopy` 里找到中英文，见 [主题层](../theme/README.md)。

当前项：Home、Nickname、Learning（外链 `https://fe-learning.annwayart.com/`）、About、Github、Instagram。外链以 `http://` 或 `https://` 开头，模板会加 `target="_blank"`。

## 命令

在仓库根目录：

| 命令 | 作用 |
|---|---|
| `npm run server` | 本地预览，`hexo server` |
| `npm run build` | 只生成到 `public/` |
| `npm run clean` | 清掉 `public/` |
| `npm run package` | `hexo clean && hexo generate && gulp` |
| `npm run deploy` | 推到 `gh-pages`，见 [发布层](../release/README.md) |

本地预览用 `npm run server`。需要看压缩后的页面时再用 `npm run package`。
