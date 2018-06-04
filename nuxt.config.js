module.exports = {
	// Headers of the page
	head: {
		title: 'frontend2.0',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Nuxt.js project' }
		],
		link: [
			// { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css', integrity: 'sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4', crossorigin: 'anonymous' },
			{ src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js', integrity: 'sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo', crossorigin: 'anonymous' },
			{ src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js', integrity: 'sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ', crossorigin: 'anonymous' },
			{ src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js', integrity: 'sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm', crossorigin: 'anonymous' },
		]
	},
	// Customize the progress bar color
	loading: { color: '#3B8070' },
	modules: [
		'@nuxtjs/axios',
	],
	axios: {
		baseURL: 'http://localhost:8000',
		// credentials: true,
		// progress: true,
	},

	plugins: [
		'~/plugins/axios',
	],

	router: { linkExactActiveClass: 'active', },
	// Build configuration
	build: {
		// Run ESLint on save
		extend (config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		}
	}
}
