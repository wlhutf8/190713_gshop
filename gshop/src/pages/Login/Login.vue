<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">硅谷外卖</h2>
        <div class="login_header_title">
          <!-- 这里声明了on类名就是true，然后点击事件 -->
          <a href="javascript:;" :class='{on:loginWay}' @click="loginWay=true">短信登录</a>
          <a href="javascript:;" :class='{on:!loginWay}'  @click="loginWay=false">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <!-- 这里是提交表单所以要阻止所以下面所有提交按钮都需加上阻止默认行为 -->
        <form @submit.prevent="login">
          <!-- 这是短信登陆部分 -->
          <div :class='{on:loginWay}'>
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <!-- 当right_phone类名为,@click.prevent中的 prevent是阻止默认行为-->
              <button :disabled="!rightPhone" class="get_verification" :class='{right_phone:rightPhone}' @click.prevent='getCode'>
                {{computedTime>0?`已发送(${computedTime}s)`:'获取验证码'}}
              </button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <!-- 这是密码登陆部分 -->
          <div :class='{on:!loginWay}'>
            <section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
              </section>
              <section class="login_verification">
                <!-- 密码可见 -->
                <input type="text" maxlength="8" placeholder="密码" v-if='showPwd' v-model="pwd">
                <!-- 密码不可见 -->
                <input type="password" maxlength="8" placeholder="密码" v-else v-model="pwd">
                <!-- 密码显示隐藏切换 -->
                <div class="switch_button off" :class="showPwd?'on':'off'" @click='showPwd=!showPwd'>
                  <div class="switch_circle" :class="{right:showPwd}"></div>
                  <!-- 判断文本的显示与隐藏 -->
                  <span class="switch_text">{{showPwd?'abc':'...'}}</span>
                </div>
                <!-- 密码显示隐藏切换的另一种方法 -->
                <!-- <div class="switch_button off" @click='show'>
                  <div class="switch_circle"></div>
                  <span class="switch_text">...</span>
                </div> -->
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                <!-- 获取一次性验证码 -->
                <img class="get_verification" src="http://localhost:27017/captcha" alt="captcha"
                @click='getCaptcha' ref='captcha'>
                <!-- <img class="get_verification" src="./images/captcha.svg" alt="captcha"> -->
              </section>
            </section>
          </div>
          <button class="login_submit">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <!--   返回箭头   -->
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont iconjiantou2"></i>
      </a>
    </div>
    <!-- 这里的closeTip事件是 AlertTip.vue文件中发过来的自定义事件-->
    <AlertTip :alertText='alertText' v-show='showAlert' @closeTip='closeTip'></AlertTip>
  </section>
</template>

