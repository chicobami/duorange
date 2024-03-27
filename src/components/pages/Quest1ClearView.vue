<script setup>

</script>

<template>
	<div class="main">
		<div class="slider-end">
			<div class="completion">
				<h2 class="completion-title">Clear!</h2>
				<p class="completion-text">Quest1<br />アカウントってなに？</p>
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
