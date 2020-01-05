# ZTY Blog Theme

![ZTY Blog Theme](https://raw.githubusercontent.com/zhengzangw/hugo-theme-ztyblog/master/images/screenshot.png)

A Hugo theme highly inspired by Tianyun Zhang's blog ([https://doowzs.com](https://doowzs.com/)).

A demo is available at [https://zhengzangw.com](https://zhengzangw.com/).

## Features

- Clean and beautiful layout
- Rendering templates for
  - Blog posts
  - Course notes
  - Presentations ([Remark.js](https://remarkjs.com/))

## How to Use

### Installation

Download all files from this repository and place it to `themes/ztyblog` from the root directory of your Hugo site.

If you are not going to make radical changes, it is recommended to add this repository as a git submodule to your site so that you can get updates easily.

```shell
$ git submodule add https://github.com/zhengzangw/hugo-theme-ztyblog themes/ztyblog
```

The folder structure of your site should look like

```
root
├─archetypes
├─content
│   ├─blog
│   │   └─foobar.md
│   ├─notes
│   │   └─calculus
│   │       │─_index.md
│   │       └─intro.md
│   ├─slides
│   │   └─presentation.md
│   │─_index.md
│   │─about.md
│   │─bangumi.md
│   └─friends.md
├─layouts
├─static
├─themes
│   ├─ztyblog
│   └─......
└─config.toml
```

### Configuration

There are three sections that is customizable in the config file:

- `params.commit`: commit hash and message of your site repository
- `params.social`: customize your social links
- `menus`: customize your menus in the header navigation bar

## Known issues

- Not fully tested
- Files from different sources
- Still updating, files not stable

## How to Contribute

If you spot any bugs, please use [Issue Tracker](https://github.com/zhengzangw/hugo-theme-ztyblog/issues) or if you want to add a new feature directly please create a new [Pull Request](https://github.com/zhengzangw/hugo-theme-ztyblog/pulls).