<script>
  import AlertTip from '../../components/AlertTip/AlertTip.vue'
  import {reqPwdLogin,reqSendCode,reqSmsLogin} from '../../api'
    export default {
      data(){
        return{
          loginWay:true,    //true代表短信登陆状态，false代表密码登陆状态
          phone:'',     //初始化一个电话号码
          computedTime:0,    //初始化计时时间
          showPwd:false,       //初始化是否显示密码变量
          pwd:'',    //初始化密码
          code:'',   //短信验证码
          name: '',    //用户名
          captcha:'',    //图形验证码
          alertText:'',    //提示文本
          showAlert:false,    //是否显示提示框
        }
      },

      //计算属性
      computed:{
        rightPhone(){    //这是正确手机号
          return /^1\d{10}$/.test(this.phone);    //这里判断用户输入的电话号码是否符合正则，如果符合则赋值给上面right_phone类名
        }
      },
      methods:{
        //异步获取短信验证码
        async getCode(){
          //如果当前没有计时情况下才可以再次点击计时
          if(!this.computedTime){
            //启动倒计时
            this.computedTime = 30;
            this.intervalId = setInterval(()=>{
              this.computedTime--;
              if(this.computedTime<=0){
                //停止计时
                clearInterval(this.intervalId)
              }
            },1000);

            //发送ajax请求（向指定的手机号码发送验证码）
            const result=await reqSendCode(this.phone);
            if(result.code===1){
              //显示提示
              this.showAlert(result.msg);
              //停止倒计时
              if(this.computedTime){
                this.computedTime = 0;
                clearInterval(this.intervalId)    //清除倒计时
                this.intervalId = undefined;    //可写可不写
              }
            }
          }    
        },

        //警告弹窗方法
        showFunt(alertText){
          this.showAlert = true;
          this.alertText = alertText;
        },

        //异步密码登陆
        async login(){
          let result;
          //前台表单的验证
          if(this.loginWay){     //当loginWay为true时就是短信登陆
            const {rightPhone,phone,code} = this;
            if(!this.rightPhone){
              //手机号码不正确
              this.showFunt('手机号码不正确');     //调用showFunt函数并传参
              return;    //如果不正确就不再往下执行
            }else if(!/^\d{6}$/.test(code)){
              //验证码输入有误
              this.showFunt('验证码输入有误'); 
              return
            }

            //发送ajax请求短信登陆
            result = await reqSmsLogin(phone,code);
            // if(result.code===0){     //这是登录成功的操作
            //   const user = result.data;
            // }else{       //这是登录失败操作
            //   const msg = result.msg;
            // }

          }else{     //当loginWay为false时就是密码登陆
            const {name,pwd,captcha} = this;
            if(!this.name){
              //用户名输入不正确
              this.showFunt('用户名输入不正确');
              return
            }else if(!this.pwd){
              //密码输入有误
              this.showFunt('密码输入有误');
              return
            }else if(!this.captcha){
              //验证码输入有误
              this.showFunt('验证码输入有误');
              return
            }

            //发送ajax请求短信登陆
            result = await reqPwdLogin({name,pwd,captcha});
            // if(result.code===0){     //这是登录成功的操作
            //   const user = result.data;
            // }else{       //这是登录失败操作
            //   const msg = result.msg;
            // }
          }

          //不管登录成功失败都要停止倒计时
          if(this.computedTime){
            this.computedTime = 0;
            clearInterval(this.intervalId)    //清除倒计时
            this.intervalId = undefined;    //可写可不写
          }

          //根据结果数据处理
          if(result.code===0){     //这是登录成功的操作
            const user = result.data;
            //将user保存到vuex的state中
            this.$store.dispatch('recordUser',user);
            //登录成功后跳转个人中心界面
            this.$router.replace('/profile');
          }else{       //这是登录失败操作
          //登录失败后，图片验证码需要自动更新
            this.getCaptcha();
            const msg = result.msg;
            this.showAlert(msg);    //登录不成功的弹窗
          }
        },

        //关闭警告弹窗方法
        closeTip(){
          this.showAlert = false;
          this.alertText = "";
        },

        //获取一次性图片验证码
        getCaptcha:function(){    
          // console.log(event);
          //这里之所以需要每请求一次创建一次时间，因为每次地址不同才可发请求，才能生成不一样的图片验证码
          //$refs获取元素或组件
          this.$refs.captcha.src = "http://localhost:27017/captcha?time="+Date.now();
        },

        //密码显示隐藏切换
        // show:function(){
        //   const selfThis = this;
        //   if(!selfThis.showPwd){
        //     selfThis.showPwd = true;
        //   }else{
        //     selfThis.showPwd = false;
        //   }
          
        // },
        // back(){    //返回上一级页面
        //   this.$router.go(-1);
        // }
      },


      //映射成标签
      components:{
        AlertTip
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .loginContainer
    width 100%
    height 100%
    background #fff
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 40px
          font-weight bold
          color #02a774
          text-align center
        .login_header_title
          padding-top 40px
          text-align center
          >a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color #02a774
              font-weight 700
              border-bottom 2px solid #02a774
      .login_content
        >form
          >div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #02a774
            .login_message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
                &.right_phone   /*指向父选择器*/
                  color black 
            .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s,border-color .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #02a774
                >.switch_circle
                  //transform translateX(27px)
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                  transition transform .3s
                  &.right
                    transform translateX(30px)
            .login_hint
              margin-top 12px
              color #999
              font-size 14px
              line-height 20px
              >a
                color #02a774
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background #4cd96f
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .about_us
          display block
          font-size 12px
          margin-top 20px
          text-align center
          color #999
      .go_back
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px
        >.iconfont
          font-size 20px
          color #999
</style>
