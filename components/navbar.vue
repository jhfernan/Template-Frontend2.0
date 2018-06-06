<template>
	<div>
		<v-toolbar app class="px-3" color="primary" dark :clipped-right="clipped" fixed>
			<v-toolbar-title>Front End Testing</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn class="hidden-md-and-down" exact flat :key="i" nuxt router :to="item.to" v-for="(item, i) in items">
				{{ item.name }}
			</v-btn>
			<v-btn class="hidden-md-and-down" exact flat nuxt router to="/login" v-if="!$store.state.user">Log In</v-btn>
			<v-btn class="hidden-md-and-down" flat @click="logout" v-else>Log Out</v-btn>
			<v-toolbar-side-icon class="hidden-lg-and-up" @click.native.stop="drawer = !drawer" />
		</v-toolbar>
		<v-navigation-drawer app class="hidden-lg-and-up" :clipped="clipped" fixed right v-model="drawer">
			<v-list>
				<v-list-tile exact :key="i" nuxt router :to="item.to" v-for="(item, i) in items">
					<v-list-tile-title>Home</v-list-tile-title>
				</v-list-tile>
				<v-list-tile exact nuxt router to="/login" v-if="!$store.state.user">
					<v-list-tile-title>Login</v-list-tile-title>
				</v-list-tile>
				<v-list-tile @click="logout" v-else>
					<v-list-tile-title>Logout</v-list-tile-title>
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>

<script>
export default {
	data () {
		return {
			clipped: true,
			drawer: false,
			items: [
				{ name: 'Home', to: '/' },
			],
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
