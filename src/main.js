import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery'

createApp(App).use(store).use(router).use($).mount('#app')
Vue.prototype.$ = $
