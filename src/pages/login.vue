<template>
  <div class="login">
    <div class="container">
      <a href="/#/index"><img src="/imgs/login-logo.png" alt=""></a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="checked">帐号登录</span><span class="sep-line">|</span><span>扫码登录</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入帐号" v-model="username">
          </div>
          <div class="input">
            <input type="password" placeholder="请输入密码" v-model="password">
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登录</a>
          </div>
          <div class="tips">
            <div class="sms" @click="register">手机短信登录/注册</div>
            <div class="reg">立即注册<span>|</span>忘记密码？</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
        <a href="https://github.com/lchungy90" target="_blank">lchungy90 GitHub</a><span>|</span>
        <a href="https://github.com/lchungy90/MiMall" target="_blank">Vue2 Project</a><span>|</span>
        <a href="javascript:;">Xiaomi Shop</a>
      </div>
      <p class="copyright">Copyright ©2019 mi.futurefe.com All Rights Reserved.</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data(){
    return {
      username:'',
      password:'',
      userId:'',
      res:{}
    }
  },
  methods:{
    login(){
      let {username,password} = this;
      this.axios.post('/user/login',{
        username,
        password
      }).then((res)=>{
        // if(res.id){
        //   this.$cookie.set('userId',res.id,{expires:'1M'});
        //   //todo 保存用户信息
        //   this.$router.push('/index');
        // }
        this.$cookie.set('userId',res.id,{expires:'1M'});
        //todo 保存用户信息
        this.$router.push('/index');
      })
    },
    register(){
      let {username,password} = this;
      this.axios.post('/user/register',{
        username:'bright',
        password:'1111',
        email:'bright@163.com'
      }).then(()=>{
        alert('注册成功');
      })
    }
  }
}
</script>
<style lang="scss">
@import '../assets/scss/config.scss';
.login{
  &>.container{
    height:113px;
    img{
      width:auto;
      height:100%;
    }
  }
  .wrapper{
    background:url('../../public/imgs/login-bg.jpg') no-repeat center;
    .container{
      height:576px;
      .login-form{
        box-sizing: border-box;
        padding-left: 31px;
        padding-right: 31px;
        width:410px;
        height:510px;
        background-color:$colorG;
        position:absolute;
        bottom:29px;
        right:0;
        h3{
          line-height:23px;
          font-size:$fontE;
          text-align:center;
          margin:40px auto 49px;
          .checked{
            color:$colorA;
          }
          .sep-line{
            margin:0 32px;
          }
        }
        .input{
          display:inline-block;
          width:348px;
          height:50px;
          border:1px solid $colorH;
          margin-bottom:20px;
          input{
            width: 100%;
            height: 100%;
            border: none;
            padding: 18px;
          }
        }
        .btn{
          width:100%;
          line-height:50px;
          margin-top:10px;
          font-size:16px;
        }
        .tips{
          margin-top:14px;
          display:flex;
          justify-content:space-between;
          font-size:$fontJ;
          cursor:pointer;
          .sms{
            color:$colorA;
          }
          .reg{
            color:$colorD;
            span{
              margin:0 7px;
            }
          }
        }
      }
    }
  }
  .footer{
    height:calc(100vh - 689px);
    padding-top:60px;
    color:$colorD;
    font-size:$fontI;
    text-align:center;
    background-color: $colorG;
    .footer-link{
      a{
        color:$colorD;
        display:inline-block;
      }
      span{
        margin:0 10px;
      }
    }
    .copyright{
      margin-top:13px;
    }
  }
}
</style>