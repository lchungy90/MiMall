<template>
 <div class="service">
  <div class="container">
    <ul>
      <li><span class="icon-setting"></span>预约维修服务</li>
      <li><span class="icon-7days"></span>7天无理由退货</li>
      <li><span class="icon-15days"></span>15天免费换货</li>
      <li><span class="icon-post"></span>满150元包邮</li>
    </ul>
  </div>
 </div>
</template>

<script>
  export default{
    name: 'service-bar'

  }
</script>

<style lang="scss">
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';
  .service{
    padding: 33px 0;
    color: $colorC;
    font-size: $fontI;
    background-color: $colorG;
    li{
      display: inline-block;
      width: 24.9%; /*避免浏览器差异导致布局混乱 25%->24.9%*/
      border-right: 1px solid $colorH;
      text-align: center;
      &:last-child{
        border-right: none;
      }
      span{
        vertical-align: middle;
        margin-right: 8px;
      }
      .icon-setting{
        @include bgImg(20px,20px,'../../public/imgs/icon-setting.png');
      }
      .icon-7days{
        @include bgImg(20px,20px,'../../public/imgs/icon-7day.png');
      }
      .icon-15days{
        @include bgImg(20px,20px,'../../public/imgs/icon-15day.png');
      }
      .icon-post{
        @include bgImg(20px,20px,'../../public/imgs/icon-post.png');
      }
    }
  }
</style>