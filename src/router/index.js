import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import home from "../view/home.vue";
import about from "../view/about.vue";
import table from "../view/table.vue";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [{
        path: "/home",
        component: home
    },
    {
        path: "/about",
        component: about
    },
    {
        path: "/table",
        component: table
    },
]

var router = new VueRouter({
    routes
})
export default router;