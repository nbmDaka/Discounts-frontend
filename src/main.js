import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createI18n} from "vue-i18n";
import en from './locales/en.json';
import ru from './locales/ru.json';
import kz from './locales/kz.json';



const i18n = createI18n({
    legacy: false, // Vue 3 Composition API support
    locale: 'kz',  // Default language
    fallbackLocale: 'kz',
    messages: { kz, ru, en }
});

const app = createApp(App);
app.use(i18n);
app.mount('#app')