// 抽离路由相关代码
import VueRouter from 'vue-router'

//导入相关组件模板对象
import home from './components/tabbar/home.vue';
import member from './components/tabbar/member.vue';
import shopcar from './components/tabbar/shopcar.vue';
import search from './components/tabbar/search.vue';



// 创建路由对象
var router = new VueRouter({//路由对象
    routes:[//路由匹配规则
        {path:'/', redirect: "/home"},//路由重定向
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/shopcar',component:shopcar},
        {path:'/search',component:search}
    ],
    linkActiveClass: 'mui-active' //覆盖默认的路由高亮的类，默认的类 router-link-active;  
                                //这个 mui-active 类是 mui 中定义好的样式。我们也可以自己设置
    
})

// 向外暴露 路由对象
export default router;