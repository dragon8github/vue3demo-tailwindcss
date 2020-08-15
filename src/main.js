import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
import { shortcut } from "@/utils/shortcut.js";

import '@/scss/tailwind.css'
import '@/scss/common.scss'

if (process.env.NODE_ENV === 'development') {
    shortcut()
}

createApp(App).use(router).use(store).mount('#app')
