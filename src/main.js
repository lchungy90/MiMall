import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import App from './App.vue'
// import env from './env'
// import为预编译加载，在编译时就被加载

// mock开关
const mock = false;
if(mock){
  // require为执行时加载
  // 如果在预编译加载则永远走mock
  require('./mock/api');
}

// 根据前端的跨域方式做调整 - 代理
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;

// 根据前端的跨域方式做调整 - cors jsonp
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;

// 拦截器
// 对接口错误进行处理
axios.interceptors.response.use(function(response){
  let res = response.data;
  let path = location.hash;
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    if(path !='#/index'){
      window.location.href = '/#/login';
      // router.push('login');
    }
  }else{
    alert(res.msg);
    return Promise.reject(res);
  }
});

Vue.prototype.axios = axios;
Vue.use(VueCookie);
Vue.use(VueLazyload,{
  loading:'/imgs/loading-svg/loading-bars.svg'
});
Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
