# ZTY Blog Theme

![ZTY Blog Theme](https://raw.githubusercontent.com/zhengzangw/hugo-theme-ztyblog/master/images/screenshot.png)

## General inforamtions

This theme was highly inspired by the [doowzs.com](https://doowzs.com/). You can see demo at [zhengzangw.com](https://zhengzangw.com/).

## Features

* Provide specific rendering for
  * blog
  * notes
  * review

## How to start

You can download the theme manually by going to [https://github.com/zhengzangw/hugo-theme-ztyblog](https://github.com/zhengzangw/hugo-theme-ztyblog) and pasting it to `themes/ztyblog` in your root directory.

You can also clone it directly to your Hugo folder:

``` bash
$ git clone https://github.com/zhengzangw/hugo-theme-ztyblog
```

If you don't want to make any radical changes, it's the best option, because you can get new updates when they are available. To do so, include it as a git submodule:

``` bash
$ git submodule add https://github.com/zhengzangw/hugo-theme-ztyblog themes/ztyblog
```

## How to configure

The theme doesn't require any advanced configuration.

```toml
baseURL = "/"
languageCode = "zh-CN"
theme="ztyblog"
copyright="CC BY-NC 4.0"
title = "Welcome"

hasCJKLanguage = true
pygmentsCodeFences = true
pygmentsCodefencesGuessSyntax = false
pygmentsStyle = "colorful"
enableRobotsTXT = true
enableGitInfo = true
Paginate = 10
assetDir=["/assets", "/themes/ztyblog/assets"]

[blackfriday]
    smartypants = false

[params]
    author = ""
    description = ""
    copyright = ""
    dateformFull = "2006-01-02 15:04 CST"
    updatelisturl = ""
    mail = ""
    iconfontURL = "//at.alicdn.com/t/font_1559566_z93lvlj24ja.css"
	localcommithash = ""
	localcommitdate = ""
	localcommitcomment = ""
	binarycommitdate = ""
    [[params.social]]
        identifier = "github"
        name = "Github"
        icon = "icon-github"
        url = ""
    [[params.social]]
        identifier = "email"
        name = "email"
        icon = "icon-email"
        url = ""
    [params.pagination]
        class = "pagination justify-content-center"
        showFirst = true
        showPrevious = true
        showBeginEnd = true
        previousIndicator = "Previous"
        nextIndicator = "Next"
        pagesBetweenActive = 2
        firstIndicator = '<i class="iconfont icon-back-arrow-"></i>'
        lastIndicator = '<i class="iconfont icon-back-arrow-reverse"></i>'

[menus]
    [[menu.main]]
        identifier = "blog"
        name = "blog"
        url = "/blog/"
        pre = "icon-blog"
        post = "博客"
        weight = 1
    [[menu.main]]
        identifier = "notes"
        name = "notes"
        url = "/notes/"
        pre = "icon-Notes"
        post = "笔记"
        weight = 2
    [[menu.main]]
        identifier = "about"
        name = "about"
        url = "/about/"
        pre = "icon-aboutus"
        post = "关于我"
        weight = 3
    [[menu.second]]
        identifier = "bangumi"
        name = "bangumi"
        url = "/bangumi/"
        pre = "icon-bilibili-line"
        post = "追番列表"
    [[menu.second]]
        identifier = "friends"
        name = "friends"
        url = "/friends/"
        pre = "icon-friend"
        post = "友链"
```

To auto generate information of git commit, add following line to your `deploy.sh`

```bash
gsed -i "/localcommithash/c \\\tlocalcommithash = \"$(git rev-parse HEAD)\"" config.toml
gsed -i "/localcommitdate/c \\\tlocalcommitdate = \"$(git log --pretty=format:"%cd" $(git rev-parse HEAD) -1)\"" config.toml
gsed -i "/localcommitcomment/c \\\tlocalcommitcomment = \"$(git log --pretty=format:"%s" $(git rev-parse HEAD) -1)\"" config.toml
cd public
gsed -i "/binarycommitdate/c \\\tbinarycommitdate = \"$(git log --pretty=format:"%cd" $(git rev-parse HEAD) -1)\"" ../config.toml
cd ..
```

## Known issues

Not yet fully tested (which means there might be many issues).

## How to contribute

If you spot any bugs, please use [Issue Tracker](https://github.com/zhengzangw/hugo-theme-ztyblog/issues) or if you want to add a new feature directly please create a new [Pull Request](https://github.com/zhengzangw/hugo-theme-ztyblog/pulls).