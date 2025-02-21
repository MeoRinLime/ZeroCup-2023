// import './assets/main.css'

import { createApp } from 'vue'
// import App from './views/Homepage.vue'
// import App from './views/Details.vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
