<template>
  <div class="head"> </div>
  <router-link to="/"> <img class="title" alt="Title logo" src="./assets/Title.png"> </router-link>
<button type="button" class="login_logo" alt="login logo" > <router-link to="/Login"> 로그인 </router-link> </button>

   <div class="content">
        <input type="radio" name="tab" id="review" checked> <!-- 홈페이지 열면 처음부터 이 요소가 체크된 상태로 열린다 -->
        <input type="radio" name="tab" id="save" >
        <div class="btn clearfix">
            <label for="review">남긴 리뷰</label>
            <label for="save">저장한 식당</label>
        </div>
        <ul class="reviewtab">
            <li>
                <a href="#" >
                    <div class="text">
                        <h4>양식집</h4>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span> <br> <!-- 내용 -->
                        <span>2022-05-01</span> <!-- 남긴날짜 -->
                    </div>
                </a>
            </li>
            <li>
                <a href="#" >
                    <div class="text">
                        <h4>분식집</h4>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span> <br> <!-- 내용 -->
                        <span>2022-05-01</span> <!-- 남긴날짜 -->
                    </div>
                </a>
            </li>
            <li>
                <a href="#" >
                    <div class="text">
                        <h4>중국집</h4>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span> <br> <!-- 내용 -->
                        <span>2022-05-01</span> <!-- 남긴날짜 -->
                    </div>
                </a>
            </li>
            <li>
                <a href="#" >
                    <div class="text">
                        <h4>일식집</h4>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span> <br> <!-- 내용 -->
                        <span>2022-05-01</span> <!-- 남긴날짜 -->
                    </div>
                </a>
            </li>
        </ul>
        <ul class="savetab">
            <li>
                <a href="#" >
                    <div class="text">
                        <h4>양식집</h4>
                        <span>2022-05-01</span> <!-- 저장날짜 -->
                    </div>
                </a>
            </li>
            <li>
                <a href="#" >
                    <div class="text">
                        <h4>분식집</h4>
                        <span>2022-05-01</span> <!-- 저장날짜 -->
                    </div>
                </a>
            </li>
            <li>
                <a href="#" >
                    <div class="text">
                        <h4>중국집</h4>
                        <span>2022-05-01</span> <!-- 저장날짜 -->
                    </div>
                </a>
            </li>
            <li>
                <a href="#" >
                    <div class="text">
                        <h4>일식집</h4>
                        <span>2022-05-01</span> <!-- 저장날짜 -->
                    </div>
                </a>
            </li>
        </ul>
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

        /* 나중에 정리할 것 */

        *{
    margin: 0;
    padding: 0;
}
        li{
    list-style: none;
}

a{
    text-decoration: none;
}

.clearfix::after{
    content: '';
    display: block;
    clear: both;
}

#header{
    font-family: 'Akshar', sans-serif;
}

.lnb .content{
    font-family: 'Noto Sans KR', sans-serif;
}

#header{
    background-color: lemonchiffon;
    width:0 auto;
    position: relative;
    padding: 30px 0;
    border-bottom: gray solid 2px;
    margin-bottom: 100px;
}

.title{
    background-color: lemonchiffon;
    padding-left: 20px;
}

.lnb{
    background-color:rgb(255, 228, 196);
    border: none;
    border-radius: 20px;
    font-size: px;
    padding: 10px 20px 10px 20px;
    margin-right: 20px;
    text-align: center;
    width: 200px;
    position: absolute;
    right: 0;
    top: 35%;
}

.lnb > ul > li:last-child{
    font-weight: bold;
    cursor: pointer;
}

.content{
    background-color: lemonchiffon;
    width: 800px;
    margin: 0 auto;
    border: solid gray 3px;
    margin-top: 10%;
}

.btn > label{
    float: left;
    border: 1px solid #000;
    height: 30px;
    width: 50%;
    box-sizing: border-box;
    text-align: center;
    line-height: 28px;
}

#review:checked ~ .btn > label:first-child {
    background-color: rgb(255, 228, 196);
    color: #2b2e4a;
    font-weight: bold;
}

#save:checked ~ .btn > label:last-child {
    background-color: rgb(255, 228, 196);
    color: #2b2e4a;
    font-weight: bold;
}

.content > ul > li > a{
    border: 1px solid #000;
    display: block;
    border-top: none;
    padding: 10px;
}

.content ul>li>a>img{
    float: left;
}

.content ul > li > a > .text{
    padding-left: 60px;
}

.text > h4{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; /* 공간을 넘었을때 ...으로 처리하는 방법*/
    width: 122px;
}

.content > ul{
    display: none;
}

#review:checked~ .reviewtab{
    display: block;
}

#save:checked~ .savetab{
    display: block;
}

.content > input {
    display: none;
}  /* input radio버튼 없앰 */

        


</style>