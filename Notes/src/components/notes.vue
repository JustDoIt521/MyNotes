<template>
    <div id="notes">
        <h1>{{msg}}</h1>
        <h2>{{localUser}}</h2>
        <div class='formArea'>
            title:<input class='input-group' type="text" v-model="title"/>
            <br/>
            Content:<input class='input-group' type="text" v-model="content"/>
            <br/>
        </div>
    </div>
</template>
<script>
    //import {mapGetters} from 'vuex'
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