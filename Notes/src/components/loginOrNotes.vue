<template>
    <div id="loginOrNotes">
        <h1>loginOrNotes</h1>
        <!-- <router-link to='/loginOrNotes/login'>login</router-link> -->
        <!-- <router-view name='listDetail'></router-view> -->
        <!-- <listDetail></listDetail> -->
        <router-view/>
        <!-- <listShow></listShow> -->
        <!-- <router-view name='listShow'></router-view> -->
    </div>
</template>
<script>
    import listDetail from '@/components/listDetail'
    import listShow from '@/components/listShow'

    export default {
        name: 'loginOrNotes',
        data() {
            return {

            }
        },
        components: {
            'listDetail': listDetail,
            'listShow': listShow
        },
        methods: {}
    }
</script>