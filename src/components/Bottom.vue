<template>
<!--底部主体框架-->
	<div class="ZhuTi">
		<!--底部居中主体框架-->
		<div class="Centerframe">
			<!--底部内容框架-->
			<div class="row">
				<div class="col-lg-12 a">
					<div class="row">
						<div class="col-lg-6">
							<div class="row">
								<div class="col-lg-6">
									<ul class="Content1">
										<li>{{wb[0]}}</li>
										<li>{{wb[1]}}</li>
									</ul>
								</div>
								<div class="col-lg-6">
									<ul class="Content2">
										<li>{{wb[2]}}</li>
										<li>{{wb[3]}}</li>
										<li>{{wb[4]}}</li>
										<li>{{wb[5]}}</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-lg-6 xia">
							<div class="row">
								<div class="col-lg-4">
									<ul>
										<li><img :src="imgWX" alt=""/></li>
										<li class="Picturecontent">{{wb[6]}}</li>
									</ul>
								</div>
								<div class="col-lg-4">
									<ul class="Content3">
										<li><img :src="imgXCX" alt=""/></li>
										<li class="Picturecontent">{{wb[7]}}</li>
									</ul>
								</div>
								<div class="col-lg-4">
									<ul class="Content4">
										<li><img :src="imgWB" alt=""/></li>
										<li class="Picturecontent">{{wb[8]}}</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--底部内容框架-->
		</div>
		
		<!--底部居中主体框架-->
	</div>
<!--底部主体框架-->



</template>

<script>
	export default {
  name: 'Bottom',
  data () {
    return {
      wb:["关注我们","加入我们","联系我们","仟言科技（佛山）有限公司","联系电话 12112121212","邮箱 1211212111","官方微信","官方小程序","官方微博"],
      imgWX:require('../assets/images/weixin.png'),
      imgXCX:require('../assets/images/xiaochengxu.png'),
      imgWB:require('../assets/images/weibo.png')
    }
  }
}	
</script>

<style scoped>
	
.ss{
		border: 1px solid red;
}

li{
	display: inherit;
	color: #FFFFFF;
}

.a{
	background-color: #282c4c;
}

/*底部主体框架*/	
.ZhuTi{
	width: 100%;
	height: 100%;
}
/*底部主体框架*/	

/*底部居中主体框架*/
.Centerframe{
	width: 50%;
	margin: 0 auto;
}
/*底部居中主体框架*/	
	
/*底部内容框架*/
.Content1{
	margin-left: 35%;
	margin-top: 35%;
}

.Content2{
	padding-left: 0;
}

.Content2 li{
	margin-top: 10%;
	margin-bottom: 10%;
}

.xia{
	margin-top: 5%;
}

.Content3{
	padding-left: 0;
	margin-left: 15%;
}

.Content3 li:last-child{
	padding-right: 20%;
	margin-top: 10%;
}

.Content4{
	padding-left: 0;
}

.Content4 li:last-child{
	padding-right: 20%;
	margin-top: 10%;
}

.Picturecontent{
	text-align: center;
	margin-top: 15%;
}
	
/*底部内容框架*/	
	
</style>