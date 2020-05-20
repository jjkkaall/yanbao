<template>
<div id="Productsandservices">
<Topnavigation></Topnavigation>
<!--产品与服务主体框架-->
	<div class="ZhuTi">
		<!--产品与服务居中主体框架-->
		<div class="Centerframe">
			<!--产品与服务居中主体内容-->
			<div class="row">
				<div class="col-lg-12 a">
					<div class="row">
						<div class="col-lg-12 ts">
							<div class="row">
								<div class="col-lg-6 Middledividingline">
									<ul class="Buyseparately">
										<h3>单独购买</h3>
										<li>单独购买一份研究报告，</li>
										<li>每次购买都必须单独付</li>
										<li>价格：单独标注<input class="Buttonstyle" type="button" value="充值"/></li>
									</ul>
								</div>
								<div class="col-lg-6">
									<ul class="Monthlymembership">
										<h3>包月会员</h3>
										<li>包月会员有效期内全站下载</li>
										<li>免费，一次性续订12个月可</li>
										<li>见面一个月使用费。</li>
										<li>可以订阅资料库更新提醒：</li>
										<li>每当有你感兴趣的资料库更</li>
										<li>新，我们将通过邮件第一时</li>
										<li>间通知你。</li>
										<li>价格：xx元/月<input class="Buttonstyle" type="button" value="开通"/></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-12 cut-offrule">
							<div class="row">
								<div class="col-lg-6 Middledividingline">
									<ul class="Classifiedsubscription">
										<h3>分类订阅</h3>
										<li>单独订阅某个分类或多个自</li>
										<li>选分类资料库。</li>
										<li>可以免费下载所有订阅资料库</li>
										<li>的全部内容。</li>
										<li>资料库更新提醒：每当你订</li>
										<li>阅的资料库更新，我们将通</li>
										<li>过邮件第一时间通知你。</li>
										<li>价格：xx元/类<input class="Buttonstyle" type="button" value="开通"/></li>
									</ul>
								</div>
								<div class="col-lg-6">
									<ul class="Directionalresearchpaper">
										<h3>定向研报</h3>
										<li>可以根据需要，自定义所需</li>
										<li>研报方向、主题、内容等。</li>
										<li>价格：xx元/份<input @click="Customerserviceclick(1)" class="Buttonstyle" type="button" value="联系客服"/></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-12" style="padding-left: 0;">
							<img  :src="imgHYCZ" alt=""/>
						</div>
					</div>
					
				</div>
			</div>
			<!--产品与服务居中主体内容-->
			
			<!--产品与服务的客服联系-->
			<div class="Customerservice">
				<div class="Customerservicehead">
					<div class="minus" @click="ClickClose"></div>
				</div>
				<div class="Central">
					<ul id="Chatlist">
						<li class="Leftflank"><span class="Leftfloat">1111</span></li>
						<li class="Rightside"><span class="Rightfloat">2222</span></li>
					</ul>
				</div>
				<div class="Bottom-db">
					<div><img  :src="imgwxbq" alt=""/><img  :src="imgtpxtb" alt=""/></div>
					<div>
						<form method="post" action="">
							<p>
								<textarea id="Content" style="resize:none; overflow:hidden; overflow :auto ; border: none;" name="textarea" cols="40" rows="3"></textarea>
							</p>
						</form>
					</div>
					<div class="an"><p><input @click="ClickClose" type="button" value="关闭"/><input @click="Sendinformation" type="button" value="发送"/></p></div>
				</div>
			</div>
			<!--产品与服务的客服联系-->
			
		</div>
		<!--产品与服务居中主体框架-->
	</div>
	<!--产品与服务主体框架-->
<Bottom></Bottom>
</div>
</template>

