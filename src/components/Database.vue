<template>
<!--资料库主体框架-->
	<div id="Database">
	<Topnavigation></Topnavigation>
	<div class="ZhuTi">
		<!--资料库居中主体框架-->
		<div class="Centerframe">
			<!--资料库内容框架-->
			<div class="row">
				<div class="col-lg-12 a">
					<div class="row">
						<div class="col-lg-3">
							<div class="Leftframe">
								<ul>
									<li class="zlkwz">
										<h4>资料库</h4>
									</li>
									<div class="cut-offrule"></div>
									<li class="zlkwz">
										<ul>
											<li class="btwz">年份</li>
											<li><input type="checkbox" name="nf0" value="2020"/>2020</li>
											<li><input type="checkbox" name="nf9" value="2019"/>2019</li>
											<li><input type="checkbox" name="nf8" value="2018"/>2018</li>
										</ul>
									</li>
									<div class="cut-offrule"></div>
									<li class="zlkwz">
										<ul>
											<li class="btwz">分类</li>
											<li><input type="checkbox" name="fy" value="方言文化"/>方言文化</li>
											<li><input type="checkbox" name="df" value="地方文化"/>地方文化</li>
											<li><input type="checkbox" name="kj" value="科技"/>科技</li>
										</ul>
									</li>
									<div class="cut-offrule"></div>
									<li class="zlkwz">
										<ul>
											<li class="btwz">作者</li>
											<li><input type="checkbox" name="a" value="A"/>A</li>
											<li><input type="checkbox" name="b" value="B"/>B</li>
											<li><input type="checkbox" name="c" value="C"/>C</li>
										</ul>
									</li>
									<p><button class="Confirmbutton">确认</button></p>
								</ul>
							</div>
						</div>
						<div class="col-lg-9">
							<table id="xsfy" width="90%" style="margin-bottom: 2%;">
								<tr><th></th><th>题目</th><th>分类</th><th>下载量</th><th>收藏量</th><th>发表日期</th><th>下载</th></tr>
    							<tr v-for="user in users" ><td>{{user.id}}</td><td>{{user.username}}</td><td>{{user.username}}</td><td>{{user.username}}</td><td>{{user.username}}</td><td>{{user.username}}</td><td>{{user.username}}</td></tr>
    							<!--<tr><td>2</td><td>A</td><td>方言文化</td><td>25</td><td>38</td><td>2018/04/16</td><td>下载</td></tr>
    							<tr><td>3</td><td>A</td><td>方言文化</td><td>25</td><td>38</td><td>2018/04/16</td><td>下载</td></tr>
  								<tr><td>4</td><td>A</td><td>方言文化</td><td>25</td><td>38</td><td>2018/04/16</td><td>下载</td></tr>
    							<tr><td>5</td><td>A</td><td>方言文化</td><td>25</td><td>38</td><td>2018/04/16</td><td>下载</td></tr>
    							<tr><td>6</td><td>A</td><td>方言文化</td><td>25</td><td>38</td><td>2018/04/16</td><td>下载</td></tr>
    							<tr><td>7</td><td>A</td><td>方言文化</td><td>25</td><td>38</td><td>2018/04/16</td><td>下载</td></tr>
    							<tr><td>8</td><td>A</td><td>方言文化</td><td>25</td><td>38</td><td>2018/04/16</td><td>下载</td></tr>
    							<tr><td>9</td><td>A</td><td>方言文化</td><td>25</td><td>38</td><td>2018/04/16</td><td>下载</td></tr>
    							<tr><td>10</td><td>A</td><td>方言文化</td><td>25</td><td>38</td><td>2018/04/16</td><td>下载</td></tr>
    							<tr><td>11</td><td>A</td><td>方言文化</td><td>25</td><td>38</td><td>2018/04/16</td><td>下载</td></tr>
    							<tr><td>12</td><td>A</td><td>方言文化</td><td>25</td><td>38</td><td>2018/04/16</td><td>下载</td></tr>
    							<tr><td>13</td><td>A</td><td>方言文化</td><td>25</td><td>38</td><td>2018/04/16</td><td>下载</td></tr>
    							<tr><td>14</td><td>A</td><td>方言文化</td><td>25</td><td>38</td><td>2018/04/16</td><td>下载</td></tr>
    							<tr><td>15</td><td>A</td><td>方言文化</td><td>25</td><td>38</td><td>2018/04/16</td><td>下载</td></tr>-->
							</table>
						</div>
						
						<div>
				<div class="fyan">
					<div @click="shangyiye()"><span class="glyphicon glyphicon-triangle-left"></span></div>
					<div>1/3</div>
					<div @click="xiayiye()"><span class="glyphicon glyphicon-triangle-right"></span></div>
					<div><input type="text" value=""/></div>
					<div><button>跳转</button></div>
				</div>
			</div>
						
					</div>
				</div>
			</div>
			<!--资料库内容框架-->
		</div>
		<!--资料库居中主体框架-->
	</div>
