<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <!--javascript;防止跳转-->
          <a href="javascript;">小米商城</a>
          <a href="javascript;">MUI</a>
          <a href="javascript;">云服务</a>
          <a href="javascript;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{ username }}</a>
          <a href="javascript:;" @click="login" v-else>登录</a>
          <a href="javascript:;" v-if="username">我的订单</a>
          <a href="javascript:;" v-else>注册</a>
          <a href="javascript:;" class="my-cart" @click="goToCart"><span class="icon-cart"></span>购物车</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a :href="'/#/product/'+item.id" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{ item.subtitle }}</div>
                    <!--使用过滤器-->
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a :href="'/#/product/'+item.id" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{ item.subtitle }}</div>
                    <!--使用过滤器-->
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a :href="'/#/product/'+item.id" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{ item.subtitle }}</div>
                    <!--使用过滤器-->
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'nav-header',
    data(){
      return {
        username:'',
        phoneList:[]
      }
    },
    // 过滤器 格式转换
    filters:{
      currency(val){
        if(!val) return '0.00';
        return '￥' + val.toFixed(2) + '元';
      }
    },
    mounted(){
      this.getProductList();
    },
    methods:{
      login(){
        this.$router.push('/login');
      },
      getProductList(){
        this.axios.get('/products',{
          params:{
            categoryId:'100012',
            // pageSize:6
          }
        }).then((res)=>{
          if(res.list.length > 6){
            this.phoneList = res.list.slice(0,6);
          }else{
            this.phoneList = res.list;
          }
        })
      },
      goToCart(){
        this.$router.push('/cart');
      }
    }
  }
</script>

<style lang="scss">
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';

  .header{
    .nav-topbar{
      height: 39px;
      line-height: 39px;
      background-color: $colorB;
      color: #B0B0B0;
      .container{
        // mixin调用
        @include flex();
        a{
          display: inline-block;
          color: #B0B0B0;
          margin-right: 17px;
        }
        .my-cart{
          width: 110px;
          background-color: $colorA;
          text-align: center;
          color: $colorG;
          .icon-cart{
            @include bgImg(16px,12px,'../../public/imgs/icon-cart-checked.png');
            margin-right: 4px;
          }
        }
      }
    }
    .nav-header{
      .container{
        position: relative;
        height: 112px;
        @include flex();
        .header-logo{
          display: inline-block;
          width: 55px;
          height: 55px;
          background-color: $colorA;
          a{
            display: inline-block;
            width: 110px;
            height: 55px;
            &:before{
              content: '';
              @include bgImg(55px,55px,'../../public/imgs/mi-logo.png',55px);
              transition: margin-left .2s;
            }
            &:after{
              content: '';
              @include bgImg(55px,55px,'../../public/imgs/mi-home.png',55px);
            }
            &:hover:before{
              margin-left: -55px;
              transition: margin-left .2s;
            }
          }
        }
        .header-menu{
          display: inline-block;
          width: 643px;
          padding-left: 209px;
          .item-menu{
            display: inline-block;
            color: $colorB;
            font-weight: bold;
            font-size: 16px;
            line-height: 112px;
            margin-right: 20px;
            span{
              cursor: pointer;
            }
            &:hover{
              color: $colorA;
              .children{
                height: 220px;
                opacity: 1;
              }
            }
            .children{
              position: absolute;
              top: 112px;
              left: 0;
              width: 1226px;
              height: 0;
              opacity: 0;
              overflow: hidden;
              border-top: 1px solid $colorH;
              box-shadow: 0px 7px 6px 0px rgba(0,0,0,0.11);
              transition: all .5s;
              background-color: $colorG;
              z-index: 10;
              .product{
                position: relative;
                float: left;
                width: 16.6%;
                height: 220px;
                font-size: 12px;
                line-height: 12px;
                text-align: center;
                &:before{
                  content: '';
                  position: absolute;
                  top: 28px;
                  right: 0;
                  border-left: 1px solid $colorF;
                  height: 100px;
                  width: 1px;
                }
                &:last-child::before{
                  display: none;
                }
                img{
                  width: auto;
                  height: 111px;
                  margin-top: 20px;
                }
                .pro-img{
                  height: 137px;
                }
                a{
                  display: inline-block;
                }
                .pro-name{
                  font-weight: bold;
                  margin-top: 19px;
                  margin-bottom: 8px;
                  color: $colorB;
                }
                .pro-price{
                  color: $colorA;
                }
              }
            }
          }
        }
        .header-search{
          width: 319px;
          .wrapper{
            height: 50px;
            border: 1px solid #E0E0E0;
            display: flex;
            align-items: center;
            input{
              border: none;
              box-sizing: border-box;
              border-right: 1px solid #E0E0E0;
              width: 264px;
              height: 50px;
              padding-left: 14px;
            }
            a{
              @include bgImg(18px,18px,'../../public/imgs/icon-search.png');
              margin-left: 17px;
            }
          }
        }
      }
    }

  }
</style>