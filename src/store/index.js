import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		persons: []
	},
	mutations: {
		SET_PERSONS: (state, persons) => { state.persons = persons }
	},
	actions: {
		FETCH_PERSONS: ({ commit }) => {
			return new Promise((resolve, reject) => {
				axios.get('https://swapi.dev/api/people/')
				.then(resp => {
					if (resp.status == 200) {
						console.log(resp)
						resolve(resp.data.results)
					}
				})
			})
		}
	},
	getters: {
		PERSONS: (state) => { return state.persons }
	}
})
