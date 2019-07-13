/*入口文件js*/
import Vue from 'vue'
import App from './App.vue'
//引入路由器
import router from './router'

new Vue({
  el:'#app',
  // render:h => h(App),
  // render:function(createElement){   //与上面写法一个意思，createElement函数可简写成 h
  //   return createElement(App)
  // },
  render:function(h){   //与上面写法一个意思，createElement函数可简写成 h
    return h(App)
  },

//  配置上路由器
  router
});
