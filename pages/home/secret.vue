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
	</v-container>
</template>

<script>
export default {
	middleware: 'adminRequired',
}
</script>
