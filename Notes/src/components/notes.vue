<template>
    <div id="notes">
        <h1>{{msg}}</h1>
        <h2>{{localUser}}</h2>
        <div class='formArea'>
            title:<input class='input-group' type="text" v-model="title"/>
            <br/>
            Content:<input class='input-group' type="text" v-model="content"/>
            <br/>
            <button v-on:click="newToDo()">newToDo</button>
        </div>
    </div>
</template>
<script>
    import {mapMutations} from 'vuex'
    export default ({
        name: 'notes',
        data() {
            return {
                msg: 'this is the notes page',
                localUser: this.$route.params.localUser,
                title: "",
                content: ""
            }
        },
        // created:{
        //     ...mapGetters([
        //         'todoList'
        //     ])
        // },
        watch: {
            $route(to, from) {
                this.localUser = to.params.localUser
                console.log("noteVue")
            }
        },
        methods:{
            ...mapMutations([
                'updateData'
            ]),
            newToDo:function(){
                let param={
                    title:this.title,
                    content:this.content
                }
                console.log(param)
                this.updateData(param)
            }
        }
    })
</script>
<style>
    .formArea {
        width: 300px;
        height: 300px;
        margin-left: auto;
        margin-right: auto;
    }
</style>