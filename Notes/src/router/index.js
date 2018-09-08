import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import notes from '@/components/notes'

import listDetail from '@/components/listDetail'
import listShow from '@/components/listShow'
import loginOrNotes from '@/components/loginOrNotes'


Vue.use(Router)

export default new Router({
    routes:[{
        path:'/',
        redirect:'login'
    },{
        name:'login',
        path:'/login',
        component:login
    },{
        name:'notes',
        path:'/notes',
        components:{
            default:notes,
            listDetail:listDetail,
            listShow:listShow
        }
    }]
})