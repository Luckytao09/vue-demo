<template>
<!-- 一个vue页面通常由三部分组成:模板(template)、js(script)、样式(style) -->
<!-- 其中模板只能包含一个父节点，也就是说顶层的div只能有一个（例如下图，父节点为#app的div，其没有兄弟节点） -->
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <router-view>类似于一个插槽，跳转某个路由时，该路由下的页面就插在这个插槽中渲染显示 -->
    <router-view></router-view>
  </div>
</template>

<script>
// vue通常用es6来写，用export default导出，其下面可以包含数据data，生命周期(mounted等)，方法(methods)等
export default {
  name: 'app'
}
</script>


<!-- /* 样式通过style标签<style></style>包裹，默认是影响全局的，如需定义作用域只在该组件下起作用，需在标签上加scoped，<style scoped></style> ,如要引入外部css文件，首先需给项目安装css-loader依赖包*/ -->
<style>
@import './assets/public.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
