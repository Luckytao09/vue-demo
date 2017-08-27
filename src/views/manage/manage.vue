<!-- 创建人员管理组件 -->
<template>
    <div class="manage tc">
    <!-- 控制输入框的显示和隐藏,只有点击新增的时候输入框出现 -->
    	<button v-on:click='add'>新增</button>
    	<div class="input-area" v-show='showAdd'>
    	<!-- 给输入框双向绑定输入的数据 -->
    		<input type="text" placeholder="请输入人员姓名" v-model='nameVal'>
    		<button @click='addName'>确定</button>
    	</div>
    	<table>
    		<tr>
    		   <th>姓名</th>
    		   <th>操作</th>
    		</tr>
    		<tr v-for="(item,index) in peoples">
    			<td>{{item.name}}</td>
    			<td v-bind:id='index'>
    			           <span @click='edit'>编辑</span>
    			            <span @click='del'>删除</span>
    			</td>
    		</tr>
    	</table>
    	<!-- 编辑输入区域 -->
        <div class="wrap" v-show='showEdit'>
        	<div class="content">
        		<input type="text" placeholder='请输入新的姓名' v-model='newName'>
        		<button @click='editName'>确认</button>
        		<button @click='cancel'>取消</button>
        	</div>
        </div>
 

    	<footer-nav v-bind:class="{'isManage':isNowPage}"></footer-nav>
    </div>
	
</template>
<script>
	//1.引入底部组件
	 import FooterNav from '../../components/footer.vue'
    //2.局部注册组件
     export default{
     	components:{
     		FooterNav
     	},
     	data(){
     		return{
     			isNowPage:true,
     			showAdd:false,
     			// 定义数据
     			peoples:[{'name':'jake'},{'name':'mary'}],
     			nameVal:'',
     			showEdit:false,
     			newName:'',
     			editId:0
     		}
     	},
     	methods:{
     		//点击输入框出现功能
     		add(){
     			this.showAdd=true
     		},
     		//点击添加元素功能
     		addName(){
     			//获取输入框的值
     			var val=this.nameVal;
     			// 判断值为空执行的事件
     			if(val.trim()===''){
     				alert('请输入新增人员姓名');
     			}else{
     				var data={};//创建一个空对象
     				data.name=val;//这个对象赋值
     				this.peoples.push(data);
     			};
     			this.nameVal='';
     		},
     		// 删除功能有一个重点，我们得获取列表的index索引值，来判断到底删除哪一个值;更改循环列表,加入索引,然后将索引绑定到td标签上面,通过event点击事件去获取索引上面的id,从而删除索引为id的值
     		//点击删除元素功能,需要用到事件target
     		del(e){
               console.log(e.target.offsetParent.id);
               var nameId=e.target.offsetParent.id;
               this.peoples.splice(nameId,1);
     		},
     		//编辑功能
     		//当我点击编辑按钮的时候,触发以下事件:
     		//让wrap显示;
     		//获取td上面的id,保存到变量editId中
     		//给编辑输入框双向绑定一个值newName
     		edit(e){
     			var id=e.target.offsetParent.id;
     			this.showEdit=true;
     			this.editId=id;
     			this.newName=this.peoples[id].name;
     		},
     		//点击确认的时候,把修改后的值赋值给newname,同时更新peoples,同时编辑框隐藏
     		editName(){
     			//获取输入框的值
     			var v=this.newName;
     			if(v.trim()===''){
     				alert('请输入修改后的姓名');
     			}else{
     				this.peoples[this.editId].name=v;
     				this.showEdit=false;
     			}
     		},
     		// 点击取消的时候,编辑框隐藏
     		cancel(){
                this.showEdit=false;
     		}

     	}
     }
</script>
<style>
	.manage{padding-bottom:50px;}
	.manage >button{width:200px; height:40px; line-height:40px; background-color:#41b883; border: none; border-radius:5px; font-size:16px; color:#fff;}
	table{width:100%; max-width:500px; margin:0 auto; margin-top:20px;}
	.input-area input{width: 200px; height: 40px; line-height:40px; margin:20px 0; outline:none; border:1px solid #333;}
	.input-area button{ width:60px; height: 40px; line-height:40px; background-color:#41b883; border: none; border-radius:5px; font-size:16px; color:#fff;}
	th,td{width:100px;}
	tr input{width:100px; height:30px; padding-left:10px; outline:none; border:1px solid #333;}
	.wrap{display:table; position:fixed; top:0; left:0; height:100%; width:100%; background:rgba(0,0,0,.8); z-index: 10;}
	.wrap .content{display:table-cell; vertical-align:middle;}
	.wrap .content input{height: 40px; line-height: 40px; display:block; margin:0 auto; margin-bottom:10px; font-size:16px;}
	.wrap .content button{width:100px; height: 30px; line-height: 30px; background-color:#41b883; border: none; border-radius:5px; font-size:16px; color:#fff;}
</style>