<script>
	import Topnavigation from './Topnavigation.vue'
	import Bottom from './Bottom.vue'
	
	export default {
  name: 'Productsandservices',
  data () {
    return {
      imgHYCZ:require('../assets/images/huiyuanchongzhi.png'),
      imgwxbq:require('../assets/images/wxxbq.png'),
      imgtpxtb:require('../assets/images/tpxtb.png'),
      num:0		//记录点击的次数
    }
  },
   components: {
		Topnavigation,
		Bottom
  },
  methods:{ //方法
  	Customerserviceclick:function(n){    //点击联系客服显示弹窗的方法
  		this.num+=n;
		if(this.num%2!=0){
			$(".Customerservice").css("display","block");
		}else{
			$(".Customerservice").css("display","none");
		}	
  	},
  	ClickClose:function(){  //点击关闭联系客服弹窗的方法
  		$(".Customerservice").css("display","none");
  		this.num=0;
  	},
  	Sendinformation:function(){  //点击发送，发送信息的方法
		var vals=$('#Content').val();  //发送单击，获取用户输入的数据value属性值
		var str="";
		str='<li class="Rightside"><span  class="Rightfloat">'+ vals+'</span></li>';
		$('#Chatlist').append($(str));
		$('.Rightside').css({"height":"25px","display":"inherit"});
		$('.Rightfloat').css("float","right");
        $('#Content').val('');  //发送完数据后清空输入框
  	}
  
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

.ss{
	border: 1px solid seagreen;
}
	
/*产品与服务主体框架*/	
.ZhuTi{
	width: 100%;
	height: 100%;
}
/*产品与服务主体框架*/	

/*产品与服务居中主体框架*/
.Centerframe{
	width: 50%;
	margin: 0 auto;
}
/*产品与服务居中主体框架*/

/*产品与服务居中主体内容*/

.cut-offrule{
	margin-top: 2%;
	margin-bottom: 5%;
}

.Buyseparately{
	width: 45%;
	margin: auto;
}

.Buyseparately h3{
	text-align: center;
	margin-bottom: 10%;
}

.Buyseparately li:nth-child(4){
	margin-top: 70%;
}

.Monthlymembership{
	width: 40%;
	margin: auto;
}

.Monthlymembership h3{
	text-align: center;
	margin-bottom: 10%;
}

.Monthlymembership li:nth-child(9){
	margin-top: 25%;
}

.Classifiedsubscription{
	width: 45%;
	margin: auto;
}

.Classifiedsubscription h3{
	text-align: center;
	margin-bottom: 10%;
}

.Classifiedsubscription li:nth-child(9){
	margin-top: 20%;
}

.Directionalresearchpaper{
	width: 40%;
	margin: auto;
}

.Directionalresearchpaper h3{
	text-align: center;
	margin-bottom: 10%;
}

.Directionalresearchpaper li:nth-child(4){
	margin-top: 80%;
}

.Buttonstyle{
	width: 70px;
	height: 25px;
	border: none;
	color: #FFFFFF;
	background-color: #ee7d54;
	border-radius:3px;
	margin-left: 10%;
}

.Middledividingline{
	border-right:1px solid #cdcdcd ;
}

.ts{
	padding-top: 2%;
	margin-bottom: 2%;
}

/*产品与服务居中主体内容*/

/*产品与服务的客服联系*/

.Customerservice{
	width: 300px;
	position: absolute;
	z-index: 1;
	margin-top: -44%;
	margin-left: 17%;
	display: none;
}

.Customerservicehead{
	width: 100%;
	height: 50px;
	border-radius: 20px 20px 0 0;
	background-color: #02a7f0;
}

.minus{
	width: 20px;
	height: 3px;
	background-color: #FFFFFF;
	float: right;
	margin-top: 8%;
	margin-right: 10%;
}

.Central{
	height: 350px;
	background-color: #f0f1f2;
}

.Bottom-db{
	background-color: #FFFFFF;
}

.Bottom-db img{
	margin-left: 4%;
	margin-bottom: 3%;
	margin-top: 2%;
}

.an{
	height: 50px;
}

.an p{
	width: 200px;
	float: right;
}

.an input{
	width: 70px;
	height: 25px;
	color: #FFFFFF;
	margin-left: 10%;
	border-radius:5px ;
	border: none;
}

.an input:nth-child(1){
	background-color: #babecc;
}

.an input:nth-child(2){
	background-color: #02a7f0;
}

#Chatlist{
	height: 350px;
	overflow:auto;
	overflow-y:auto;
}

.Leftfloat{
	float: left;
}

.Rightfloat{
	float: right;
}

.Leftflank{
	height: 25px;
}

.Rightside{
	height: 25px;
}

/*产品与服务的客服联系*/

</style>