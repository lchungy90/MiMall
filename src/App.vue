<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from './storage';

export default {
  name: 'App',
  components: {
  },
  data(){
    return{
      res:{}
    }
  },
  mounted(){
    // 1.本地加载请求静态json文件的形式
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //   this.res = res;
    // });
    // 2.通过easy-mock平台实现数据mock 需要修改BASE_URL
    // this.axios.get('/user/login').then((res)=>{
    //   this.res = res;
    // });
    // 3.本地集成mockjs实现数据mock 但它在代码层拦截并返回数据 实际上是不发出请求的
    this.axios.get('/user/login').then((res)=>{
      this.res = res;
    });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
