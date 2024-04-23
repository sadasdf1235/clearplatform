<template>
	<view class="container">
		<view class="top">
			<view class="content">
				<view class="left"></view>
				<view class="released">
					<text class="title">发布任务</text>
					<view class="time">
						<img class="schedule_img" src="@/static/images/icn.png" alt="" />
						<text>20分 8月31日</text>
					</view>
				</view>
			</view>
			<view class="circle"></view>
		</view>

		<view class="task">
			<view class="uni-padding-wrap">
				<view class="uni-title uni-common-mt">
					任务列表
				</view>
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
		
		<view class="divide">
			
		</view>
	</view>
</template>

<script setup>
	const items = [{
			value: 'USA',
			name: '清除挡板'
		},
		{
			value: 'CHN',
			name: '洗碗',
			checked: 'true'
		},
		{
			value: 'BRA',
			name: '清洁储藏室'
		},
		{
			value: 'JPN',
			name: '擦冰箱'
		},
		{
			value: 'ENG',
			name: '整理冰箱'
		},
		{
			value: 'FRA',
			name: '扔垃圾'
		},
		{
			value: 'FRS',
			name: '拖地板'
		}
	]
	function checkboxChange(){
		
	}
</script>

<style lang="scss" scoped>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 19.23rpx 30.77rpx;

		.top {
			width: 688rpx;
			height: 156rpx;
			background: #FFFFFF;
			box-shadow: 6rpx 8rpx 19rpx 0rpx rgba(0, 0, 0, 0.17);
			border-radius: 31rpx 31rpx 31rpx 31rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.content {
				display: flex;

				.left {
					width: 65rpx;
					height: 156rpx;
					background: #E2EEDD;
				}

				.released {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: flex-start;
					margin-left: 32rpx;

					.title {
						font-weight: 500;
						font-size: 27rpx;
						color: #000000;
						margin-bottom: 11rpx;
					}

					.time {
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
					}
				}
			}

			.circle {
				width: 85rpx;
				height: 85rpx;
				border-radius: 50%;
				border: 10rpx solid #E2EEDD;
			}
		}
		.task {
			width: 100%;
			margin-bottom: 20rpx;
			.uni-list {
				.uni-list-cell {
					justify-content: flex-start
				}
			}
		}
		.divide {
			width: 100%;
			height: 19rpx;
			background: #E2EEDD;
		}
	}
</style>