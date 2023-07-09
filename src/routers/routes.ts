// 对外暴露路由配置

export const constanRoute = [
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        name: 'login'
    },
    {
        path: '/',
        component: () => import('@/views/home/index.vue'),
        name: 'home'
    },
    {
        path: '/404',
        component: () => import('@/views/404/index.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        name: 'any'
    }
]