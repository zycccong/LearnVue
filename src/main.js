import Vue from 'vue'
import App from './view/App.vue'
import router from "./router/index.js"

Vue.config.productionTip = false

new Vue({
    router, // 注入到根实例中
    render: h => h(App),
}).$mount('#app')