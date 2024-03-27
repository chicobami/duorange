<script>
import { auth } from '../../firebase_settings/index.js';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

export default {
	data() {
		return {
			items: [
				{ id: 0, text: 'そもそもアカウントとはなんだろうか？' },
				{ id: 1, text: 'インターネットを使おうとすると、いつも求められるだろう。' },
				{ id: 2, text: 'しかし、いきなりメアドが必要！などといわれてもわけがわからん。' },
				{ id: 3, text: 'そこで、アカウントとはなにかをまず理解するのだ。' },
				{ id: 4, text: 'まず、インターネットはこのように機械同士がやりとりして動く。門の先がサイトじゃ。', image: true, images: '/images/image01.jpg' },
				{ id: 5, text: 'しかし、この門をただ通るだけでは、門番はあなたを認識しない。', image: true, images: '/images/image02.jpg' },
				{ id: 6, text: '透明マントをかぶっているのと同じ状態じゃ。', image: true, images: '/images/image02.jpg' },
				{ id: 7, text: '透明人間には、門の内側で何もできんから、中で何かするには、門番に認識されないといかんのだ。そこで、', image: true, images: '/images/image02.jpg' },
				{ id: 8, text: '門番があなたをあなただと認識するために使うのがアカウントなのだ！', image: true, images: '/images/image03.jpg' },
				{ id: 9, text: 'なお、門に入る前の状態が「ログアウト」入った後が「ログイン」だ。', image: '/images/image04.jpg' },
				{ id: 10, text: 'アカウントがなんのためのものかはわかったのだ？' },
				{ id: 11, text: '次に、アカウントが何でできているかを説明しよう。' },
				{ id: 12, text: 'アカウントを構成するのは、メアドとパスワードだ。' },
				{ id: 13, text: 'アカウントを宝箱と考えてみよう。', image: true, images: '/images/image05.jpg' },
				{ id: 14, text: '宝箱そのものがメールアドレス、箱をあける鍵がパスワードだ。' },
				{ id: 15, text: 'メアドでここにアカウント（宝箱）があるなーと機械は認識し、', image: true, images: '/images/image06.jpg' },
				{ id: 16, text: 'パスワード（鍵）でこの宝箱の持ち主なのだなと確認する。', image: true, images: '/images/image07.jpg' },
				{ id: 17, text: '晴れて、宝箱が利用できるようになる（ログイン）のだ。', image: true, images: '/images/image08.jpg' },
				{ id: 18, text: 'この「この宝箱の持ち主なのだなと確認する」がとても大事！', image: true, images: '/images/image08.jpg' },
				{ id: 19, text: 'パスワードが他の人に知られてしまう＝鍵が他の人の手に渡ると、' },
				{ id: 20, text: 'いくらでもなりすませて、お金をとられるケースも…' },
				{ id: 21, text: 'パスワードの管理は厳重になのだ！' },
				{ id: 22, text: 'さて、さっそくアカウント作成とログインを実践してみよう！' },
				{ id: 23, text: 'まずはこのサイト「サイバーキークエスト」で挑戦だ。' },
				{ id: 24, text: 'では、メールアドレスを入力してみるのだ！', input: true, name: 'email', placeholder: 'メールアドレス' },
				{ id: 25, text: 'パスワードも入力してみるのだ！', input: true, name: 'password', placeholder: 'パスワード' },
				{ id: 26, text: 'これで、アカウントが作成できたな！' },
				{ id: 27, text: '最後に、最初の画面に戻ってこのサイトにログインだ！' },
				{ id: 28, text: 'おや、アカウントはすでに作成しているのだな！' }, // NOTE: 同一アカウントが存在する場合の動作確認用, セリフは適当です
				{ id: 29, text: 'ではログインしてみよう' }, // NOTE: 同一アカウントが存在する場合の動作確認用, セリフは適当です
			],
			email: '',
			password: '',
			currentSlideStart: 0,
			slideToShow: 1,
			isSignedUp: false,
			accountCreateSuccessful: false,
		};
	},
	mounted() {
		onAuthStateChanged(getAuth(), (user) => {
			if (user) {
				this.isSignedUp = true;
			} else {
				this.isSignedUp = false;
			}
		});
	},
	computed: {
		currentSlideEnd() {
			return this.currentSlideStart + this.slideToShow - 1;
		},
		lastSlideId() {
			if (this.isSignedUp === true) {
				return 21;
			} else if (this.accountCreateSuccessful === true) {
				return 27;
			} else {
				return 29;
			}
		}
	},
	methods: {
		saveAccountInfo() {
			this.currentSlideStart++;
			this.step = 2;
		},
		async registerAccount() {
			try {
				await createUserWithEmailAndPassword(auth, this.email, this.password).then((user) => {
					alert('アカウントが正常に作成されました！');
					signOut(auth).then(() => {
						// Sign-out successful.
						this.accountCreateSuccessful = true;
						this.currentSlideStart++;
					}).catch((error) => {
						// An error happened.
						alert('エラーが起きました…ねこサイバー仙人にお知らせしてください');
					});
				});
			} catch (error) {
				alert('アカウントの作成に失敗しました…ねこサイバー仙人にお知らせしてください');
				this.currentSlideStart += 3;
				// 前のスライド id: 24 に戻りたい！！
			}
		},
		nextSlide() {
			if (this.lastSlideId !== this.currentSlideEnd) {
				this.currentSlideStart++;
				return;
			}
			if (this.lastSlideId === 21) {
				this.$router.push('/Quest1/clear')
			} else {
				this.$router.push('/Quest1/login')
			}
		},
	},
};
</script>

