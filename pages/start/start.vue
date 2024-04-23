<template>
	<view class="container">
		<text class="title">Cleany</text>
		<img class="bottom_right" src="/static/images/start.png" alt="" />
	</view>
</template>

<script setup>

</script>

<style lang="scss">
	.container {
		width: 100vw;
		height: 100vh;
		background-color: #FF6565;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.title {
			font-weight: 400;
			font-size: 94rpx;
			color: #FFFFFF;
			transform: translateY(-100%);
		}

		.bottom_right {
			position: absolute;
			bottom: 50rpx;
			left: 0;
			object-fit: cover;
			max-width: 80%;
			max-height: 80vh;
		}
	}
</style>