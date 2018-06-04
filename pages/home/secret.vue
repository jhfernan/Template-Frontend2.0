<template>
	<div class="container mt-5">
		<div class="jumbotron text-center">
			<h1 class="display-3">You have to be an admin to see this page</h1>
			<h1>Welcome {{ $store.state.user.name }}</h1>
			<p>your id is {{ $store.state.user.id }}</p>
		</div>
	</div>
</template>

<script>
export default {
	middleware: 'adminRequired',
}
</script>
