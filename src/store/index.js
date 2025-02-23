import { createStore } from 'vuex'
import { login as mockLogin, register as mockRegister } from '../api/mock'

export default createStore({
    state: {
        token: null,
        user: null,
        discounts: [],  // mock discount data can be stored here or loaded via API calls
        markets: []
    },
    mutations: {
        setAuth(state, payload) {
            state.token = payload.token
            state.user = payload.user
        },
        logout(state) {
            state.token = null
            state.user = null
        },
        setDiscounts(state, discounts) {
            state.discounts = discounts
        },
        setMarkets(state, markets) {
            state.markets = markets
        }
    },
    actions: {
        async login({ commit }, credentials) {
            // Simulate an API call using mock data
            const response = await mockLogin(credentials)
            commit('setAuth', response)
            return response
        },
        async register({ commit }, userData) {
            // Simulate an API call using mock data
            const response = await mockRegister(userData)
            commit('setAuth', response)
            return response
        }
    }
})
