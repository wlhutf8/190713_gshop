<template>
    <div id="app">
      <!-- <router-view> 是用来渲染通过路由映射过来的组件，当路径更改时， 中的内容也会发生更改 -->
        <!-- 路由匹配到的组件将显示在这里 -->
      <router-view></router-view>

      <!--这里要判断是否要显示底部四个路由,$route表示当前路由,当点击路由时$route是会变换的,$route.meta.showFooter就能获取当前路由-->
      <!--    这里的v-show可换成v-if  -->
      <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
    </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  import {reqFoodCategorys} from './api'    //引入请求接口函数

  export default {
    async mounted(){
      const result = await reqFoodCategorys()
      console.log(result);
    },
    //注册标签
    components:{
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width:100%;
    height:100%;
    background #f5f5f5;
</style>
