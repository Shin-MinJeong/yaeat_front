<template>
  <div class="head"> </div>
  <router-link to="/"> <img class="title" alt="Title logo" src="./assets/Title.png">  </router-link>
  <router-link to="/Login"> <button type="button" class="login_logo" alt="login logo" > 로그인 </button> </router-link> 

    <div class="register">
        <div class="flex">
        <h3>회원가입</h3>
                <ul class="container">
                    <!-- <li class="item center">
                        이름
                    </li>
                    <li class="item">
                        <input type="text" name="name" autofocus required>
                    </li> -->
                    <li class="item">
                    </li>
                </ul>
                <ul class="container">
                    <li class="item center">
                        아이디
                    </li>
                    <li class="item">
                        <input type="text" v-model="email" placeholder="아이디를 입력하세요." required>
                    </li>
                </ul>
                <ul class="container">
                    <li class="item center">
                        비밀번호
                    </li>
                    <li class="item">
                        <input type="password" v-model="password" placeholder="비밀번호를 입력하세요." required>
                    </li>
                    <li class="item">
                        
                    </li>
                </ul>
                <br>  <button type="button" v-on:click="signUp" class="sign_up" alt="sing_up">가입하기</button>
            </div>
        </div>

</template>

<script>

export default {
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

        /* register css 정리할것 */

        ul, li {
             list-style: none; text-align: center;
        }
        a {
            text-align: center;text-decoration: none;color: inherit;
        }        
        .register{
            width: 550px;margin: 200px auto 0; margin-top:150px ;margin-bottom: 200px;
            padding: 5px 10px;background: white;color: #2b2e4a;
            font-size: 14px;text-align: left;box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
        }
        .register h3{
            font-size: 20px; font-weight: bold;margin-bottom: 20px;text-align: center;
        }
        .register input{
            width: 80%;height: 10px;outline: none;padding: 10px;
            border: 1px solid #707070;transition: 0.3s;
        }
        .register input:valid, .register input:focus{
            border: 1px solid #2b2e4a;
        }
        .register .center{
            display: flex;align-items: center;
        }
        .register .flex{
            display: flex;flex-direction: column;margin-bottom: 20px;
        }
        .register .flex .container{
            display: grid;grid-template-columns: 1fr 3fr 1fr;margin-bottom: 10px;
        }
        .register .flex .container .item:first-child{
           margin-right: 10px;
        }
        .register .flex .container .item .idcheck{
            height: 100%;padding: 5px 15px;background: #2b2e4a;
            border: 1px solid #2b2e4a;color: white;font-size: 12px;transition: 0.3s;
        }
        .sign_up{
            width: 50%;height: 40px;color: white; cursor: pointer;
            border: none;border: 1px solid #2b2e4a;
            background: #2b2e4a;transition: 0.3s;margin: 30px 30px 30px 155px;
        }
        .register .flex .container:last-child{
            margin: 0;
        }
     

</style>