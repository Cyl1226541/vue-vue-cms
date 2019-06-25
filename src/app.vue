<template>
    <div class="app-container">
        <!-- header区域 -->
        <mt-header fixed title="Cylong-Vue项目"></mt-header>

		<!-- 添加动画 是为增加 用户体验 -->
        <!-- 中间 路由 router-view -->
		<transition>
        	<router-view></router-view>
		</transition>

        <!-- 底部  tabbar 区域-->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

    </div>
</template>
<script>

</script>
<style scoped>
    .app-container{
        padding-top: 40px;
		/* 加这个 是为了在 使用动画的时候不会出现 横向滚动条 */
		overflow-x: hidden;
    }

	/* 过渡动画 样式 */
	/* 分开写 是为了 左边出 右边进 */
	.v-enter{
		opacity: 0;
		transform: translateX(100%);
	}
	.v-leave-to{
		opacity: 0;
		transform: translateX(-100%);
		/* 是为了在动画离场的时候 位置不动 */
		position: absolute;
	}
	.v-enter-active,
	.v-leave-active{
		transition: all 0.5s ease;
	}
</style>
