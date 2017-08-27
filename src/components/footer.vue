<!-- 因为底部导航是公共组件,所以写在components文件夹里面 -->
<!-- router-link主要实现跳转功能,属性to='/'即是跳转到path='/'的路径,即定义的index路由 -->
<template>
	<div class="footer fixed">
		<ul>
			<li><router-link to='/'>首页</router-link></li>
			<li><router-link to='/manage'>人员管理</router-link></li>
		</ul>
	</div>
</template>

<script></script>

<!-- scoped声明样式的作用域,只在该页面生效,不渲染全局 -->
<style scoped>
	li a{display: inline-block;width: 100%;height: 100%;}
	.footer{width: 100%;height: 50px;bottom: 0}
    ul{display: flex;height: 100%;line-height: 50px;}
    ul li{flex: 1;background-color: #f1f1f1}
    .isIndex li:first-child{background-color: #d3d3d3}
    .isIndex li:first-child a{color: #41b883}
    .isManage li:last-child{background-color: #d3d3d3}
    .isManage li:last-child a{color:#41b883;}
</style>