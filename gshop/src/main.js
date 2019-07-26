/*入口文件js*/
import Vue from 'vue'
import App from './App.vue'
//引入路由器
import router from './router'
//引入store
import store from './store'

new Vue({
  el:'#app',
   render:h => h(App),

  // render:function(createElement){   //与上面写法一个意思，createElement函数可简写成 h
  //   return createElement(App)
  // },

  //VUE一般使用template来创建HTML，然后在有的时候，我们需要使用javascript来创建html，这时候我们需要使用render函数。
  // render:function(h){   //与上面写法一个意思，createElement函数可简写成 h
  //   return h(App)
  // },

//  配置上路由器
  router,   //使用vue-router
  store    //使用上vuex
});
