import { createRouter, createWebHistory } from 'vue-router';
import SignUp from '../components/views/SignUp.vue';
import SignIn from '../components/views/SignIn.vue';
import HomePage from '../components/views/HomePage.vue';
import LandingPage from '../components/views/LandingPage.vue';


const routes = [
    {
        path: '/signup',
        name: 'sign up',
        component: SignUp
    },
    {
        path: '/signin',
        name: 'sign in',
        component: SignIn
    },
    {
        path: '/',
        name: 'landing',
        component: LandingPage
    },
    {
        path: '/home',
        name: 'home',
        component: HomePage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;