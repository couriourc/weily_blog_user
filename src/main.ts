import '@/assets/styles/main.scss'
import 'uno.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import router from './router'

app.use(router)

import { createPinia } from 'pinia'

app.use(createPinia())

import VueCookies from 'vue-cookies'
import { setup } from './libs/setup'

app.config.globalProperties.VueCookies = VueCookies;

/**
 * Ui-library
 * */

app.config.globalProperties.globalInfo = {
    bodyWidth: 1000,
    DialogViewerGlobalName: 'default'
}

setup(app)
app.mount('#app')
