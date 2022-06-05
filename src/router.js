import { createWebHistory, createRouter } from 'vue-router';
import Main from '../src/Main.vue';
import Sign from '../src/Sign.vue';
import Login from '../src/Login.vue';
import Mypage from '../src/mypage.vue';

//route 정보

const routes = [
    {
        path: "/" ,
        name: "Main",
        component: Main,
    },
    {
        path: "/sign",
        name: Sign,
        component: Sign,
    },
    {
        path: "/login",
        name: Login,
        component: Login,
    },
    {
        path: "/mypage",
        name: Mypage,
        component: Mypage,
    },
   
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;