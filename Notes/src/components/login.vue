<template>
    <div id="login">
        <span class="chaStyle">UserName</span> 
        <input type="text" class="input-group" v-model="userName" placeholder="Enter the userName"/>
        <br/>
        <span class="chaStyle">Password</span>
        <input type="password" class="input-group" style="margin-top:10px;" v-model="password"/> 
        <br/>
        <div class="loginButton" v-on:click="userLogin()">
            <span>Login</span>
        </div>
         
    </div>
</template>
<script>
    export default {
        name: "login",
        data() {
            return {
                msg: "users login",
                localUser: "1",
                localPassword: "1",
                userName: '',
                password: ''
            };
        },
        created:{
        },
        methods: {
            userLogin: function() {
                console.log("userLogin");
                if (
                    this.userName == this.localUser &&
                    this.password == this.localPassword
                ) {
                    console.log("hello world");
                    this.$router.push({
                        name: "notes",
                        params: {
                            localUser: this.localUser
                        }
                    })
                } else {
                    alert("用户账号密码错误");
                }
            }
        }
    };
</script>
<style>
    /* .login{
        width:400px;
        height:400px;
        border:1px solid #1E90FF;
        margin-left:auto;
        margin-right:auto;
    } */
    
    .loginButton {
        width: 200px;
        height: 100px;
        text-align: center;
        font-size: 30px;
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
    }
    
    .loginButton:hover {
        color: orangered;
    }
    
    .chaStyle {
        width: 100px;
        height: 100px;
        border: 0px solid #1e90ff;
    }
    
    .userStyle {
        width: 300px;
        height: 50px;
        border: 1px solid #1e90ff;
        outline: none;
        border-top-style: none;
        border-left-style: none;
        border-right-style: none;
        text-align: center;
        font-size: 18px;
    }
    
    .userStyle:hover {
        border: 1px solid orangered;
        border-top-style: none;
        border-left-style: none;
        border-right-style: none;
    }
</style>