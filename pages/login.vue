<template>
	<v-container fluid fill-height>
		<v-layout align-center justify-center>
			<v-flex xs12 sm8 md6 lg4>
				<v-card class="elevation-12">
					<v-toolbar color="primary" dark dense>
						<v-toolbar-title>Login form</v-toolbar-title>
					</v-toolbar>
					<v-card-text>
						<v-alert class="mb-3" :value="err" type="error">
							{{ err }}
						</v-alert>
						<v-form @submit.prevent="login">
							<v-text-field prepend-icon="person" label="Username" type="text" v-model="form.username"></v-text-field>
							<v-text-field prepend-icon="lock" label="Password" type="password" v-model="form.password"></v-text-field>
						</v-form>
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn type="submit" color="primary" @click="login">Login</v-btn>
					</v-card-actions>
				</v-card>

			</v-flex>
		</v-layout>
	</v-container>

</template>

<script>
export default {
	data () {
		return {
			err: null,
			form: {},
		}
	},
	head () {
		return {
			title: 'Log In',
		}
	},
	methods: {
		async login () {
			try {
				await this.$store.dispatch('login', this.form)
				this.$router.push('/home')
			} catch (err) {
				this.err = 'Error ' + err.response.status + ': ' + err.response.data
			}
		}
	},
	middleware: 'loggedIn',
}
</script>
