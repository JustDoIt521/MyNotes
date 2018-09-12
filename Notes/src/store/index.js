import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// var state={
//     todoList:[{
//         title:'firstOne',
//         content:'这是第一个哈'
//     },{
//         title:'second',
//         content:'这是第二个'
//     }]
// }

// var getters={
//     count(state){
//         return {
//             state.todoList
//         }
//     }
// }

export default new Vuex.Store({
    state:{
        todoList:[{
            title:'firstOne',
            content:'这是第一个哈'
        },{
            title:'second',
            content:'这是第二个'
        }],
        showContent:{}
    },
    getters:{
        todoList:state=>{
            return state.todoList
        },
        showContent:state=>{
            return state.showContent
        }
    },
    mutations:{
        updateData(state,arr){
            state.todoList.push(arr)
        },
        showContent(state,index){
            state.showContent=state.todoList[index]
        }
    }
})