<template>
	<v-container>
		<h1>Hello World</h1>
	</v-container>
</template>

<script>
export default {
	head () {
		return {
			title: 'Welcome to Example Frontend',
		}
	},
	middleware: 'loggedIn',
}
</script>
