<template>
    <div class='listDetail'>
        <p>{{showContent.content}}</p>
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
        background: #EEEEEE;
        width: 30%;
        height: 100%;
    }
    p{
        width:100%;
        height:500px;
        padding-left:10px;
        padding-right:10px;
        padding-top:20px;
        word-wrap:break-word;
        text-align:justify;
        overflow-y: hidden;
    }
</style>