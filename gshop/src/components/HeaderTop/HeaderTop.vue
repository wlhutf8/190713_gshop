<template>
  <header class="header">
    <!--插槽占位，用name属性来识别,slot是vue中的一个API，是传标签作用-->
    <slot name="search"></slot>
    <span class="header_title">
      <span class="header_title_text ellipsis">{{title}}</span>
    </span>
    <slot name="login"></slot>
  </header>
</template>

<script>
    export default {
        props:{    //使用props传值，props是传数据作用
          title:String      //title为字符串类型
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  //header部分
  .header
    background-color #02a774
    position fixed
    z-index 100
    left 0
    top 0
    width:100%
    height 45px

    .header_search
      position absolute
      left 15px
      top 50%
      transform translateY(-50%)
      width 10%
      height 50%

      .iconsousuo
        font-size 25px
        color #fff

    .header_title
      position absolute
      top 50%
      left 50%
      transform translate(-50%,-50%)
      width 50%
      color #fff
      text-align center

      .header_title_text
        font-size 20px
        color #fff
        display block

    .header_login
      font-size 14px
      color #fff
      position absolute
      right 15px
      top 50%
      transform translateY(-50%)

      .header_login_text
        color #fff

</style>
