# ZTY-Blog Theme

![ZTY Blog Theme](https://raw.githubusercontent.com/zhengzangw/hugo-theme-ztyblog/master/static/images/screenshot.png)

## General inforamtions

This theme was highly inspired by the [doowzs.com](https://doowzs.com/). This theme provides many functions which can help you build a well-organized personal site.

Demo under building. You can see [this site](https://zhengzangw.com) for a referrence.

## Features

We provide specific rendering for following modules, for each you can find examples in `archetypes`:

* Blog: This is the place where you can organize your posts in timeline.

  * group by month
  * banner: constume banners and preview image can be customed
  * comments: you can enable comments with disquz
  * math render: you can open or close katex render in global as well as in specific post

* Notes: This is the place where you can organize your notes for class.

  * group by lessons
  * sidebar: a sidebar listing all your notes
  * print all: one button to print all your notes for one lesson

* Slides/Resources: This is the place where you can post your md-slides with remarkjs and other resources

  * remarkjs auto-rendered with qrcode
  * add other resources such as .pptx and .pdf to the list

* Bangumi: This is the place where you can share your watched bangumi with others

  * group by year/seaon

* Friends: you can add your friend links here
* About: you can add your infomation here
* Search: search the whole site
* Portal: a portal for your favourite links

## How to start

You can download the theme manually by going to [https://github.com/zhengzangw/hugo-theme-ztyblog](https://github.com/zhengzangw/hugo-theme-ztyblog) and pasting it to `themes/ztyblog` in your root directory.

You can also clone it directly to your Hugo folder:

```bash
$ git clone https://github.com/zhengzangw/hugo-theme-ztyblog
```

If you don't want to make any radical changes, it's the best option, because you can get new updates when they are available. To do so, include it as a git submodule:

```bash
$ git submodule add https://github.com/zhengzangw/hugo-theme-ztyblog themes/ztyblog
```

## Favicon

Use RealFaviconGenerator to generate these files, put them into your site's `static/icons`:

* android-chrome-192x192.png
* android-chrome-512x512.png
* apple-touch-icon.png
* favicon-16x16.png
* favicon-32x32.png
* favicon.ico
* mstile-150x150.png
* safari-pinned-tab.svg
* site.webmanifest

## How to configure

The theme doesn't require any advanced configuration. You can refer to the file `config.toml.example`.

If you choose CDN for third-part function, which is recommended, you only need to set `useCDN=true` in your setting. Otherwise, you have to run `npm install` and use `./load` to add dependency.

To auto generate information of git commit, add following line to your `deploy.sh`

```bash
gsed -i "/localcommithash/c \\\tlocalcommithash = \"$(git rev-parse HEAD)\"" config.toml
gsed -i "/localcommitdate/c \\\tlocalcommitdate = \"$(git log --pretty=format:"%cd" $(git rev-parse HEAD) -1)\"" config.toml
gsed -i "/localcommitcomment/c \\\tlocalcommitcomment = \"$(git log --pretty=format:"%s" $(git rev-parse HEAD) -1)\"" config.toml
cd public
gsed -i "/binarycommitdate/c \\\tbinarycommitdate = \"$(git log --pretty=format:"%cd" $(git rev-parse HEAD) -1)\"" ../config.toml
cd ..
```

## Available Social Icons

* email
* github

If you need another one, just open an issue or create a pull request with your wished icon. :)

## How to contribute

If you spot any bugs, please use [Issue Tracker](https://github.com/zhengzangw/hugo-theme-ztyblog/issues) or if you want to add a new feature directly please create a new [Pull Request](https://github.com/zhengzangw/hugo-theme-ztyblog/pulls).

## Third Party

* [Animate.css](https://daneden.github.io/animate.css/), MIT License
* [Bootstrap 4](https://getbootstrap.com/), MIT License
* [Bootswatch](https://bootswatch.com/), MIT License
* [Fuse.js](https://fusejs.io/), Apache License
* [Iconfont](https://www.iconfont.cn/home/index), Iconfont 法律声明
* [jQuery](https://jquery.com/), jQuery License
* [KaTeX](https://katex.org/), MIT License
* [Leonsans](https://github.com/cmiscm/leonsans), MIT License
* [Mark.js](https://markjs.io/), MIT License
* [Normalize.css](https://necolas.github.io/normalize.css/), MIT License
* [qrcode.js](http://davidshimjs.github.io/qrcodejs/), MIT License
* [Remark](https://remarkjs.com/), MIT License

## License

The theme is released under the MIT License.