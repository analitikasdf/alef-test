
<template>
	<div v-for="item in Object.keys(childrens)" :key="item" class="addChildrenList">
		<div class="addChildrenListItem">
			<div class="inputWrapp">
				<input v-model="childrens[item].name" type="text" />
				<span class="placeholder">Имя</span>
			</div>
			<div class="inputWrapp">
				<input v-model="childrens[item].age" type="number" />
				<span class="placeholder">Возраст</span>
			</div>
			<button @click="removeChildren(item)" class="buttonDelete">Удалить</button>
		</div>
	</div>
	<!-- <pre>{{ childrens }}</pre> -->
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useStore } from '@/stores/form'
import { reactive, computed } from 'vue'

const store = useStore()
const { childrens } = storeToRefs(store)
// const list = computed(() => {
// 	return store.childrens
// })
const removeChildren = id => {
	store.removeChildren(id)
}
</script>

<style scoped>
.inputWrapp {
	margin-bottom: 0px;
}
.addChildrenListItem {
	margin-bottom: 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.addChildrenListItem .inputWrapp {
	max-width: 260px;
	flex: 1 0;
}
.buttonDelete {
	border: none;
	background-color: transparent;
	cursor: pointer;
	color: #01a7fd;
	font-size: 14px;
}
</style>

