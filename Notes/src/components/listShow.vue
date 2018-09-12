<template>
    <div class='listShow'>
        <li v-for="(item,index) in todoList" v-on:click="toShowContent(index)">
            titleShow:<span>{{item.title}}</span>
            <br/>
             Content:<span>{{item.content}}</span>
            <br/>
        </li>
    </div>
</template>
<script>
    import {mapGetters,mapMutations} from 'vuex'
    export default {
        name:'listShow',
        data (){
            return{
                // listShow:[{
                //     title:'firstOne',
                //     content:'这是第一个哈'
                //     },{
                //     title:'second',
                //     content:'这是第二个'
                // }]
                listShow:[]
            }
        },
        computed:{
             ...mapGetters([
                'todoList'
            ])
        },
        created () {
            this.updateData()
        },
        methods:{
            ...mapMutations([
                'showContent'
            ]),
            updateData:function(){
                this.todoList.forEach((value,index)=>{
                this.listShow.push(value)
                console.log(this.listShow)
                })
            },
            toShowContent:function(index){
                this.showContent(index)
            }
        }
    }
</script>
<style>
    .listShow {
        background: #1E90FF;
        width: 30%;
        height: 100%;
    }
</style>