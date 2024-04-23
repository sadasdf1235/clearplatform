<template>
	<view class="container">
		<!-- 上方背景 -->
		<view class="schedule">
			<img class="bk" src="@/static/images/daily_clean.png" alt="" />
			<view class="schedule_bottom">
				<text class="schedule_title">Daily Clean</text>
				<view class="info">
					<view class="money_time">
						<img class="schedule_img" src="@/static/images/icn.png" alt="" />
						<text class="money">20元</text>
						<text class="time">1~2小时</text>
					</view>
					<view class="circle"></view>
				</view>
			</view>
		</view>
		<!--  任务 -->
		<view class="task">
			<view class="tab">
				<view class="checklist check">checklist</view>
				<view class="about_links">About & Links</view>
			</view>
			<view class="uni-list">
				<checkbox-group @change="checkboxChange">
					<label class="uni-list-cell uni-list-cell-pd" v-for="item in items" :key="item.value">
						<view>
							<checkbox :value="item.value" :checked="item.checked" />
						</view>
						<view>{{item.name}}</view>
					</label>
				</checkbox-group>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		onLoad
	} from "@dcloudio/uni-app"
	onLoad((option) => {
		schedule = option
	})

	let checkIndex = ref(0);
	let schedule = ref({
		img: '',
		title: ''
	})
	const items = [{
			value: 'USA',
			name: '铺床叠被'
		},
		{
			value: 'CHN',
			name: '清洁所以屏幕',
			// checked: 'true'
		},
		{
			value: 'BRA',
			name: '洗碗'
		},
		{
			value: 'JPN',
			name: '清理洗漱台'
		},
		{
			value: 'ENG',
			name: '清理碎屑'
		},
		{
			value: 'FRA',
			name: '拖地'
		}
	];

	function checkboxChange(e) {

	}
</script>

<style lang="scss" scoped>
	.container {
		// padding: 0 30.77rpx;

		.schedule {
			width: 100%;
			height: 788rpx;
			// border-radius: 54rpx;
			position: relative;

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

		// TODO 滚动条
		.task {
			// margin-top: 30.77rpx;
			padding: 30.77rpx;
			width: 100vw;
			display: flex;
			flex-direction: column;
			align-items: center;
			background-color: #FFFFFF;

			.tab {
				width: 80%;
				height: 90rpx;
				background: #F4F4F4;
				border-radius: 31rpx;
				display: flex;
				padding: 5.77rpx;

				.checklist,
				.about_links {
					flex: 1;
					font-weight: 400;
					font-size: 27rpx;
					color: #757575;
					text-align: center;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.check {
					background: #FFFFFF;
					box-shadow: 6rpx 8rpx 19rpx 0rpx rgba(0, 0, 0, 0.17);
					border-radius: 29rpx;
					font-weight: 400;
					font-size: 27rpx;
					color: #000000;
				}
			}

			.uni-list {
				width: 80%;
				margin-top: 60rpx;

				.uni-list-cell {
					justify-content: flex-start
				}
			}
		}
	}
</style>