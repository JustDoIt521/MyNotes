import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var state={
    todoList:[]
}

var getters={
    count(state){
        return {
            state.todoList
        }
    }
}

export default new Vuex.Store({
    state,
    getters
})