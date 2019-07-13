import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex);   //这里是声明使用，因为是插件
//这是vuex最核心的管理对象store
export default new Vuex.Store({    //创建一个vuex的store对象
    state,
    mutations,
    actions,
    getters
})
