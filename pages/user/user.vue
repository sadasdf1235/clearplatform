<template>
	<view class="container">
		<view class="user_info">
			<img class="avatar"
				src="https://ts3.cn.mm.bing.net/th?id=ORMS.1ab5fd6a9d3adbf8005c9870927f13c0&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0"
				alt="" />
			<view class="info">
				<view class="name_id">
					<text class="name" @click="login">机器小怪物</text>
					<text class="id">ID：213123123</text>
				</view>
				<uni-icons type="reload"></uni-icons>
			</view>
		</view>
		<view class="released">
			<text class="des">快来发布任务吧</text>
			<button class="released_btn" @click="release">立即发布</button>
		</view>
		<view class="taskbar">
			<view class="task">
				<view class="left_info">
					<img class="loading"
						src="https://ts3.cn.mm.bing.net/th?id=ORMS.2692ccaa106fd0cf3f233d4a29d04b4b&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0"
						alt="" />
					<text class="name">账户信息管理</text>
				</view>
				<uni-icons type="right"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script setup>
	function release() {
		// uni.navigateTo({
		// 	url: '/pages/start/start',
		// })
		uni.navigateTo({
			url: '/pages/release/release',
		})
	};
	function login(){
		uni.navigateTo({
			url: '/pages/login/login'
		})
	}
</script>

<style lang="scss">
	.container {
		.user_info {
			display: flex;
			justify-content: center;
			align-items: center;

			.avatar {
				border-radius: 50%;
				width: 228.37rpx;
				height: 228.37rpx;
			}

			.info {
				display: flex;
				justify-content: space-around;
				align-items: center;
				padding-left: 80rpx;

				.name_id {
					display: flex;
					flex-direction: column;
					padding-right: 18rpx;

					.name {
						font-size:
							49.29rpx;
						font-weight: bold;
					}

					.id {
						font-weight: 400;
						font-size: 35rpx;
						color: #A0A7BA;
					}
				}
			}
		}

		// 发布
		.released {
			height: 75.58rpx;
			margin-top: 40rpx;
			padding: 23.82rpx 26.29rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: linear-gradient(132deg, #FFB4B4 0%, #FF6F6F 100%);
			border-radius: 41rpx;

			.des {
				padding: 13.14rpx 0;
				font-weight: bold;
				font-size: 35rpx;
				color: #FFFFFF;
			}

			.released_btn {
				background: #FFFFFF;
				border-radius: 82rpx;
				font-weight: bold;
				font-size: 33rpx;
				color: #FF4242;
				margin-right: 0;
			}
		}

		// 任务
		.taskbar {
			padding: 0 22.18rpx;
			margin-top: 80.5rpx;

			.task {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 65.72rpx;

				.left_info {
					display: flex;
					align-items: center;

					.loading {
						width: 111.72rpx;
						height: 111.72rpx;
						border-radius: 50%;
						margin-right: 31.22rpx;
						object-fit: cover;
					}

					.name {
						font-weight: bold;
						font-size: 38rpx;
						color: #333333;
					}
				}
			}
		}
	}
</style>