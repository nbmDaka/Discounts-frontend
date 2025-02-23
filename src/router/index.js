import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '../pages/LoginPage.vue'
import RegistrationPage from '../pages/RegistrationPage.vue'
import DiscountsPage from '../pages/DiscountsPage.vue'
import DiscountDetailPage from '../pages/DiscountDetailPage.vue'
import MarketsPage from '../pages/MarketsPage.vue'
import DiscountsByMarket from '../pages/DiscountsByMarket.vue'

import MainLayout from '../layouts/MainLayout.vue'
import AuthLayout from '../layouts/AuthLayout.vue'

const routes = [
    {
        path: '/login',
        component: AuthLayout,
        children: [{ path: '', name: 'Login', component: LoginPage }],
    },
    {
        path: '/register',
        component: AuthLayout,
        children: [{ path: '', name: 'Register', component: RegistrationPage }],
    },
    {
        path: '/',
        component: MainLayout,
        children: [
            { path: 'discounts', name: 'Discounts', component: DiscountsPage },
            { path: 'discount/:id', name: 'DiscountDetail', component: DiscountDetailPage, props: true },
            { path: 'markets', name: 'Markets', component: MarketsPage },
            { path: 'discounts/market/:marketId', name: 'DiscountsByMarket', component: DiscountsByMarket, props: true },
            // Add more protected pages as needed
        ]
    },
    { path: '/:catchAll(.*)', redirect: '/login' }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
