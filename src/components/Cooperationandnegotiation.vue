<template>
	<div id="Cooperationandnegotiation">
		<Topnavigation></Topnavigation>
		<!--合作洽谈主体框架-->
		<div class="ZhuTi">
			<!--合作洽谈居中主体框架-->
			<div class="Centerframe">
				<!--合作洽谈居中主体内容-->
				<div class="row">
					<div class="col-lg-12 a">
						<div class="row">
							<div class="col-lg-12 Carouselfigure">
								<img :src="imglbdt" alt="" width="100%" height="288px" />
								<div class="Leftarrow" @click="Return"><span class="glyphicon glyphicon-menu-left"></span></div>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-12" style="padding-top:10%;">
								<div class="row">
									<div class="col-lg-6">
										<img class="Cooperationnegotiationchart" :src="imghzpt" alt="" />
									</div>
									<div class="col-lg-6">
										<p class="briefintroduction">
											{{hzqt}}
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-12" style="padding-top: 5%;">
								<div class="row">
									<div class="col-lg-6">
										<ul class="addressmessage">
											<li>{{lxfs[0]}}</li>
											<li>{{lxfs[1]}}</li>
											<li>{{lxfs[2]}}</li>
											<li>{{lxfs[3]}}</li>
											<li>{{lxfs[4]}}</li>
										</ul>
									</div>
									<div class="col-lg-6">
										<div id="allmap" class="Companymap">
											
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-12 Customerserviceicon">
								<img @click="Customerserviceclick(1)" :src="imglxkf" alt="" />
							</div>
						</div>
					</div>
				</div>
				<!--合作洽谈居中主体内容-->
				
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
								<textarea id="Content" style="resize:none; overflow:hidden; overflow :auto ; border: none;" name="textarea" cols="54" rows="3"></textarea>
							</p>
						</form>
					</div>
					<div class="an"><p><input @click="ClickClose" type="button" value="关闭"/><input @click="Sendinformation" type="button" value="发送"/></p></div>
				</div>
			</div>
			<!--产品与服务的客服联系-->
				
			</div>
			<!--合作洽谈居中主体框架-->
		</div>
		<!--合作洽谈主体框架-->
		<Bottom></Bottom>
	</div>
</template>

<script>
	import Topnavigation from './Topnavigation.vue'
	import Bottom from './Bottom.vue'
	export default {
		name: 'Cooperationandnegotiation',
		data() {
			return {
				hzqt:"调研服务简介调研服务简介调研服务简介调研服务简介调研服务简介调研服务简介调研服务简介调研服务简介调研服务简介调研服务简介调研服务简介调研服务简介调研服务简介调研服务简介调研服务简介调研服务简介",
				lxfs:["地址：xxxx","邮箱：xxxx","传真：xxxx","电话：xxxx","网址：xxxx"],
				imglbdt: require('../assets/images/hzptdt.png'),
				imghzpt:require('../assets/images/hzpt.png'),
				imglxkf:require('../assets/images/lxkf.gif'),
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
			Return:function(){  //点击箭头返回来源页的方法
				this.$router.go(-1);  //返回上一层
			},
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
		str='<li class="Rightside"><span class="Rightfloat">'+ vals+'</span></li>';
		$('#Chatlist').append($(str));
		$('.Rightside').css({"height":"25px","display":"inherit"});
		$('.Rightfloat').css("float","right");
//		$('.Rightside').css({"height":"25px","display":"inherit"});
//		$('.Rightfloat').css({"float":"right","margin-right":"0px","padding":"5px","position":"relative","background":"#f8ac09","border-radius":"5px"});
//		var addendStr="<style>.Rightfloat::after{content: '';width: 0;height: 0;position: absolute;top: 5px;right: -16px;border: solid 8px;border-color: transparent transparent transparent #f8ac09;font-size: 0; }</style>";
//      $(".Rightfloat").append(addendStr);
        $('#Content').val('');  //发送完数据后清空输入框
  	},
  	 ready: function(x, y) {  //地图显示的方法
        var map = new BMap.Map('allmap');//显示标签
        var point = new BMap.Point(x, y);
        
        map.addControl(new BMap.MapTypeControl());
        map.enableScrollWheelZoom(true);//启用滚轮放大缩小，默认禁用
        map.enableContinuousZoom(); //启用地图惯性拖拽，默认禁用
        map.enableDoubleClickZoom(true);
        var marker = new BMap.Marker(point);
      
        
        map.addOverlay(marker);
        map.centerAndZoom(point, 20);// 初始化地图,设置城市和地图级别。
        map.centerAndZoom(point, 18);// 初始化地图,设置城市和地图级别。
    }
	},
	 mounted(){
      this.ready(113.13055,22.863112); //公司地图的经纬度
  }	
	}
