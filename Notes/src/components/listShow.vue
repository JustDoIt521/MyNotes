<template>
    <div class='listShow'>
        titleShow:<input class='input-group' type="text"/>
        <br/>
        Content:<input class='input-group' type="text"/>
        <br/>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    export default {
        name:'listShow',
        created:{
            ...mapGetters([
                'todoList'
            ])
        },
    }
</script>
<style>
    .listShow {
        background: #1E90FF;
        width: 30%;
        height: 100%;
    }
</style>