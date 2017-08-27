// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 
// 入口文件
// main.js主要是用来引入vue框架,根组件和路由设置,并且定义vue实例


//引入vue框架
import Vue from 'vue'

//引入App根组件
import App from './App'

//引入路由配置
import router from './router'

//关闭生产模式下给出的提示
Vue.config.productionTip = false

/* eslint-disable no-new */
//定义vue实例
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  // components:{App}就是引入的根组件,{App}=App.vue
  components: { App }
})
