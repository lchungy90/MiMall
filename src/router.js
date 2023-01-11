import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/home';
import Index from './pages/home/index';
import Product from './pages/home/product';
import Detail from './pages/home/detail';
import Cart from './pages/cart';
import Order from './pages/order';
import OrderList from './pages/order/orderList';
import OrderConfirm from './pages/order/orderConfirm';
import OrderPay from './pages/order/orderPay';
import Alipay from './pages/order/alipay';
import Login from './pages/login';


Vue.use(Router);

export default new Router({
  routes:[
    {
      // root route
      path:'/',
      name:'home',
      component: Home,
      redirect:'/index',
      children:[
        //child route
        {
          path:'/index',
          name: 'index',
          component:Index
        },{
          path:'/product/:id', //dynamic route
          name: 'product',
          component:Product
        },{
          path:'/detail/:id',
          name: 'detail',
          component:Detail
        }
      ]
    },{
      path:'/cart',
      name:'cart',
      component: Cart
    },{
      path:'/order',
      name:'order',
      component: Order,
      children:[
        {
          path:'list',
          name:'order-list',
          component:OrderList
        },{
          path:'confirm',
          name:'order-confirm',
          component:OrderConfirm
        },{
          path:'pay',
          name:'order-pay',
          component:OrderPay
        },{
          path:'alipay',
          name:'alipay',
          component:Alipay
        }
      ]
    },{
      path:'/login',
      name:'login',
      component: Login
    }
  ]
});