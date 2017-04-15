// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'   // 引入elem全部组件
import 'element-ui/lib/theme-default/index.css'
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'
import VueRouter from 'vue-router'
import store from './store'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 注册插件
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store,
  template: '<App/>',
  components: { App }
})
