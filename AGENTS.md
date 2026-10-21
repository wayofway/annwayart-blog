# Agent 入口

改这个仓库之前，先读本文件，再只读你要动的那一层。说明按生成链路分层，放在 `docs/`。

| 层 | 文档 | 什么时候读 |
|---|---|---|
| 站点 | [docs/site/README.md](docs/site/README.md) | 配置、目录、本地命令、生成物边界 |
| 内容 | [docs/content/README.md](docs/content/README.md) | 文章、独立页、封面、标签 |
| 主题 | [docs/theme/README.md](docs/theme/README.md) | 布局、双语、晨宣/夜读、样式、移动端 |
| 资源 | [docs/assets/README.md](docs/assets/README.md) | 字体、图片、音乐、`fontspider.sh` |
| 发布 | [docs/release/README.md](docs/release/README.md) | `gulp`、GitHub Pages、域名 |

`themes/edinburgh/README.md` 是上游 Edinburgh 主题的原文，和当前册页实现不一致。以 `docs/theme/` 为准。

## 动手前

- 已有文章正文保持原样，除非用户明确要求改文案。
- `public/` 和 `.deploy_git/` 是生成物，不要手改。
- 样式只改 `themes/edinburgh/source/css/styles.css`。颜色用里面的 CSS 变量。
- 中英切换靠 `<span class="zh">` / `<span class="en">`，不要另建 Hexo 多语言目录。
- 顶栏菜单键要同时改根目录 `_config.yml` 的 `menu` 和 `themes/edinburgh/layout/_partial/header.ejs` 的 `menuCopy`。
- 站名「安安戈」写在 `header.ejs`。`_config.yml` 的 `title` 仍是 `Annwayli Blog`，用于 `<title>`。
- 首页分页英文写 `leaf`，中文写「开」。这是册页用语。
- 页面上引用的字体是 `themes/edinburgh/source/fonts/` 里的子集。`fonts/raw/` 只给 `fontspider.sh` 做压缩，CSS 不要指向 `raw`。
- 用户没有要求发布时，不要执行 `hexo deploy`，也不要跑完整的 `fontspider.sh`（脚本末尾会部署）。
