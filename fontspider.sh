#!/bin/bash

hexo clean

# 相对路径改为绝对路径
find themes/edinburgh/layout/_partial/head.ejs -name "*.ejs" |xargs sed -i '' "s#css/bootstrap.min.css#Users/annwayli/Private/Code/annwayart-blog/public/css/bootstrap.min.css#g"
find themes/edinburgh/layout/_partial/head.ejs -name "*.ejs" |xargs sed -i '' "s#css/styles.css#Users/annwayli/Private/Code/annwayart-blog/public/css/styles.css#g"

# 字体指向源文件
find themes/edinburgh/source/css/styles.css -name "*.css" |xargs sed -i '' "s#/fonts/slidefu.ttf#/fonts/raw/slidefu.ttf#g"
find themes/edinburgh/source/css/styles.css -name "*.css" |xargs sed -i '' "s#/fonts/CrimsonText.ttf#/fonts/raw/CrimsonText.ttf#g"

# 生成html
hexo g

# 启动font-spider 压缩字体文件
find public -name "*.html"|xargs font-spider

# 生成的压缩字体文件拷贝到目标目录
cp public/fonts/raw/CrimsonText.ttf themes/edinburgh/source/fonts/CrimsonText.ttf
cp public/fonts/raw/slidefu.ttf themes/edinburgh/source/fonts/slidefu.ttf

# 还原路径
find themes/edinburgh/layout/_partial/head.ejs -name "*.ejs" |xargs sed -i '' "s#Users/annwayli/Private/Code/annwayart-blog/public/css/bootstrap.min.css#css/bootstrap.min.css#g"
find themes/edinburgh/layout/_partial/head.ejs -name "*.ejs" |xargs sed -i '' "s#Users/annwayli/Private/Code/annwayart-blog/public/css/styles.css#css/styles.css#g"
find themes/edinburgh/source/css/styles.css -name "*.css" |xargs sed -i '' "s#/fonts/raw/slidefu.ttf#/fonts/slidefu.ttf#g"
find themes/edinburgh/source/css/styles.css -name "*.css" |xargs sed -i '' "s#/fonts/raw/CrimsonText.ttf#/fonts/CrimsonText.ttf#g"

# 重新打包
hexo clean
hexo g
gulp

# 发布
hexo deploy
