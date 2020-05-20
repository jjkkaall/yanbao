// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './assets/js/jquery-1.12.4.js'
import './assets/css/bootstrap.css'
import './assets/js/bootstrap.js'
import Database from './components/Database'
import OntheStudyofThousandWords from './components/OntheStudyofThousandWords'
import Productsandservices from './components/Productsandservices'
import Cooperationandnegotiation from './components/Cooperationandnegotiation'

//引入路由的类
import VueRouter from 'vue-router'
//引入http的模板
import VueResource from 'vue-resource'


Vue.config.productionTip = false
//使用路由
Vue.use(VueRouter)
//使用http
Vue.use(VueResource)
//配置路由
const router = new VueRouter({
  routes:[
			 {path:"/",component:OntheStudyofThousandWords},
			 {path:"/Database",component:Database},
			 {path:"/Productsandservices",component:Productsandservices},
			 {path:"/Cooperationandnegotiation",component:Cooperationandnegotiation}
  ],
  mode:"history"
})


/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