<template>
	<div class="main">
		<div class="container wrapper">
			<template v-for="(item, index) in items" :key="index">
				<div class="contents" v-show="index >= currentSlideStart && index <= currentSlideEnd">
					<div class="upper">
						<div v-if="item.image">
							<img :src="item.images" alt="" />
						</div>
						<div v-if="item.input && item.id === 24" class="create-form">
							<input type="email" v-model="email" class="create-form-input" placeholder="メールアドレス" />
							<button class="create-submit-button" @click="saveAccountInfo">次へ</button>
						</div>
						<div v-if="item.input && item.id === 25" class="create-form">
							<input type="password" v-model="password" class="create-form-input" placeholder="パスワード" />
							<button class="create-submit-button" @click="registerAccount">登録する</button>
						</div>
					</div>
					<div class="lower">
						<div class="neko-sennin">
							<img src="/images/teach-cat-white.png" alt="" />
						</div>
						<div class="lower-textbox" @click="nextSlide">
							<div class="lower-textbox-item">
								<p>{{ item.text }}</p>
								<button>▼</button>
							</div>
						</div>
					</div>
				</div>
			</template>
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
	background-image: url('/images/22823124.jpg');
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;
	height: 100vh;
}

.container {
	max-width: 1480px;
	width: 100%;
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
	text-align: center;
}

.upper img {
	max-height: 50vh;
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
	min-height: 4em;
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

.slider-end {
	position: fixed;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.5);
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-self: center;
}

.create-form {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 100%;
}

.create-form-input {
	width: 90%;
	border-color: #846b29;
	border-radius: 0.7rem;
	font-size: 1rem;
	padding: 0.7rem;
	margin: 0.5rem 0;
	letter-spacing: 0.15rem;
	background-color: #f8f9fa;
}

.create-submit-button {
	width: 20rem;
	font-family: 'Orbitron';
	font-size: 1.5rem;
	font-weight: 700;
	color: #ffffff;
	padding: 0.5rem 0.8rem;
	letter-spacing: 0.15rem;
	background-color: #c9a444;
	border-radius: 0.7rem;
	box-shadow: 0rem 0.3rem #846b29;
	text-align: center;
	cursor: pointer;
}
</style>
