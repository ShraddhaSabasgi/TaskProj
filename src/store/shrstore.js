// import {createstore}from 'vuex'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        name:'Store Management',
        mainTitle : 'Original State',
        value1 : 10,
        value2: 20
    },
    mutations:{
        setMainTitle(state, payload)
        {
            state.mainTitle = payload.title
            console.log('Mutations : \n',payload.title)
           
        } 

    },
    actions:
    {
        setMainTitle(context ,payload)
        {
            context.commit('setMainTitle',payload)
        }
    },
    getters:
    {
        valueCombined(state)
        {
            return " From 1st Func "+state.mainTitle +' computed = '+(state.value1+state.value2)
        },
        valueCombined2(state,getters)
        {
            return " computed from  2nd func: Computed "+(getters.valueCombined)
        }
    }
})