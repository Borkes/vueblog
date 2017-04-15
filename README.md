# vueblog 

> vue+webpack+element <br>
> 用vuecli脚手架做的一个简单的博客,实现了注册,登录,发表功能,用localStorage存储数据 <br>

本地运行:
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```
注册登录之后发博客大致可以看到这样的效果:

![图片]('https://raw.githubusercontent.com/Borkes/vueblog/master/static/blog_login.png')

我是根据这里[vuecli脚手架](https://github.com/MeCKodo/vue-tutorial)的一个使用例子做的改动.

``` shell
	|——vueblog/
	|	|——build/
	|	|——confg/
	|	|——node_modules/
	|	|——src/
	|	|	|——assets/
	|	|	|——components/              //组件
	|	|	|	|——Hello.vue            //首页显示原始文件,这个没有删,有学习链接
	|	|	|	|——Home.vue	            //博客主页
	|	|	|	|——Login.vue            //登录页面
	|	|	|	|——Person.vue	       //左侧栏目,可以扩展显示
	|	|	|	|——Register.vue	       //注册页面
	|	|	|——router/		           //路由
        |	|	|	|——index.js	           //路由入口
        |	|	|——store/		           //存放vuex,用户信息和博客数据存储
	|	|	|	|——actions.js		   //vuex的action文件
        |       |       |       |——index.js            //store入口
	|	|	|	|——mutation-types.js    
    	|	|	|	|——mutations.js        //vuex核心代码
	|	|	|——App.vue				   //父组件
	|	|	|——main.js				   //入口文件
	|	|——static/
	|	|——.babelrc
	|	|——.editorconfig
        |	|——.eslintrc.js
        |       |——.eslintignore
        |       |——.postcssrc.js
	|	|——.gitgnore
	|	|——index.html
	|	|——package.json
	|	|——README.md
```

上面是项目的目录,大部分文件都是vuecli自动生成的,主要代码是在src目录里面. <br />
项目中有用到[element](http://element.eleme.io/#/zh-CN/component/installation)相关元素,有些写法也是[es6](http://es6.ruanyifeng.com/).<br />
最后readme.md需要看一下[markdown语法](https://github.com/riku/Markdown-Syntax-CN/blob/master/syntax.md)


