<template>
	<view class="container">
		<text class="title">消息</text>
		<!-- bg-color="#EEEEEE" -->
		<uni-search-bar :radius="100" @confirm="search" placeholder="搜素" ></uni-search-bar>
		<view class="chat_item" @click="intoMessageDetail">
			<view class="chat_body">
				<img class="avatar"
					src="https://ts3.cn.mm.bing.net/th?id=ORMS.9cabd608571c35f9565b14295fe90cd3&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0"
					alt="" />
				<view class="mes_body">
					<text class="user_name">213123</text>
					<text class="mes">21312312</text>
				</view>
			</view>
			<view class="status">
				<text class="time">16:45</text>
				<view class="hint">
					
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	const search = () => {}
	function intoMessageDetail(){
		uni.navigateTo({
			url: '/pages/chat/chat'
		})
	}
</script>

<style lang="scss">
	.container {
		padding: 15.38rpx 44.23rpx;

		.title {
			font-size:
				44.23rpx;
		}

		.chat_item {
			display: flex;
			justify-content: space-between;

			.chat_body {
				display: flex;
				.avatar {
					width:
						69.23rpx;
					height:
						69.23rpx;
					object-fit: cover;
					border-radius: 50%;
				}
				
				.mes_body {
					display: flex;
					flex-direction: column;
					padding-left: 26rpx;
				
					.user_name {
						font-size:
							26.92rpx;
					}
				
					.mes {
						font-size:
							26.92rpx;
						color: #999999;
					}
				}
			}
			.status {
				.time {}
				.hint {}
			}
		}
	}
</style>