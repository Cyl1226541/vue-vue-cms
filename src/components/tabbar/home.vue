<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunBoList" :key="item.img">
                <!-- 要使用 item 就必须 用 属性 绑定 的方式 -->
                <img :src="item.img">
            </mt-swipe-item>
        </mt-swipe>

        <!-- 九宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/1.png">
                    <div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/2.png">
                    <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/3.png">
                    <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/4.png">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/5.png">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/6.png">
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul> 
    </div>
</template>
<script>
// 导入 mint-ui 中的 Toast 弹窗组件
import {Toast} from 'mint-ui';

//向外暴露对象
export default {
    data() {
        return {
            lunBoList: null
        }
    },
    created() {
        this.getLunBoList();
    },
    methods: {
        getLunBoList(){
            this.$http.get('http://localhost:8080/api/getLunBoTuList')
                .then(
                    res => {
                        if(res.body.status == 0){
                            this.lunBoList = res.body.data;
                            console.log(this.lunBoList);
                        }else{
                            Toast('轮播图加载失败...')
                        }
                    },
                    err => {

                    }
                )
        }
    },
}
</script>
<style lang='scss' scoped>
    // scss 的语法， 可以嵌套写
    // 设置轮播图的样式
    .mint-swipe{
        // 需要手动设置 轮播区域 的高度
        height: 200px;

        .mint-swipe-item{
            &:nth-child(1){
                background-color: greenyellow;
            }
             &:nth-child(2){
                background-color: red;
            }
             &:nth-child(3){
                background-color: blueviolet;
            }

            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    // 设置九宫格的
    .mui-grid-view.mui-grid-9{
        background-color:white;
        border: none;

        img{
            width: 70%;
            height: 70%;
        }
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: 0;
    }
    .mui-media-body{
        font-size: 14px;
    }
</style>
