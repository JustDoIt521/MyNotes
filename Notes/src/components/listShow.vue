<template>
    <div class='listShow'>
        <li v-for="(item,index) in todoList" v-on:click="toShowContent(index)">
            <span class='listTitle'>{{item.title}}</span>
            <!-- <br/>
             Content:<span class='testLine'>{{item.content}}</span>
            <br/> -->
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
        background: #EEEEEE;
        width: 30%;
        height: 100%;
    }
    .testLine{
        width:100%;
        text-align:center;
        word-break: break-all;
        /* word-wrap:break-word;  */
        /* white-space:nowarp; */
        /* text-overflow: ellipsis; */
    }
    li{
        width:100%;
        line-height:50px;
        font-size:20px;
        list-style:none;
        text-align:center;
        border-bottom:1px solid  #DDDDDD;
    }
    li:hover{
        color:blue;
    }
</style>