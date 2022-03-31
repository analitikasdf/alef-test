
<template>
	<div class="page">
		<div class="personalData">
			<h2 class="TitleForm">Персональные данные</h2>
			<div class="inputWrapp">
				<input v-model="name" type="text" />
				<span class="placeholder">Имя</span>
				<div v-if="v$.name.$dirty && !v$.name.required.$response">{{ v$.name.required.$message }}</div>
				<div v-if="v$.name.$dirty && !v$.name.minLength.$response">{{ v$.name.minLength.$message }}</div>
			</div>
			<div class="inputWrapp">
				<input v-model="age" type="number" />
				<span class="placeholder">Возраст</span>
				<div v-if="v$.age.$dirty && !v$.age.required.$response">{{ v$.age.required.$message }}</div>
				<div v-if="v$.age.$dirty && !v$.age.maxValue.$response">{{ v$.age.maxValue.$message }}</div>
			</div>
		</div>
		<div class="addChildren">
			<ChildrensList ref="listRef" />
		</div>
		<button @click="submitForm" class="buttonSave" :class="{ disabled: v$.$error || !v$.$dirty }">Сохранить</button>
		<div v-if="errorAll">Проверте правильность запрлнения полей</div>
	</div>
</template>

<script setup>
import ChildrensList from '../components/ChildrensList.vue'
import { ref, computed, onMounted } from 'vue'
import { useStore } from '@/stores/form'
import useVuelidate from '@vuelidate/core'
import { required, minLength, maxValue, helpers } from '@vuelidate/validators'

onMounted(() => {
	name.value = store.parentName
	age.value = store.parentAge
})

const store = useStore()

const name = ref('')
const age = ref('')
const errorAll = ref(false)
const listRef = ref(null)

const requiredNameLength = ref(3)
const maxAgeValue = ref(99)
const rules = computed(() => ({
	name: {
		required: helpers.withMessage('Поле не должно быть пустым', required),
		minLength: helpers.withMessage(`Минимальная длинна ${requiredNameLength.value} символа`, minLength(requiredNameLength.value))
	},
	age: {
		required: helpers.withMessage('Поле не должно быть пустым', required),
		maxValue: helpers.withMessage(`Максимально ${maxAgeValue.value}`, maxValue(maxAgeValue.value))
	}
}))

const v$ = useVuelidate(rules, { name, age }, { $lazy: true, $autoDirty: true })

const submitForm = async () => {
	const isFormCorrect = await v$.value.$validate()
	// console.log(isFormCorrect, 'isFormCorrect')
	isFormCorrect ? setParent() : (errorAll.value = true)
}
const setParent = () => {
	store.parentName = name.value
	store.parentAge = age.value
	errorAll.value = false
	listRef.value.setChildren()
}
</script>

<style lang="scss" scoped>
.personalData {
	margin-bottom: 20px;
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
	transition: all 0.5s ease;
}

.disabled {
	opacity: 0.5;
}
</style>


