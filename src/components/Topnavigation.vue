<template>
	<div id="Topnavigation">
	<!--导航主体框架-->
	<div class="ZhuTi">
		<!--导航居中主体框架-->
		<div class="Centerframe">
			<div class="row">
				<div class="col-lg-12 a">
			<!--导航顶部导航条-->
			<div class="Topframe">
				<p class="Rightfloat"><span style="margin-right: 5%;">{{ql[0]}}</span><span>{{ql[1]}}</span></p>
			</div>
			</div>
			</div>
			<div class="row">
				<div class="col-lg-3 logotFigure">
						<img :src="imgLogo" alt="" />
					</div>
					<div class="col-lg-9">
						<ul class="Navigationcontent">
						<li>{{nr[0]}}</li>
						<li id="app1" @click="Clickjump1"><router-link id="tmd1" class="Removeunderline" to="/">{{nr[1]}}</router-link></li>
						<li id="app2" @click="Clickjump2"><router-link id="tmd2" class="Removeunderline" to="/Database">{{nr[2]}}</router-link></li>
						<li id="app3" @click="Clickjump3"><router-link id="tmd3" class="Removeunderline" to="/Productsandservices">{{nr[3]}}</router-link></li>
						<li id="app4" @click="Clickjump4"><router-link id="tmd4" class="Removeunderline" to="/Cooperationandnegotiation">{{nr[4]}}</router-link></li>
						<li class="Searchbox"><input type="text" placeholder="请输入关键词"/><span class="glyphicon glyphicon-search"></span></li>
						<li>{{nr[5]}}</li>
						<li>{{nr[6]}}</li>
					</ul>
					</div>
			</div>
			<!--导航顶部导航条-->
		</div>
		<!--导航居中主体框架-->
	</div>
	<!--导航主体框架-->
	</div>
</template>

<script>
	export default {
  name: 'Topnavigation',
  data () {
    return {
    	
      ql:["仟言官网","联系我们"],
      imgLogo:require('../assets/images/log.png'),
      nr:["首页","关于仟言研究","资料库","产品与服务","合作洽谈","登录","我的"]
    }
  },
  methods:{
  		Clickjump1:function(){
			document.getElementById("app1").classList.add("Underline");
			$("#tmd1").css("opacity","0.5");
  		},
  		Clickjump2:function(){
			document.getElementById("app2").classList.add("Underline");
			$("#tmd2").css("opacity","0.5");
  		},
  		Clickjump3:function(){
			document.getElementById("app3").classList.add("Underline");
			$("#tmd3").css("opacity","0.5");
  		},
  		Clickjump4:function(){
			document.getElementById("app4").classList.add("Underline");
			$("#tmd4").css("opacity","0.5");
  		}
  }
}	
</script>

<style scoped>
li{
	display: inherit;
}	

.a{
	background-color: #f5f5f5;
}
	
/*导航主体框架*/	
.ZhuTi{
	width: 100%;
	height: 100%;
}
/*导航主体框架*/	

/*导航居中主体框架*/
.Centerframe{
	width: 50%;
	margin: 0 auto;
}
/*导航居中主体框架*/

/*导航顶部导航条*/

.Removeunderline{
	text-decoration: none;
	color: #646464;
}

.Underline{
	height: 40px;
	border-bottom: 2px solid #63677a;
	color: none;
}

.Topframe{
	width: 100%;
	height: 25px;
}

.Rightfloat{
	width: 15%;
	float: right;
	margin-top: 0;
	margin-right: 2%;
	color: #aeaeae;
}

.logotFigure img{
	margin-left: 20%;
}

.Navigationcontent{
	padding-left: 0;
	margin-top: 1%;
	margin-bottom: 0;
}

.Navigationcontent li{
	display: inline-block;
	margin-left: 1.7%;
	margin-top: 1.5%;
	font-size: 15px;
}

.Searchbox{
	width: 25%;
	border-radius:8px ;
	border: 1px solid #aeaeae;
}

.Searchbox input{
	width: 80%;
	margin-left: 4%;
	border: none;
}

/*导航顶部导航条*/




















	
	
</style>