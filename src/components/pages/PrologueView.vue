<script>
import { ref } from 'vue';

// const items = ref([
// 	{
// 		id: 1,
// 		name: 'アボカドディップバケット',
// 	},
// 	{
// 		id: 2,
// 		name: 'あの日夢見たホットケーキ',
// 	},
// 	{
// 		id: 3,
// 		name: 'HOP WTR',
// 	},
// 	{
// 		id: 4,
// 		name: 'チーズフレンチフライ',
// 	},
// ]);

export default {
	data() {
		return {
			items: [
				{ id: 0, text: 'アボカドディップバケット01' },
				{ id: 1, text: 'アボカドディップバケット02' },
				{ id: 2, text: 'アボカドディップバケット03' },
			],
			currentSlideStart: 0,
			slideToShow: 1,
		};
	},
	computed: {
		currentSlideEnd: () => {
			return this.currentSlideStart + this.slideToShow - 1;
		},
	},
	methods: {
		prevSlide: () => {
			if (this.currentSlideStart <= 0) {
				return;
			}
			this.currentSlideStart--;
		},
		nextSlide: () => {
			if (this.users.length <= this.currentSlideEnd) {
				return;
			}
			this.currentSlideStart++;
		},
	},
};
</script>

<template>
	<div class="main">
		<div class="container wrapper">
			<div class="contents">
				<div class="upper"></div>
				<div class="lower">
					<div class="neko-sennin">
						<img src="../../../images/teach-cat-white.png" alt="" />
					</div>
					<div class="lower-textbox">
						<div class="lower-textbox-item">
							<template v-for="(item, index) in items" :key="item.id">
								<p v-show="{ index } <= { currentSlideStart } && { index } <= { currentSlideEnd }">{{ item.text }}</p>
							</template>

							<button>▼</button>
						</div>

						<!-- <div class="lower-textbox-item">
							<p>テキスト01</p>
							<button>▼</button>
						</div>
						<div class="lower-textbox-item">
							<p>テキスト01</p>
							<button>▼</button>
						</div>
						<div class="lower-textbox-item">
							<p>テキスト01</p>
							<button>▼</button>
						</div> -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style>
body {
	margin: 0;
	padding: 0;
	display: block;
}

img {
	width: auto;
	height: auto;
	max-width: 100%;
}

.main {
	background-image: url('../../../images/22823124.jpg');
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;
	height: 100vh;
}

.container {
	width: 1480px;
	max-width: 100%;
	padding: 0 20px;
	margin: 0 auto;
	position: relative;
}

.container {
	height: 100%;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
}

.contents {
	height: 90%;
	width: 100%;
}

.upper {
	height: 50%;
	display: block;
}

.lower {
	height: 50%;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	gap: 2em;
}

.lower .neko-sennin {
	width: 25%;
	-webkit-transform: matrix(-1, 0, 0, 1, 0, 0);
	transform: matrix(-1, 0, 0, 1, 0, 0);
}

.lower-textbox {
	width: 75%;
	-ms-flex-item-align: center;
	align-self: center;
	padding: 24px;
	background: #fff;
	border-radius: 16px;
}

.lower-textbox-item {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: end;
	-ms-flex-align: end;
	align-items: end;
}

.lower-textbox p {
	width: 90%;
	font-family: 'Orbitron';
	font-style: normal;
	font-weight: 700;
	font-size: 32px;
	line-height: 40px;
	letter-spacing: 0.08em;
	color: #846b29;
	margin: 0;
}

.lower-textbox button {
	width: 10%;
	font-size: 32px;
	font-weight: 700;
	color: #846b29;
	background-color: transparent;
	border: none;
	padding: 0;
	-webkit-animation-name: UpDown;
	animation-name: UpDown;
	-webkit-animation-duration: 1.5s;
	animation-duration: 1.5s;
	-webkit-animation-iteration-count: infinite;
	animation-iteration-count: infinite;
	-webkit-animation-timing-function: ease-in-out;
	animation-timing-function: ease-in-out;
	-webkit-animation-direction: alternate;
	animation-direction: alternate;
}

/* アニメーションの設定 */
@-webkit-keyframes UpDown {
	0% {
		-webkit-transform: translateY(0);
		transform: translateY(0);
	}
	100% {
		-webkit-transform: translateY(8px);
		transform: translateY(8px);
	}
}
@keyframes UpDown {
	0% {
		-webkit-transform: translateY(0);
		transform: translateY(0);
	}
	100% {
		-webkit-transform: translateY(8px);
		transform: translateY(8px);
	}
}
</style>