import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import './assets/css/normalize.scss'
import { router } from './router'
import { create, NButton } from 'naive-ui'
import store from './store'

import { axios } from './utils/axios'

import { installMlUI } from './components'

const app = createApp(App)
app.config.globalProperties.$axios = axios
const naive = create({
    components: [NButton]
})

installMlUI(app)

app.use(naive)

app.use(router)

app.use(store)



app.mount('#app')


