<template>
	<div id="OntheStudyofThousandWords">
	<Topnavigation></Topnavigation>
	<!--导航主体框架-->
	<div class="ZhuTi">
		<!--导航居中主体框架-->
		<div class="Centerframe">
			<!--导航内容框架-->
			<div class="row">
				<div class="col-lg-12 a">
					<div class="row">
						<div class="col-lg-12">
							<div class="row">
								<div class="col-lg-5">
									<ul class="Dynamicrotation" style="margin-left: 15%;">
										<li>仟言动态</li>
										<li>
											<div id="myCarousel" class="carousel slide" data-ride="carousel">
												<ul class="carousel-inner">
													<li  class="item" v-for="(image,index) in img" :class="[ index == 0 ? 'active' : '']">
														<img :src="image" width="337px" height="212px" />
													</li>
												</ul>
											</div>
										</li>
									</ul>
								</div>
								<div class="col-lg-7">
									<ul class="Dynamictext" style="margin-left: 10%;">
										<li>仟言团队发布xxxx数据库<span>2020.04.09</span></li>
										<li>仟言团队赴xxxx开展实地调研活动<span>2020.04.09</span></li>
										<li>仟言发布最新app，引领方言教育新趋势<span>2020.04.09</span></li>
										<li>仟言调研团队发布最新调研成果，解密xx方言现状<span>2020.04.09</span></li>
										<li>仟言团队发布xxxx数据库<span>2020.04.09</span></li>
										<li>仟言团队赴xxxx开展实地调研活动<span>2020.04.09</span></li>
										<li>仟言团队发布xxxx数据库<span>2020.04.09</span></li>
										<li>仟言团队赴xxxx开展实地调研活动<span>2020.04.09</span></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="cut-offrule"></div>
					<div class="row">
						<div class="col-lg-12">
							<div class="row">
								<div class="col-lg-7">
									<p class="AboutThousandWords">
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
									</p>
								</div>
								<div class="col-lg-5">
									<ul class="Dynamicrotation" style="margin-left: -20%;">
										<li>关于仟言</li>
										<li><img src="../assets/images/dtlb.png"/></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="cut-offrule"></div>
					<div class="row">
						<div class="col-lg-12">
							<div class="row">
								<div class="col-lg-5">
									<ul class="Dynamicrotation" style="margin-left: 15%;">
										<li>调研团队</li>
										<li><img src="../assets/images/dtlb.png"/></li>
									</ul>
								</div>
								<div class="col-lg-7">
									<p class="AboutThousandWords">
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
										仟言简介仟言简介仟言简介仟言简介仟言简介仟言简介
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="cut-offrule"></div>
					<div class="row">
						<div class="col-lg-12">
							<p class="Partnertitle">合作伙伴</p>
							<div class="row">
							<div class="col-lg-12">
								<div class="Partner">
									<div>1</div>
									<div>2</div>
									<div>3</div>
									<div>4</div>
									<div>5</div>
									<div>6</div>
									<div>7</div>
									<div>8</div>
									<div>9</div>
									<div>10</div>
									<div>11</div>
									<div>1</div>
									<div>2</div>
									<div>3</div>
									<div>4</div>
									<div>5</div>
									<div>6</div>
									<div>7</div>
									<div>8</div>
									<div>9</div>
									<div>10</div>
									<div>11</div>
									<div>1</div>
									<div>2</div>
									<div>3</div>
									<div>4</div>
									<div>5</div>
									<div>6</div>
									<div>7</div>
									<div>8</div>
									<div>9</div>
									<div>10</div>
									<div>11</div>
								</div>
							</div>
						</div>
						</div>
					</div>
				</div>
			</div>
			<!--导航内容框架-->
		</div>
		<!--导航居中主体框架-->
	</div>				
		<!--导航主体框架-->
		<Bottom></Bottom>
		</div>
</template>

<script>
	import Topnavigation from './Topnavigation.vue'
	import Bottom from './Bottom.vue'
	
	export default {
  name: 'OntheStudyofThousandWords',
  data () {
    return {
      mark:0,
      img:[
      	 require('../assets/images/dtlb.png'),
      	 require('../assets/images/hzpt.png')
      ]
    }
  },
   components: {
		Topnavigation,
		Bottom
  },
  methods:{
  		puy:function(){
  			//轮播图两秒执行一次
			$(".carousel").carousel({
			interval:2000
			});
  		}
  },
  mounted:function(){		//生命周期钩子函数  挂载完成
	this.puy();
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

.a{
	background-color: #F5F5F5;
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

.Dynamicrotation{
	margin: 20% auto;
}

.Dynamicrotation li{
	text-align: center;
	margin-bottom: 2%;
	margin-top: 1%;
	font-size: 18px;
}

.Dynamictext{
	margin-left: 4%;
}

.Dynamictext span{
	color: #b7b7b8;
	margin-left: 2%;
}

.Dynamictext li{
	margin-bottom: 5%;
	margin-top: 5%;
}

.cut-offrule{
	background-color: #d6d6d6;
	height: 2px;
}

.AboutThousandWords{
	width: 80%;
	margin: 5% auto;
}

.Partnertitle{
	width: 100%;
	text-align: center;
	margin-top: 2%;
	font-size: 18px;
}



.Partner{
	width: 98%;
	margin: 0 auto;
	margin-bottom: 2%;
}

.Partner div{
	width: 61px;
	height: 60px;
	background-color: #aeafae;
	display: inline-block;
	margin: 1% 1%;
}



</style>