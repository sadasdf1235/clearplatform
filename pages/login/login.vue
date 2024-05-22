<template>
	<view v-if="loginWay==1" class="login_show">
		<text class="hint">在你家门口闪耀!今天就为你的家和办公室订购一流的清洁服务。</text>
		<button class="login" @click="pasLogin">登录</button>
		<view class="or">
			或者登录
		</view>
		<button class="wx_login"><uni-icons type="weixin" color="#00c800"></uni-icons>微信</button>
	</view>
	<view v-else class="login_pas">
		<text class="title">Cleany</text>
		<text class="login_text">账号登录</text>
		<uni-forms ref="form" label-position="top" :modelValue="formData" :rules="rules">
			<uni-forms-item label="邮箱" name="email">
				<uni-easyinput type="text" v-model="formData.email" placeholder="请输入邮箱" />
			</uni-forms-item>
			<uni-forms-item label="密码" name="password">
				<view class="password">
					<uni-easyinput type="password" v-model="formData.password" placeholder="请输入密码" />
					<text class="forget" @click="forget">忘记密码?</text>
				</view>
			</uni-forms-item>
			<uni-forms-item>
				<button class="login_btn" @click="submit">登录</button>
			</uni-forms-item>
		</uni-forms>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	// 0 密码登录 1微信登录
	let loginWay = ref(-1);
	let formData = ref({
		email: '',
		password: ''
	})
	let rules = {
		password: {
			rules: [{
					required: true,
					errorMessage: '请输入密码',
				},
				// {
				// 	minLength: 8,
				// 	maxLength: 12,
				// 	errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符',
				// }
			]
		},
		// 对email字段进行必填验证
		email: {
			rules: [{
				format: 'email',
				errorMessage: '请输入正确的邮箱地址',
			}]
		}
	}
	const pasLogin = () => loginWay.value = 0;

	async function submit() {
		await uni.request({
			url:'https://api.pingcc.cn/fiction/search/title/完美世界',
			success:(res)=>console.log(res.data,'dasdasda')
		})
		uni.switchTab({
			url:'/pages/user/user'
		})
	}

	function forget() {

	}
</script>

<style lang="scss">
	.login_show {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.hint {
			width: 80%;
			word-wrap: break-word;
			text-align: center;
			font-weight: 400;
			font-size: 52rpx;
			color: #000000;
		}

		.login {
			margin-top: 35rpx;
			margin-bottom: 18.75;
			width:
				322.92rpx;
			height: 83.33rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 8rpx 8rpx 0rpx rgba(0, 0, 0, 0.25);
			border-radius: 208rpx 208rpx 208rpx 208rpx;
			border: 4rpx solid #FF6565;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.or {
			margin-top: 18.75rpx;
			position: relative;

			&::before,
			&::after {
				content: '';
				position: absolute;
				top: 50%;
				/* 垂直居中 */
				width: 50%;
				/* 伪元素宽度，可根据需要调整 */
				height: 1px;
				/* 分割线高度 */
				background-color: #000;
				/* 分割线颜色 */
			}

			&::before {
				left: -100%;
				/* 左侧分割线 */
				transform: translateY(-50%);
				/* 上移自身高度的一半 */
			}

			&::after {
				right: -100%;
				/* 右侧分割线 */
				transform: translateY(-50%);
				/* 上移自身高度的一半 */
			}
		}


		.wx_login {
			margin-top: 52rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 243.75rpx;
			background: #FFE8A1;
			border-radius: 208rpx;
			font-size: 29rpx;
		}
	}

	.login_pas {
		width: 100vw;
		height: 100vh;
		background: #FBF9F9;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.title {
			font-weight: 400;
			font-size: 83rpx;
			color: #FFE8A1;
		}

		.login_text {
			font-weight: 500;
			font-size: 42rpx;
			color: #000000;
			margin-top: 112rpx;
		}

		.uni-forms {
			width: 80%;
			margin-top: 35.42rpx;

			.uni-easyinput {
				border-radius: 10rpx;
				// border: 2rpx solid #343131;
				// width: 65%;
				height: 63rpx;
			}

			.password {
				display: flex;
				flex-direction: column;
				align-items: flex-end;

				.forget {
					font-weight: 500;
					font-size: 23rpx;
					color: #000000;
				}
			}

			.login_btn {
				background-color: #ffe8a1;
				color: #FBF9F9;
			}
		}
	}
</style>