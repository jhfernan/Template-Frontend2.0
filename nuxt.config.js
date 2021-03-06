const config = require('./app.config')

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
			{ rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
		]
	},

	axios: {
		baseURL: config.baseURL,
		// credentials: true,
		// progress: true,
	},

	css: [
		'@/assets/style/app.styl',
	],

	// Customize the progress bar color
	loading: { color: '#3B8070' },

	modules: [
		'@nuxtjs/axios',
		['cookie-universal-nuxt', { alias: 'cookies' }],
	],

	plugins: [
		'~/plugins/axios',
		'~/plugins/vuetify',
	],

	router: { linkExactActiveClass: 'active', },

	// Build configuration
	build: {
		// Run ESLint on save
		extend (config, { isDev, isClient, isServer }) {
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
