let config = {
	baseURL: 'http://localhost:8000'
}

if (process.env.NODE_ENV == 'production') {
	config.baseURL = process.env.BASE_URL
}

module.exports = config
