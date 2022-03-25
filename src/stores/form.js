import { defineStore } from 'pinia'

export const useStore = defineStore('form', {
	state: () => {
		return {
			startId: 0,
			parentName: '',
			parentAge: null,
			childrens: {}
		}
	},
	actions: {
		setPerentName(name) {
			this.parentName = name
		},
		setPerentAge(age) {
			this.parentAge = age
		},
		addChildren() {
			if (Object.keys(this.childrens).length < 5) {
				this.startId++
				this.childrens = { ...this.childrens, [this.startId]: { name: '', age: null } }
			}
		},
		removeChildren(id) {
			console.log(this.childrens[id])
			delete this.childrens[id]
		}
	},
	getters: {
		buttonVisible: state => Object.keys(state.childrens).length < 5
	}
})
