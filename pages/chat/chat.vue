<template>
	<view class="container">
		<view class="header">
			<view class="user">
				<img class="avatar"
					src="https://ts1.cn.mm.bing.net/th?id=ORMS.429d4e24d5df6441b3089ceb6d667c37&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0"
					alt="" />
				<view class="info">
					<text class="user_name">sadasdas</text>
					<view class="status">
						<view class="dot"></view>
						online
					</view>
				</view>
			</view>
			<button class="btn">
				<img class="colon" src="@/static/images/colon.png" alt="" />
			</button>
		</view>
		<view class="body">
			<view class="mes_item my_mes" v-for="item in 10" key="item">
				<view class="mes">
					1231231313131312312313131
				</view>
				<view class="time">
					3:10 PM
					<img class="delivery" src="@/static/images/done-all.png" alt="" />
				</view>
			</view>
		</view>
		<view class="send">
			<view class="input">
				<uni-easyinput v-model="message" placeholder="你的消息">
					<template #right>
						<img class="suffixIcon" src="@/static/images/stickers.png" alt="" />
					</template>
				</uni-easyinput>
			</view>
			<button class="right_btn"><uni-icons size="24" color="#2f80ed" type="mic-filled"></uni-icons></button>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	let message = ref('')
</script>

<style lang="scss" scoped>
	.container {
		padding: 0 80rpx;
		height: 100vh;
		overflow: auto;

		&::-webkit-scrollbar {
			width: 0;
			height: 0;
			background-color: transparent;
		}


		.header {
			width: 100%;
			display: flex;
			justify-content: space-between;

			.user {
				display: flex;

				.avatar {
					width: 96rpx;
					height: 96rpx;
					border-radius: 50%;
					margin-right: 48rpx;
				}

				.info {
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: flex-start;

					.user_name {
						font-weight: 400;
						font-size: 40rpx;
						color: #000000;
					}

					.status {
						display: flex;
						align-items: center;

						.dot {
							margin-right: 10rpx;
							width: 12rpx;
							height: 12rpx;
							background: #0ACF83;
							border-radius: 50%;
						}

						font-weight: 400;
						font-size: 24rpx;
						color: rgba(0, 0, 0, 0.4);
					}
				}
			}

			.btn {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 104rpx;
				height: 104rpx;
				background: #FFFFFF;
				border-radius: 30rpx;
				border: 2rpx solid #E8E6EA;
				margin: 0;

				.colon {
					width: 48rpx;
					height: 48rpx;
				}
			}
		}

		.body {
			.mes_item {
				display: flex;
				flex-direction: column;
				margin-top: 18rpx;
				font-weight: 400;
				font-size: 24rpx;

				.mes {
					color: #000000;
					max-width: 500rpx;
					height: auto;
					overflow-wrap: break-word;
				}

				.time {
					display: flex;
					color: rgba(0, 0, 0, 0.4);

					.delivery {
						width: 44rpx;
						height: 24rpx;
						margin-left: 10rpx;
						object-fit: cover;
					}
				}
			}

			.other_mes {
				align-items: flex-start;

				.mes {
					padding: 28rpx 32rpx;
					background: #5B4E46;
					border-radius: 30rpx 30rpx 30rpx 0rpx;
					opacity: 0.07;
				}
			}

			.my_mes {
				align-items: flex-end;

				.mes {
					background: rgba(33, 204, 242, 0.24);
					border-radius: 30rpx;
					padding: 34rpx 44rpx;
				}
			}
		}

		.send {
			width: 100vw;
			position: fixed;
			left: 0;
			bottom: 0;
			display: flex;
			justify-content: space-between;
			padding: 10rpx 66rpx;
			background-color: #efeff4;
			z-index: inherit;

			.input {
				width: 60%;
				.uni-easyinput {
					width: 100rpx;
					.suffixIcon {
						width: 44rpx;
						height: 44rpx;
						margin-right: 26rpx;
					}
				}
			}

			.right_btn {
				width: 96rpx;
				height: 96rpx;
				border-radius: 30rpx;
				margin-left: 30rpx;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
</style>