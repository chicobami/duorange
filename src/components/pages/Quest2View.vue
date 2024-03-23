<script setup>
import { ref, computed } from 'vue';

const items = [
  { id: 0, text: '実は…今のが「フィッシング詐欺」なのだ！' },
  { id: 1, text: 'インターネットを使おうとすると、いつも求められるだろう。' },
  { id: 2, text: 'いまメアドとパスワードを打ち込んだのは、' },
  { id: 3, text: 'サイバーキークエストの「偽サイト」！' },
  { id: 4, text: 'そっくりに作られているが、偽物なのだ！', image:true , images:'/images/image9.jpg'},
  { id: 5, text: 'サイトは時々、改めてログインを求めてくることがある。', image:true , images:'/images/image10.jpg'},
  { id: 6, text: '重要なことを行うときなどに多いのだ。'},
  { id: 7, text: 'しかし、そんな重要な事態のふりをして偽のサイトが送られてくることがある。'},
  { id: 8, text: 'まさに、さっきのようなメッセージだ。'},
  { id: 9, text: '偽物にメアドとパスワードを入れてしまうと…', image:true, images:'/images/image11.jpg' },
  { id: 10, text: '情報が食われてしまうのだ！ミミックのごとく…', image:true, images:'/images/image12.jpg'},
  { id: 11, text: '偽物の宝箱にパスワードという鍵を差し込んでしまい、'},
  { id: 12, text: '合鍵を作り放題にされてしまったようなものだ。'},
  { id: 13, text: '悪意ある詐欺なのだ…。'},
  { id: 14, text: '開け放題になったアカウントから、個人情報流出やお金の被害の可能性も…！'},
  { id: 15, text: '対策のコツは、とにかく安易にメアドとパスワードを入れないのだ！'},
  { id: 16, text: 'そして、突然来たメッセージを安易に開かないのだ！'},
  { id: 17, text: 'あいつらに近づいてはいけないのだ！'},
  { id: 18, text: '本物の宝箱に鍵を差し込むのだ！' },
]

const currentSlideStart = ref(0)
const slideToShow = 1

const questEnd = ref(false)

const currentSlideEnd = computed(() => {
  return currentSlideStart.value + slideToShow - 1
})

const nextSlide = () => {
  if (items.length < currentSlideEnd.value + 2) {
    questEnd.value = true
    return
  }
  currentSlideStart.value++
}

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
        </div>
        <div class="lower">
          <div class="neko-sennin">
            <img src="/images/teach-cat-white.png" alt="" />
          </div>
          <div class="lower-textbox">
            <div class="lower-textbox-item">
              <p>{{ item.text }}</p>
              <button @click="nextSlide">▼</button>
            </div>
          </div>
        </div>
      </div>
      </template>
    </div>
    <div class="slider-end" v-if="questEnd">
      <div class="completion">
        <h2 class="completion-title">Clear!</h2>
        <p class="completion-text">Quest2<br />フィッシング詐欺とは</p>
        <RouterLink to="/menu">
          <ButtonPart class="completion-button">Questに戻る</ButtonPart>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<style scoped>
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
	width: 100vw;
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

.completion {
	width: 30%;

	background: #fff;
	border-radius: 8px;
	padding: 5rem;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-self: center;
	flex-direction: column;
}

.completion-title {
	color: #846b29;
	font-family: 'PostNoBillsJaffnaExtraBold';
	font-size: 5rem;
	text-align: center;
	letter-spacing: 0.15rem;
}

.completion-text {
	color: #846b29;
	font-family: 'PostNoBillsJaffnaExtraBold';
	font-size: 2rem;
	text-align: center;
	letter-spacing: 0.15rem;
}

.completion-button {
	background-color: #c9a444;
	font-family: 'Orbitron';

	box-shadow: 0rem 0.3rem #846b29;
	border-radius: 0.7rem;
	width: auto;
	font-size: 2rem;
	font-weight: 700;
	padding: 0.5rem 0.8rem;
	color: #ffffff;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	letter-spacing: 0.15rem;
}
</style>