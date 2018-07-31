export default function ({ $axios, app, store, redirect }) {
	$axios.onRequest(config => {
		if (app.$cookies.get('auth')) {
			config.headers.common['Authorization'] = app.$cookies.get('auth')
		}
		console.log('Making request to ' + config.url)
	})

	$axios.onResponseError(err => {
		if (err.response.status === 401 || err.response.status === 403) {
			store.dispatch('reset')
		} else if (err.response.status === 403) {
			store.dispatch('reset')
			redirect('/login')
		}
	})
}
