import Vue from 'vue'
import router from './router'
import axios from 'axios'
import App from './App.vue'
import env from './env'

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
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    // window.location.href = '/#/login';
    router.push('login');
  }else{
    alert(res.message);
  }
});

Vue.prototype.axios = axios;
Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
