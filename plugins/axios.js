export default function ({ $axios, app, store, redirect }) {
	$axios.onRequest(config => {
		if (app.$cookies.get('auth')) {
			config.headers.common['Authorization'] = app.$cookies.get('auth')
		}
		console.log('Making request to ' + config.url)
	})
}
