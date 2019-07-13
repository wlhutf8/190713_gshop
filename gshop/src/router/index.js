/*路由器对象模块*/
//引入vue模块
import Vue from 'vue'
//引入下载路由的插件
import VueRouter from 'vue-router'
//引入四个路由组件
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'


//声明使用插件(就是使用路由)
Vue.use(VueRouter)
//然后创建路由实例并写配置项
export default new VueRouter({     //VueRouter类型为构造函数
  //配置所有路由
  routes:[
    {    //配置路由时还有一个属性meta，这是一个对象元数据
      path:'/msite',
      component:Msite,
      meta:{
        //添加一个状态属性，意思就是这个路由的页面要显示
        showFooter:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        //添加一个状态属性
        showFooter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        //添加一个状态属性
        showFooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        //添加一个状态属性
        showFooter:true
      }
    },
    {      //将路由组件映射成路由
      path:'/login',
      component:Login,
      //这里的meta可省略，因为登陆页面（也就是登陆路由不用显示底部路由的）
      meta:{
        //添加一个状态属性
        showFooter:false
      }
    },
    {     //作为根目录显示
      path:'/',
      redirect:'/msite'
    },
  ]
})

