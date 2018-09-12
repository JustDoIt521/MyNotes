<template>
    <div class='listDetail'>
        titleDetail:<span>{{showContent.title}}</span>
        <br/>
        Content:<span>{{showContent.content}}</span>
        <br/>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name:'listDetail',
    computed:{
        ...mapGetters([
            'showContent'
        ])
    }
}
</script>

<style>
    .listDetail {
        background: #1E90FF;
        width: 30%;
        height: 100%;
    }
</style>