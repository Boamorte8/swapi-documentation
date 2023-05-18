import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import BackButton from './components/BackButton.vue'
import BaseSpinner from './components/BaseSpinner.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('BackButton', BackButton)
app.component('BaseSpinner', BaseSpinner)

app.mount('#app')
