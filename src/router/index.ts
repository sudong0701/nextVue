import { createRouter, createWebHashHistory }  from 'vue-router'

import login from '../page/sys/login.vue'

import user from '../page/main/user.vue'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'login',
            component: login
        },
        {
            path: '/user',
            name: 'user',
            component: user
        }
    ]
})