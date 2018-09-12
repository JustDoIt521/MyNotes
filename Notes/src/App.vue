<template>
  <div id="app">
      <div class="notesWhole">
            <router-view name='listShow'></router-view>
            <!-- <router-view/> -->
            <!-- <listShow></listShow> -->
            <div class='logoInput'>
                <img src="./assets/logo.png">
                <router-view/>
            </div>
            <!-- <listDetail></listDetail> -->
            <router-view name='listDetail'></router-view>
      </div>
  </div>
</template>

<script>
    // import listDetail from '@/components/listDetail'
    // import listShow from '@/components/listShow'
    export default {
        name: 'App',
        // components: {
        //     'listDetail': listDetail,
        //     'listShow': listShow
        // },
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    
    .notesWhole {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
    }
    
    .listShow {
        background: #1E90FF;
        width: 30%;
        height: 100%;
    }
    
    .logoInput {
        width: 30%;
        height: 100%;
    }
    
    .listDetail {
        background: #1E90FF;
        width: 30%;
        height: 100%;
    }
</style>