//入口文件
import Vue from 'vue'
// 按需导入 mint-ui 中的 组件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

// 导入 mui 的样式
import './lib/mui/css/mui.css'

import App from './app.vue'


var vm = new Vue({
    el: '#app',
    render: c => c(App)
})