<template>
<div class="head"> </div>
<router-link to="/"> <img class="title" alt="Title logo" src="./assets/Title.png"> </router-link> 
<router-link to="/Login"> <button type="button" class="login_logo" alt="login logo" >  로그인 </button> </router-link>
<input type="search" class="search_bar" value="" placeholder="  메뉴로 검색해보세요.">
<button id="search" v-on:click="result" class="search_button"> 검색 </button>
<Map></Map>
</template>

<script>
import Map from './Map.vue'

export default {
    components: {Map},
    
    data() {
        return {
        }
    },

    methods: {
        login() {
            this.$router.push('/login');
            console.log("로그인라우터");

        }
    },
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
    
    .search_bar {
        width:650px; height:50px;
        position: fixed; top: 20%; margin-left: 26%; border-radius: 50px;
        border: 3px solid #575756; transition: all 250ms ease-in-out;
    }
    .search_button {
        position: fixed;
        width: 70px; height: 50px;
        left: 70%; top: 20%; border-radius: 50px; background-color:lemonchiffon;
        border: 3px solid #575756; transition: all 250ms ease-in-out;
        text-align:center; cursor: pointer; color:#333; transition:all 0.9s, color 0.3;

    } 
    .search_button:hover {
    background-color: burlywood;
    }
    .login_logo:hover {
    background-color: burlywood;
    }

</style>