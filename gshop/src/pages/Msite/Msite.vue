<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
      <span class="header_search" slot="search">
        <i class="iconfont iconsousuo"></i>
      </span>
      <span class="header_login" slot="login">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <!-- <div class="swiper-slide" v-for='(categorys,index) in categorysArr' :key='index'>
            <a href="javascript:" class="link_to_food" v-for='(category,index) in categorys' :key='index'>
              <div class="food_container">
                <img :src="baseImageUrl+ category.image_url">
              </div>
              <span>{{category.title}}</span>
            </a>


            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg">
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/3.jpg">
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/4.jpg">
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/5.jpg">
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/6.jpg">
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/7.jpg">
              </div>
              <span>预订早餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/8.jpg">
              </div>
              <span>土豪推荐</span>
            </a>
          </div> -->
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/9.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/10.jpg">
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/11.jpg">
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/12.jpg">
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/13.jpg">
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/14.jpg">
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg">
              </div>
              <span>预订早餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg">
              </div>
              <span>土豪推荐</span>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/9.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/10.jpg">
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/11.jpg">
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/12.jpg">
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/13.jpg">
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/14.jpg">
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg">
              </div>
              <span>预订早餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg">
              </div>
              <span>土豪推荐</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家,这里是引用的组件-->
    <ShopList></ShopList>
  </section>
</template>

<script>
//引入vuex
import {mapState} from 'vuex'
//引入头部组件
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
//引入商家列表部分组件
import ShopList from '../../components/ShopList/ShopList.vue'
//引入swiper轮播插件
import Swiper from 'swiper'
//引入swiper的css
import 'swiper/dist/css/swiper.min.css'
// import { mapState } from 'vuex';


export default {
  data(){
    return {
      baseImageUrl:'https://fuss10.elemecdn.com'
    }
  },

  //模板已经渲染完成的钩子函数
  mounted(){
    //触发actions.js请求
    this.$store.dispatch('getCategorys');
    this.$store.dispatch('getShops');
  },

  //计算属性
  computed:{
    ...mapState(['address','categorys']),   //这是读取state.js数据

    //根据categorys一维数组生成一个二维数组,小数组中的元素个数最大是8个
    categorysArr(){
      const {categorys} = this
      //准备一个空的二维数组
      const arr = [];   //大数组
      let minArr = [];   //小数组,最大长度为8个
      //遍历ccategorys
      categorys.forEach(element => {
        //判断minArr数组是否等于8个,如果满于8个了就重新创建一个新的空数组
        if(minArr.length===8){
          minArr = [];    //如果等于8个的话就重置小数组minArr
        }

        //如果minArr是空的，将小数组保存到大数组中
        if(minArr.length===0){
          arr.push(minArr);
        }

        minArr.push(element);
      });

      return arr;    //返回数组
    }
  },

  //监听属性
  watch:{
    categorys(value){
      //界面更新就立即创建swiper对象
      this.$nextTick(()=>{    //就是一旦完成界面更新，就立即掉哟ing此回调函数
        //创建一个swiper实例对象来实现轮播
        new Swiper('.swiper-container',{
          //direction: 'vertical', // 垂直切换选项
          loop: true, // 循环轮播模式
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        })
      });
    }
  },

  //注册标签
  components:{
    HeaderTop,     //注册头部标签
    ShopList,      //注册商家列表标签
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  //首页部分
  .msite
    width 100%
    //轮播导航部分
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    //首页附近商家部分
    /*.msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
      .shop_container
        margin-bottom 50px
        .shop_list
          .shop_li
            bottom-border-1px(#f1f1f1)
            width 100%
            >a
              clearFix()
              display block
              box-sizing border-box
              padding 15px 8px
              width 100%
              .shop_left
                float left
                box-sizing border-box
                width 23%
                height 75px
                padding-right 10px
                .shop_img
                  display block
                  width 100%
                  height 100%
              .shop_right
                float right
                width 77%
                .shop_detail_header
                  clearFix()
                  width 100%
                  .shop_title
                    float left
                    width 184px
                    color #333
                    font-size 14px
                    line-height 16px
                    font-weight 700
                    &::before
                      content '品牌'
                      display inline-block
                      font-size 11px
                      line-height 11px
                      color #333
                      background-color #ffd930
                      padding 2px 2px
                      border-radius 2px
                      margin-right 5px
                  .shop_detail_ul
                    float right
                    margin-top 3px
                    .supports
                      float left
                      font-size 10px
                      color #999
                      border 1px solid #f1f1f1
                      padding 0 2px
                      border-radius 2px
                .shop_rating_order
                  clearFix()
                  width 100%
                  margin-top 18px
                  margin-bottom 8px
                  .shop_rating_order_left
                    float left
                    color #ff9a0d
                    .star //2x图 3x图
                      float left
                      font-size 0
                      .star-item
                        display inline-block
                        background-repeat no-repeat
                      &.star-48
                        .star-item
                          width 20px
                          height 20px
                          margin-right 22px
                          background-size 20px 20px
                          &:last-child
                            margin-right: 0
                          &.on
                            bg-image('./images/stars/star48_on')
                          &.half
                            bg-image('./images/stars/star48_half')
                          &.off
                            bg-image('./images/stars/star48_off')
                      &.star-36
                        .star-item
                          width 15px
                          height 15px
                          margin-right 6px
                          background-size 15px 15px
                          &:last-child
                            margin-right 0
                          &.on
                            bg-image('./images/stars/star36_on')
                          &.half
                            bg-image('./images/stars/star36_half')
                          &.off
                            bg-image('./images/stars/star36_off')
                      &.star-24
                        .star-item
                          width 10px
                          height 10px
                          margin-right 3px
                          background-size 10px 10px
                          &:last-child
                            margin-right 0
                          &.on
                            bg-image('./images/stars/star24_on')
                          &.half
                            bg-image('./images/stars/star24_half')
                          &.off
                            bg-image('./images/stars/star24_off')
                    .rating_section
                      float left
                      font-size 10px
                      color #ff6000
                      margin-left 4px
                    .order_section
                      float left
                      font-size 10px
                      color #666
                      transform scale(.8)
                  .shop_rating_order_right
                    float right
                    font-size 0
                    .delivery_style
                      transform-origin 35px 0
                      transform scale(.7)
                      display inline-block
                      font-size 12px
                      padding 1px
                      border-radius 2px
                    .delivery_left
                      color #fff
                      margin-right -10px
                      background-color #02a774
                      border 1px solid #02a774
                    .delivery_right
                      color #02a774
                      border 1px solid #02a774
                .shop_distance
                  clearFix()
                  width 100%
                  font-size 12px
                  .shop_delivery_msg
                    float left
                    transform-origin 0
                    transform scale(.9)
                    color #666
                  .segmentation
                    color #ccc*/
</style>
