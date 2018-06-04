<template>
	<div class="container mt-5">
		<div class="text-center" v-if="$store.state.user">
			<h1 class="display-3">You are in the backend!</h1>
			<h1>Welcome {{ $store.state.user.name }}</h1>
			<p>your id is {{ $store.state.user.id }}</p>
		</div>
	</div>
</template>

<script>
export default {
	middleware: 'authRequired',
}
</script>
