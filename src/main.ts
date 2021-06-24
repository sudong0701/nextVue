import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import './assets/css/normalize.scss'
import { router } from './router'
import { create, NButton } from 'naive-ui'
//import axios from 'axios'

import { axios } from './utils/axios'


const app = createApp(App)
app.config.globalProperties.$axios = axios
const naive = create({
    components: [NButton]
})
app.use(naive)

app.use(router)

app.mount('#app')


