import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		persons: [],
		count: 0
	},
	mutations: {
		SET_PERSONS: (state, persons) => { state.persons = persons },
		SET_COUNT: (state, count) => { state.count = count }
	},
	actions: {
		FETCH_PERSONS: ({ commit }, { url }) => {
			return new Promise((resolve, reject) => {
				axios.get(url)
				.then(resp => {
					if (resp.status == 200) {
						commit('SET_COUNT', parseInt(resp.data.count))
						resolve(resp.data.results)
					}
				})
			})
		}
	},
	getters: {
		PERSONS: (state) => { return state.persons },
		COUNT: (state) => { return state.count }
	}
})
