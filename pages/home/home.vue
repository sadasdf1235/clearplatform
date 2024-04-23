<template>
	<view class="container">
		<view class="title">
			你好，杨泽
			<img class="title_img" src="@/static/images/search.png" alt="" />
		</view>
		<view class="schedule" v-for="item in scheduleList" @click="toDetail(item)">
			<img class="bk" :src="item.img" alt="" />
			<view class="schedule_bottom">
				<text class="schedule_title">{{item.title}}</text>
				<view class="info">
					<view class="money_time">
						<img class="schedule_img" src="@/static/images/icn.png" alt="" />
						<text class="money">20元</text>
						<text class="time">1~2h</text>
					</view>
					<view class="circle"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import {ref} from 'vue'
import daily_clean from '@/static/images/daily_clean.png'
import deep_clean from '@/static/images/deep_clean.png'
let scheduleList = ref([
	{
		img : daily_clean,
		title : 'Daily Clean'
	},
	{
		img : daily_clean,
		title : 'Deep Clean'
	},
])
function toDetail(schedule){
	uni.navigateTo({
		url:'/pages/daily_clean/daily_clean?img='+schedule.img+'&title='+schedule.title,
	})
}
</script>

<style lang="scss" scoped>
	.container {
		padding: 0 30.77rpx;

		.title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size:
				69.23rpx;

			.title_img {
				width: 46.15rpx;
				height: 46.15rpx;
			}
		}

		.schedule {
			width: 100%;
			height: 788rpx;
			border-radius: 54rpx;
			position: relative;
			margin-bottom: 20rpx;

			.bk {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}

			.schedule_bottom {
				width: 100%;
				position: absolute;
				left: 0rpx;
				bottom: 0rpx;
				padding: 0 0 39rpx 31rpx;
				display: flex;
				flex-direction: column;

				.schedule_title {
					font-weight: bold;
					font-size: 100rpx;
					color: #FFFFFF;
				}

				.info {
					display: flex;
					justify-content: space-between;
					align-items: center;

					.money_time {
						display: flex;
						align-items: center;
						font-weight: 400;
						font-size: 27rpx;
						color: #C2C2C2;

						.schedule_img {
							width: 46.15rpx;
							height: 46.15rpx;
							margin-right: 10rpx;
						}

						.money,
						.time {
							margin-right: 10rpx;
						}
					}

					.circle {
						margin-right: 45rpx;
						width: 85rpx;
						height: 85rpx;
						border-radius: 50%;
						border: 8rpx solid #FFFFFF;
						// border-image: linear-gradient(to top right, gray 50%, white 50%) 8;
					}
				}
			}
		}
	}
</style>