</script>

<style scoped>
	li {
		display: inherit;
	}
	
	ul {
		padding-left: 0;
	}
	
	.a {
		background-color: #F5F5F5;
	}
	
	.ss {
		border: 1px solid seagreen;
	}
	/*合作洽谈主体框架*/
	
	.ZhuTi {
		width: 100%;
		height: 100%;
	}
	/*合作洽谈主体框架*/
	/*合作洽谈居中主体框架*/
	
	.Centerframe {
		width: 50%;
		margin: 0 auto;
	}
	/*合作洽谈居中主体框架*/
	
	/*合作洽谈居中主体内容*/
	
	.Carouselfigure {
		padding-left: 0;
		padding-right: 0;
	}
	
	.Leftarrow{
		width: 50px;
		height: 100px;
		background-color: silver;
		position: absolute;
		margin-top: -20%;
		padding-top: 3%;
		padding-left: 1%;
		opacity: 0.7;
	}
	
	.Leftarrow span{
		font-size: 40px;
		color: #000000;
	}
	
	.Cooperationnegotiationchart{
		margin-left: 10%;
	}

	.briefintroduction{
		width: 60%;
		margin-top: 5%;
	}
	
	.addressmessage{
		width: 50%;
		margin: 10% auto;
	}
	
	.addressmessage li{
		margin-top: 15px;
		margin-bottom: 15px;
	}
	
	.Companymap{
		width: 390px;
		height: 283px;
		background-color: #F7ECB5;
	}
	
	.Customerserviceicon{
		height: 120px;
		padding-top: 2%;
	}
	
	.Customerserviceicon img{
		float: right;
	}
	
	/*合作洽谈居中主体内容*/
	
/*产品与服务的客服联系*/

.Customerservice{
	width: 400px;
	position: absolute;
	z-index: 1;
	margin-top: -38.5%;
	margin-left: 15%;
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

/*滚动条样式*/

#Chatlist{
	height: 350px;
	overflow:auto;
	overflow-y:auto;
	padding-right: 5%;
	padding-left: 5%;
}

/*滚动条样式*/

.Leftfloat{
	float: left;
	
	/*padding: 5px;  
	position: relative;    
	margin: 0 auto;    
	background: #f8ac09;    
	border-radius: 5px; */
}

/*.Leftfloat::after{
	content: '';    
	width: 0;    
	height: 0;    
	position: absolute;    
	top: 5px;    
	left: -16px;    
	border: solid 8px;    
	border-color: transparent #f8ac09 transparent transparent ;    
	font-size: 0; 
}*/

.Rightfloat{
	float: right;
	
	/*padding: 5px;  
	position: relative;    
	margin: 0 auto ;    
	background: #f8ac09;    
	border-radius: 5px; */
}

/*.Rightfloat::after{
	content: '';    
	width: 0;    
	height: 0;    
	position: absolute;    
	top: 5px;    
	right: -16px;    
	border: solid 8px;    
	border-color: transparent transparent transparent #f8ac09;    
	font-size: 0; 
}*/



.Leftflank{
	height: 25px;
}

.Rightside{
	height: 25px;
}

/*产品与服务的客服联系*/

	
</style>