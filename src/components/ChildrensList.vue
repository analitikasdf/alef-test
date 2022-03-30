
<template>
	<div class="addChildrenHeader">
		<h2 class="TitleForm TitleFormChildren">Дети (макс. 5)</h2>
		<button v-if="store.buttonVisible" @click="addChildren" class="buttonAddChildren">Добавить ребенка</button>
	</div>
	<div v-for="(item, index) in state.childrens" :key="item.id" class="addChildrenList">
		<div class="addChildrenListItem">
			<div class="inputWrapp">
				<input v-model="item.name" type="text" />
				<span class="placeholder">Имя</span>
				<div v-for="error in v$.childrens.$each.$response.$errors[index].name" :key="error">
					{{ error.$message }}
				</div>
			</div>
			<div class="inputWrapp">
				<input v-model="item.age" type="number" />
				<span class="placeholder">Возраст</span>
				<div v-for="error in v$.childrens.$each.$response.$errors[index].age" :key="error">
					{{ error.$message }}
				</div>
			</div>
			<button @click="removeChildren(item.id)" class="buttonDelete">Удалить</button>
		</div>
	</div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useStore } from '@/stores/form'
import { reactive, computed, ref } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, minLength, maxValue, helpers } from '@vuelidate/validators'

const store = useStore()
const state = reactive({
	startId: 0,
	childrens: []
})

// const removeChildren = id => {
// 	store.removeChildren(id)
// }

const addChildren = () => {
	if (state.childrens.length < 5) {
		state.startId++
		state.childrens = [...state.childrens, { id: state.startId, name: '', age: '' }]
	}
}

const removeChildren = id => {
	state.childrens = state.childrens.filter(i => i.id !== id)
}
const name = ref('')
const age = ref('')

const requiredNameLength = ref(3)
const maxAgeValue = ref(18)

const collection = computed(() => {
	return Object.values(store.childrens)
})
const rules = {
	childrens: {
		$each: helpers.forEach({
			name: {
				required: helpers.withMessage('Поле не должно быть пустым', required),
				minLength: helpers.withMessage(`Минимальная длинна ${requiredNameLength.value} символа`, minLength(requiredNameLength.value))
			},
			age: {
				required: helpers.withMessage('Поле не должно быть пустым', required),
				maxValue: helpers.withMessage(`Максимально ${maxAgeValue.value}`, maxValue(maxAgeValue.value))
			}
		})
	}
}

const v$ = useVuelidate(rules, state, { $lazy: true, $autoDirty: true })
</script>

<style lang="scss" scoped>
.inputWrapp {
	margin-bottom: 0px;
}
.addChildrenListItem {
	margin-bottom: 10px;
	display: flex;
	align-items: flex-start;
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
.TitleFormChildren {
	margin: 0;
}
</style>

