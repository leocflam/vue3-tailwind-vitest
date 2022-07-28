import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'

import { useGlobalComponents } from './components/global'

const app = createApp(App)

app.use(router)
app.use(store)

useGlobalComponents(app)

app.mount('#app')
