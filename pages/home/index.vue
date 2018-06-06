<template>
	<v-container>
		<v-jumbotron color="grey lighten-2">
			<v-container fill-height>
				<v-layout align-center>
					<v-flex class="px-5">
						<h1 class="display-3">You are in the backend!</h1>
						<span class="subheading">Welcome {{ $store.state.user.name }}</span>
						<v-divider class="my-3"></v-divider>
						<div class="title mb-3">your id is {{ $store.state.user.id }}</div>
						<v-btn class="mx-0" color="primary" nuxt router to="/home/secret">See more</v-btn>
					</v-flex>
				</v-layout>
			</v-container>
		</v-jumbotron>
	</v-container>
</template>

<script>
export default {
	middleware: 'authRequired',
}
</script>
