<template>
	<div class="page">
		<h2 class="TitleForm">Персональные данные</h2>
		<div v-if="parentAge != null" class="ParentData">{{ parentName }}, {{ agetostr(parentAge) }}</div>
		<h2 v-if="store.childrens.length > 0" class="TitleForm listChildren">Дети</h2>
		<div v-for="(item, id) in list" :key="id" class="">
			<div class="children">{{ item.name }}, {{ agetostr(item.age) }}</div>
		</div>
	</div>
</template>

<script setup>
import { useStore } from '@/stores/form'
import { computed } from 'vue'

const store = useStore()

const list = computed(() => {
	return store.childrens
})
const parentName = computed(() => {
	return store.parentName
})
const parentAge = computed(() => {
	return store.parentAge
})
const agetostr = age => {
	let txt
	let count = age % 100
	if (count >= 5 && count <= 20) {
		txt = 'лет'
	} else {
		count = count % 10
		if (count == 1) {
			txt = 'год'
		} else if (count >= 2 && count <= 4) {
			txt = 'года'
		} else {
			txt = 'лет'
		}
	}
	return age + ' ' + txt
}
</script>

<style lang="scss" scoped>
.ParentData {
	font-weight: 700;
	font-size: 16px;
	color: #111111;
}
.children {
	margin-bottom: 30px;
	width: fit-content;
	padding: 10px 20px;
	font-weight: 700;
	font-size: 16px;
	color: #111111;
	background-color: #f1f1f1;
	border-radius: 5px;
}
.listChildren {
	margin-top: 60px;
}
</style>

