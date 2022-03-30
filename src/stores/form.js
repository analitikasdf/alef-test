import { defineStore } from 'pinia'

export const useStore = defineStore('form', {
	state: () => {
		return {
			startId: 0,
			parentName: '',
			parentAge: '',
			childrens: {}
		}
	},
	// actions: {
	// 	setPerentName(name) {
	// 		this.parentName = name
	// 	},
	// 	setPerentAge(age) {
	// 		this.parentAge = age
	// 	}
	// }
	getters: {
		buttonVisible: state => Object.keys(state.childrens).length < 5
	}
})
