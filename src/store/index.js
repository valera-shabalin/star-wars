import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		favorites: []
	},
	mutations: {
		SET_FAVORITE: (state, person) => {
			state.favorites.push(person)
			localStorage.setItem('favorites', JSON.stringify(state.favorites))
		},
		DELETE_FAVORITE: (state, index) => {
			state.favorites.splice(index, 1)
			localStorage.setItem('favorites', JSON.stringify(state.favorites))
		},
		INIT_FAVORITES: (state) => { 
			if (JSON.parse(localStorage.getItem('favorites'))) 
				state.favorites = JSON.parse(localStorage.getItem('favorites')) 
		}
	},
	actions: {
		FETCH_PERSONS: ({ commit }, { url }) => {
			return new Promise((resolve, reject) => {
				axios.get(url)
					.then(resp => {
						resp.status == 200 ? resolve(resp.data) : reject()
					})
					.catch(err => { reject(err) })
			})
		},
		ADD_CARD: ({ commit, state }, person) => {
			return new Promise((resolve, reject) => {
				for (let i = 0; i < state.favorites.length; i++) {
					if (state.favorites[i].url == person.url) {
						commit('DELETE_FAVORITE', i)
						return
					}
				}
				commit('SET_FAVORITE', person)
				resolve()
			})
		}
	},
	getters: {
		FAVORITES: (state) => { return state.favorites }
	}
})
