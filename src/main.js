import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* Include styles */
import './assets/scss/main.scss'

/* Include global componens */
import DefaultButton from '@/components/items/DefaultButton'

/* Register global components */
Vue.component('DefaultButton', DefaultButton)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
