<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useStore } from '@/stores/form'

const store = useStore()
</script>

<template>
	<header>
		<img src="@/assets/Logo_imi_horizontal.png" alt="Logo" />
		<nav>
			<RouterLink to="/">Форма</RouterLink>
			<RouterLink v-show="store.parentName && store.parentAge" to="/preview">Превью</RouterLink>
		</nav>
	</header>
	<RouterView />
	<footer>
		<span>all rights reserved</span>
	</footer>
</template>

<style lang="scss">
@import '@/assets/base.css';

#app {
	font-weight: normal;
}

header {
	height: 76px;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);
	position: relative;
	& > img {
		position: absolute;
		left: 51px;
		top: 22px;
	}
}

header nav a {
	padding: 10px;
	color: rgba(17, 17, 17, 0.48);
	text-decoration: none;
}

header nav a:hover {
	color: rgba(17, 17, 17, 1);
}

header nav .router-link-exact-active {
	color: rgba(17, 17, 17, 1);
}

footer {
	height: 76px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #000;
	background-color: #fafafa;
}

.page {
	padding: 30px 0px;
	max-width: 616px;
	margin: 0 auto;
	min-height: calc(100vh - 152px);
}

input[type='text'],
input[type='number'] {
	padding-top: 26px;
	padding-left: 16px;
	display: block;
	width: 100%;
	height: 56px;
	border: 1px solid #f1f1f1;
	border-radius: 4px;
	font-size: 14px;
	position: relative;
	z-index: 2;
	background-color: transparent;
	color: #111;
}

.TitleForm {
	margin-bottom: 20px;
	font-weight: 500;
	font-size: 16px;
}

.inputWrapp {
	margin-bottom: 10px;
}

.inputWrapp .placeholder {
	color: rgba(17, 17, 17, 0.48);
	position: absolute;
	left: 16px;
	top: 8px;
	font-size: 13px;
	z-index: 1;
}
</style>
