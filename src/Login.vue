<template>
  <div class="head"> </div>
  <router-link to="/"> <img class="title" alt="Title logo" src="./assets/Title.png"> </router-link>
 <button type="button" class="login_logo" alt="login logo" > 로그인 </button>

<div class="login">
    <input type="text" class="id" v-model="id" placeholder="아이디" > <br>
    <input type="password" class="pw" v-model="pw" placeholder="비밀번호" > <br>
    <button id="login_button" class="login_button" v-on:click="submit" > 로그인 </button>
    <router-link to="/Sign"> <button id="sign_button" class="sign_button" v-on:click="submit" > 회원가입 </button> </router-link>
</div>


</template>

<script>
export default {
    name: 'login',
    data() {
      return {
      }
    },
    methods: {
      login() {
        alert("로그인 완료");
      }
    }
  }
</script>

<style>
    .head {
        background-color: lemonchiffon; border-bottom: 2px solid lightgray; position: fixed;
        top: 0; left: 0; z-index: 1; width: 100%; height: 100px;
    }
    .title {
        position: fixed; z-index: 2; left: 1%; height: 70px;
    }
    .login_logo {
        position: fixed; z-index: 2; top: 4%; left: 88%; width: 140px; height: 50px;
        background-color:bisque; border: none;border-radius: 20px;font-size: px;cursor: pointer;  
        padding: 10px 20px 10px 20px; text-decoration: none;  
        }
        .btn:hover {
        background: #fc893c;
        text-decoration: none;
        }

        /* 나중에 정리할 것 로그인 css */

        .login {
            text-align: center; margin: 200px 400px 100px 400px; 
            background-color:floralwhite;  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
        }

        .id {
            width: 20%; background-color: transparent;border: none; margin-top: 50px;
            border-bottom: 1px solid black;font-size: 12px;outline: none;
            padding: 20px;
        }

        .pw {
            width: 20% ;background-color: transparent;border: none;
            border-bottom: 1px solid black;font-size: 12px;outline: none;
            padding: 20px;
        }

        .login_button {
            width: 10%;height: 50px;margin: 50px 10px;background-color: lemonchiffon;
            border: none;border-radius: 20px;font-size: px;cursor: pointer;            
        }
         .login_button:hover {
        background: #fc893c;text-decoration: none;
        }
        .sign_button {
            width: 10%;height: 50px;margin: 50px 10px;background-color: lemonchiffon;
            border: none;border-radius: 20px;font-size: px;cursor: pointer;            
        }
         .sign_button:hover {
        background: #fc893c;text-decoration: none;
        }





</style>