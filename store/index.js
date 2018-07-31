
export const state = () => ({
	user: null,
})

export const mutations = {
	set_user (state, user) {
		state.user = user
	},
}

export const getters = {
	loggedIn (state) {
		return Boolean(state.user)
	}
}

export const actions = {
	async nuxtServerInit ({ commit }, { app, req }) {
		if (req.headers.cookie) {
			let token = app.$cookies.get('auth')
			if (token) {
				app.$axios.defaults.headers.common['Authorization'] = token
				try {
					let user = await app.$axios.$get('/api/authenticate')
					commit('set_user', user)
				} catch (err) {
					dispatch('reset')
				}
			}
		}
	},

	// Login
	async login ({ commit, dispatch }, fields) {
		try {
			let data = await this.$axios.$post('/api/authenticate', fields)
			await dispatch('setToken', data.token)
			commit('set_user', data.user)
		} catch (err) {
			throw err
		}
	},

	// Logout
	async logout ({ dispatch }) {
		try {
			await dispatch('reset')
		} catch (err) {
			console.error('Error while logging out', err)
		}
	},

	// Reset
	async reset ({ commit }) {
		commit('set_user', null)
		delete this.$axios.defaults.headers.common['Authorization']
		this.$cookies.remove('auth')
	},

	// Set Token
	async setToken({ commit }, token) {
		this.$axios.defaults.headers.common['Authorization'] = token
		if (process.browser) {
			this.$cookies.set('auth', token)
		}
	},

}
