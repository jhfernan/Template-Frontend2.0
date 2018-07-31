<template>
	<v-container>
		<v-jumbotron color="grey lighten-2">
			<v-container fill-height>
				<v-layout align-center>
					<v-flex class="px-5">
						<h1 class="display-3">You have to be an admin to see this page</h1>
						<v-divider class="my-3"></v-divider>
						<v-btn color="primary" nuxt router to="/home">Back Home</v-btn>
					</v-flex>
				</v-layout>
			</v-container>
		</v-jumbotron>

		<v-card class="my-3">
			<v-card-text>
				<h1 class="title mb-2">All Users</h1>
				<div :key="i" v-for="(user, i) in users">
					<p>ID# {{ user.id }}: {{ user.name }}</p>
				</div>
			</v-card-text>
		</v-card>
	</v-container>
</template>

<script>
export default {
	middleware: 'adminRequired',
	asyncData ({ app, error }) {
		return app.$axios.$get('/api/v1/users')
		.then(res => {
			return { users: res }
		})
		.catch(err => {
			error({ statusCode: err.status, message: err.message })
		})
	}
}
</script>
