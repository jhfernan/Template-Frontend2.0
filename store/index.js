import Cookie from 'cookie'
import Cookies from 'js-cookie'

export const state = () => ({
	user: null,
})

export const mutations = {
	set_user (state, user) {
		state.user = user
	},
}

export const actions = {
	async nuxtServerInit ({ dispatch }, { req }) {
		if (req.headers.cookie) {
			let token = Cookie.parse(req.headers.cookie).auth
			if (token) {
				await dispatch('setToken', token)
				dispatch('fetch', token)
			}
		}
	},

	async fetch ({ dispatch }, token) {
		try {
			let data = await this.$axios.$get('/api/authenticate')
			if (data.user) {
				await dispatch('set', { user: data, token: null })
			} else {
				await dispatch('reset')
			}
		} catch (err) {
			await dispatch('reset')
		}
	},

	// Login
	async login ({ dispatch }, fields) {
		try {
			let data = await this.$axios.$post('/api/authenticate', fields)
			await dispatch('set', data)
		} catch (err) {
			throw err
		}
	},

	// Reset
	async reset ({ commit }) {
		commit('set_user', null)
		delete this.$axios.defaults.headers.common['Authorization']
		Cookies.remove('auth')
	},

	// Set
	async set ({ commit, dispatch }, data) {
		commit('set_user', data.user)
		if (data.token) {
			dispatch('setAuth', data.token)
			Cookies.set('auth', data.token)
		}
	},

	// Set the token
	async setAuth ({ commit }, token) {
		this.$axios.defaults.headers.common['Authorization'] = token
	},

	// Logout
	async logout ({ dispatch }) {
		try {
			await dispatch('reset')
		} catch (err) {
			console.error('Error while logging out', err)
		}
	}

}
