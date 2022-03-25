
<template>
	<div class="page">
		<div class="personalData">
			<h2 class="TitleForm">Персональные данные</h2>
			<div class="inputWrapp">
				<input v-model="storeData.parentName" type="text" />
				<span class="placeholder">Имя</span>
			</div>
			<div class="inputWrapp">
				<input v-model="storeData.parentAge" type="number" />
				<span class="placeholder">Возраст</span>
			</div>
		</div>
		<div class="addChildren">
			<div class="addChildrenHeader">
				<h2 class="TitleForm TitleFormChildren">Дети (макс. 5)</h2>
				<button v-if="buttonVisible" @click="addChildren" class="buttonAddChildren">Добавить ребенка</button>
			</div>
			<ChildrensList />
		</div>
		<button class="buttonSave">Сохранить</button>
	</div>
</template>

<script setup>
import ChildrensList from '../components/ChildrensList.vue'
import { useStore } from '@/stores/form'
import { reactive, computed } from 'vue'

const store = useStore()
const state = reactive({ perentName: '', perentAge: null })

const addChildren = () => {
	store.addChildren()
}

const buttonVisible = computed(() => {
	return store.buttonVisible
})

const storeData = computed(() => {
	return store
})
</script>

<style lang="scss" scoped>
.personalData {
	margin-bottom: 20px;
}

.TitleFormChildren {
	margin: 0;
}

.addChildrenHeader {
	min-height: 40px;
	margin-bottom: 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.buttonAddChildren {
	padding: 10px 20px 10px 48px;
	border: 2px solid #01a7fd;
	box-sizing: border-box;
	border-radius: 100px;
	background-color: #fff;
	font-size: 14px;
	color: #01a7fd;
	cursor: pointer;
	position: relative;
	&::before {
		display: block;
		position: absolute;
		content: '';
		width: 16px;
		height: 2px;
		background-color: #01a7fd;
		left: 20px;
		top: 17px;
	}
	&::after {
		display: block;
		position: absolute;
		content: '';
		width: 2px;
		height: 16px;
		background-color: #01a7fd;
		left: 27px;
		top: 10px;
	}
}
.buttonSave {
	margin-top: 20px;
	padding: 10px 20px;
	background: #01a7fd;
	border-radius: 22px;
	color: white;
	border: none;
	font-size: 14px;
	line-height: 24px;
	cursor: pointer;
}
</style>


