# vueblog 

> vue+webpack+element <br>
> 用vuecli脚手架做的一个简单的博客,实现了注册,登录,发表功能,用localStorage存储数据 <br>

本地运行:[TOC]
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```
注册登录之后发博客大致可以看到这样的效果:

![图片](https://raw.githubusercontent.com/Borkes/vueblog/master/static/blog_login.png)

我是根据这里[vuecli脚手架](https://github.com/MeCKodo/vue-tutorial)的一个使用例子做的改动. [TOC]

``` shell
├── build
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── src
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   ├── Hello.vue
│   │   ├── Home.vue
│   │   ├── Login.vue
│   │   ├── Person.vue
│   │   └── Register.vue
│   ├── router
│   │   └── index.js
│   ├── store
│   │   ├── actions.js
│   │   ├── index.js
│   │   ├── mutations.js
│   │   └── mutation-types.js
│   ├── App.vue
│   └── main.js
├── static
│   ├── blog_login.png
│   └── .gitkeep
├── .babelrc
├── .editorconfig
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── index.html
├── package.json
├── .postcssrc.js
└── README.md
```

[TOC] 上面是项目的目录,大部分文件都是vuecli自动生成的,主要代码是在src目录里面. <br />
项目中有用到[element](http://element.eleme.io/#/zh-CN/component/installation)相关元素,有些写法也是[es6](http://es6.ruanyifeng.com/).<br />
最后readme.md需要看一下[markdown语法](https://github.com/riku/Markdown-Syntax-CN/blob/master/syntax.md)





