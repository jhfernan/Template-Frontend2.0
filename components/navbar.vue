<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
		<div class="container">
			<nuxt-link class="navbar-brand" to="/" exact>Front End Testing</nuxt-link>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div class="navbar-nav">
					<nuxt-link class="nav-item nav-link" to="/login" v-if="!$store.state.user" exact>Log In</nuxt-link>
					<nuxt-link class="nav-item nav-link" to="/home/secret" v-if="$store.state.user" exact>Dat Secret Page</nuxt-link>
					<p class="nav-item nav-link mb-0" v-if="$store.state.user" @click="logout">Log Out</p>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	head () {
		return {
			title: 'The Awesome Backend'
		}
	},
	methods: {
		logout() {
			this.$store.dispatch('logout')
			this.$router.push('/login')
		},
	}
}
</script>
