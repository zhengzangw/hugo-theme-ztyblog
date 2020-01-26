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