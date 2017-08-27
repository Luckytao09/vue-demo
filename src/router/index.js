//引入vue框架,命名为Vue
import Vue from 'vue'

//引入vue路由依赖,命名为Router
import Router from 'vue-router'

//引入创建的首页组件,命名为Index
import Index from '../views/index/index'

//引入人员管理组件,命名为Manage
import Manage from '../views/manage/manage'


//使用路由依赖
//Vue.use(Router)
Vue.use(Router)

// 定义路由
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
     },
     {
     	path: '/manage',
     	name: 'Manage',
     	component: Manage
     }
  ]
})
