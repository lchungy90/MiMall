<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="footer-logo">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://github.com/lchungy90" target="_blank">lchungy90 GitHub</a><span>|</span>
      <a href="https://github.com/lchungy90/MiMall" target="_blank">Vue2 Project</a><span>|</span>
      <a href="javascript:;">Xiaomi Shop</a>
    </div>
    <div class="copyright">Copyright ©2022 <span class="domain">mi.futurefe.com</span> All Rights Reserved.</div>
  </div>
</template>

<script>
  export default{
    name: 'nav-footer'

  }
</script>

<style lang="scss">
@import '../assets/scss/config.scss';
  .footer{
    height: 234px;
    border-top: 4px solid $colorA;
    background-color: $colorB;
    color: $colorD;
    font-size: $fontI;
    text-align: center;
    .footer-logo{
      margin-top: 46px;
      margin-bottom: 31px;
      img{
        width: 53px;
        height: 36px;
        margin-bottom: 13px;
      }
    }
    .footer-link{
      margin-bottom: 13px;
      a{
        color: $colorD;
        display: inline-block;
        &:hover{
          color: $colorA;
        }
      }
      span{
        margin: 0 10px;
      }
    }
    .copyright{
      .domain{
        color: $colorA;
      }
    }
  }
</style>