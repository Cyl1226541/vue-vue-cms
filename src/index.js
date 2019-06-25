//入口文件
import Vue from 'vue';
//导入 路由的包
import VueRouter from 'vue-router';
Vue.use(VueRouter);
// 导入 vue-resource 相关的包
import VueResource from 'vue-resource';
Vue.use(VueResource);//绑定到  vue 实例上

// 按需导入 mint-ui 中的 组件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 导入 mui 的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//导入自己的路由模块
import router from './router.js'

import App from './app.vue'


var vm = new Vue({
    el: '#app',
    render: c => c(App),
    // 挂载路由
    router
})