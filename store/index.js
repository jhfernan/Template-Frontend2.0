// import Cookie from 'cookie'
// import Cookies from 'js-cookie'

export const state = () => ({
	user: null,
})

export const mutations = {
	set_user (state, user) {
		state.user = user
	},
}

// export const getters = {
// 	loggedIn (state) {
// 		return Boolean(state.user && state.token)
// 	}
// }

export const actions = {
	// async nuxtServerInit ({ dispatch }, { req }) {
	// 	if (req.headers.cookie) {
	// 		let token = Cookie.parse(req.headers.cookie).authToken
	// 		await dispatch('fetch', token)
	// 	}
	// },

	// async fetch ({ dispatch }, token) {
	// 	try {
	// 		let data = await this.$axios.$get('/api/authenticate')
	// 		if (data.id) {
	// 			await dispatch('set', { user: data, token: token })
	// 		} else {
	// 			await dispatch('reset')
	// 		}
	// 	} catch (err) {
	// 		await dispatch('reset')
	// 	}
	// },

	// Set
	// async set ({ commit, dispatch }, data) {
	// 	commit('set_user', data.user)
	// 	dispatch('setToken', data.token)
	// },

	// async setToken ({ commit, dispatch }, token) {
	// 	this.$axios.defaults.headers.common['Authorization'] = token
	// 	Cookies.set('authToken', token)
	// 	commit('set_token', token)
	// },

	// Reset
	// async reset ({ commit }) {
	// 	commit('set_user', null)
	// 	commit('set_token', null)
	// 	delete this.$axios.defaults.headers.common['Authorization']
	// 	Cookies.remove('authToken')
	// },

	// Login
	async login ({ dispatch }, fields) {
		try {
			let data = await this.$axios.$post('/api/authenticate', fields)
			await dispatch('set', data)
		} catch (err) {
			if (err.response && err.response.status === 401) {
				throw new Error('Bad credentials')
			}
			throw err
		}
	},

	// Logout
	// async logout ({ dispatch }) {
	// 	try {
	// 		await dispatch('reset')
	// 	} catch (err) {
	// 		console.error('Error while logging out', err)
	// 	}
	// }

}
