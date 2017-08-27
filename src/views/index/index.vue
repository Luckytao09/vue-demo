<template>
	<div id="app">
		欢迎来到人员管理系统
		<!-- 在首页模块引入footer公共组件 -->
		<footer-nav v-bind:class="{'isIndex':isNowPage}"></footer-nav>
	</div>
</template>

<script>
   /*使用组件的步骤:1.引入组件*/
	import FooterNav from '../../components/footer.vue'
   /*2.局部注册*/
	export default {
		components:{
			FooterNav
		},
		data(){
			return{
				isNowPage:true
			}
		}
	}
</script>

<style>
	
</style>