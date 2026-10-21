# 发布层

站点推到 `https://github.com/wayofway/annwayart-blog` 的 `gh-pages`。自定义域名来自 `source/CNAME`：`blog.annwayart.com`。源码在 `master`（或当前开发分支），生成物不进源码分支。

## 压缩

`gulpfile.js` 只处理已经生成的 `public/`：

| 任务 | 对象 |
|---|---|
| `minify-css` | `public/**/*.css` |
| `minify-html` | `public/**/*.html` |
| `minify-js` | `public/**/*.js` |
| `minify-images` | `public/images/` 下的 jpeg/png |

`npm run package` 等于清站、生成、再跑上述压缩。gulp 不改主题源文件。

## 部署

根配置：

```yaml
deploy:
  type: git
  repo: https://github.com/wayofway/annwayart-blog.git
  branch: gh-pages
```

`npm run deploy` 即 `hexo deploy`，使用 `hexo-deployer-git`，本地目录是 `.deploy_git/`。

只在用户明确要求发布时执行。发布前用 `npm run server` 或 `npm run package` 看过改动。字体脚本自带部署，见 [资源层](../assets/README.md)。

## Travis

`.travis.yml` 在 `master` 上执行 `npm run package`，再用 GitHub Pages 把 `public/` 推到 `gh-pages`。日常发布以本地 `hexo deploy` 为准；改 Travis 前先确认仓库是否还在用它。
