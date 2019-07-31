<template>
    <div class="star" :class="'star-'+size">
        <span class="star-item" v-for='(sc,index) in starClasses' :class='sc' :key='index'></span>
        <!-- <span class="star-item on"></span>
        <span class="star-item on"></span>
        <span class="star-item half"></span>
        <span class="star-item off"></span>  -->
    </div>
</template>

<script>
    //类名常量
    const CLASS_ON = 'on'
    const CLASS_HALF = 'half'
    const CLASS_OFF = 'off'
    export default {
        props:{
            score:Number,
            size:Number
        },

        //计算属性
        computed:{
            /**
             * 最多一共5个星
             * 3.2:3个全星，0个半星，2个灰星
             * 3.5：3个全星，1个半星（半星是），1个灰星
             */
            starClasses(){
                const {score} = this;
                const scs = [];
                //向scs中添加n个‘on’
                const scoreInteger = Math.floor(score);   //向下取整评分数量
                for(let i=0;i<scoreInteger;i++){
                    scs.push(CLASS_ON);
                }
                
                //向scs中添加0/1个‘half’
                if(score*10-scoreInteger*10>=0.5){    //这里的小鼠可能不是很准确，所以成以10分为确保正确性
                    scs.push(CLASS_HALF);
                }
                
                //向scs中添加n个‘off’
                while(scs.length<5){   //当scs数组是值小于5的时候才往该数组中加入灰星
                    scs.push(CLASS_OFF);
                }
                
                //返回这个数组
                return scs;
            }
        }
    }
</script>

<style lang="stylus" rel='stylesheet/stylus'>
@import "../../common/stylus/mixins.styl"

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
            bg-image('./images/star48_on')
        &.half
            bg-image('./images/star48_half')
        &.off
            bg-image('./images/star48_off')
    &.star-36
        .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
            margin-right 0
        &.on
            bg-image('./images/star36_on')
        &.half
            bg-image('./images/star36_half')
        &.off
            bg-image('./images/star36_off')
    &.star-24
        .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
            margin-right 0
        &.on
            bg-image('./images/star24_on')
        &.half
            bg-image('./images/star24_half')
        &.off
            bg-image('./images/star24_off')
</style>