<!--资料库主体框架-->
<Bottom></Bottom>
</div>
</template>

<script>
	import Topnavigation from './Topnavigation.vue'
	import Bottom from './Bottom.vue'
	
	export default {
  name: 'Database',
  data () {
    return {
       		users:[]
    	}
  },
	methods:{//方法
		dynamicAddUser:function (num){
this.$http.get("http://jsonplaceholder.typicode.com/users")
.then(res => {
//   console.log(res);
       this.users = res.body;
	});

   },
   shangyiye:function(){
   	alert("上一页");
   },
   xiayiye:function(){
   	alert("下一页");
   }
},

mounted:function(){		//生命周期钩子函数  挂载完成
	
		this.dynamicAddUser();
		
},
   components: {
		Topnavigation,
		Bottom
  }
}
</script>

<style scoped>

li{
	display: inherit;
}

ul{
	padding-left: 0;
}
	
.ss{
	border: 1px solid seagreen;
}

.a{
	background-color: #F5F5F5;
	padding-top: 5%;
}	
	
/*资料库主体框架*/	
.ZhuTi{
	width: 100%;
	height: 100%;
}
/*资料库主体框架*/	

/*资料库居中主体框架*/
.Centerframe{
	width: 50%;
	margin: 0 auto;
}
/*资料库居中主体框架*/

/*资料库内容框架*/
.Leftframe{
	border: 1px solid #FFFFFF;
	width: 80%;
	height: 500px;
	background-color: #FFFFFF;
	margin-left: -7%;
	border-radius: 0 30px 30px 0;
}

.Leftframe h4{
	width: 90%;
	text-align: center;
}

.cut-offrule{
	background-color: #d6d6d6;
	height: 2px;
}

.zlkwz{
	padding-top: 10%;
	padding-bottom: 10%;
}

.btwz{
	margin-bottom: 3%;
}

.Confirmbutton{
	width: 100px;
	height: 30px;
	border: none;
	background-color: #02a7f0;
	border-radius: 5px;
	color: #FFFFFF;
}

#xsfy th{
	padding-top: 10px;
	padding-bottom: 10px;
	text-align: center;
	background-color: silver;
}

#xsfy tr{
	border-bottom: 1px solid silver;
	text-align: center;
	background-color: #FFFFFF;
}

#xsfy td{
	padding-top: 10px;
	padding-bottom: 10px;
	padding-left: 15px;
	padding-right: 15px;
}

.fyan{
	float: right;
	margin-bottom: 3%;
	margin-right: 10%;
}

.fyan div{
	display: inline-block;
}

.fyan div:nth-child(1){
	width: 20px;
	height: 20px;
	background-color: #FFFFFF;
}

.fyan div:nth-child(3){
	width: 20px;
	height: 20px;
	background-color: #FFFFFF;
}

.fyan div:nth-child(4) input{
	width: 50px;
	border: none;
	border-radius: 3px;
}

.fyan div:nth-child(5) button{
	width: 50px;
	height: 23px;
	border: none;
	border-radius: 3px;
	margin-left: 5px;
	background-color: #FFFFFF;
}

/*资料库内容框架*/



</style>