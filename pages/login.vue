<template>
	<section class="container mt-5">
		<h1 class="text-center mb-3">Log In</h1>
		<div class="row justify-content-center">
			<div class="col-xs-10 col-md-4">
				<div class="card">
					<div class="card-body">
						<form @submit.prevent="login">
							<div class="alert alert-danger" role="alert" v-if="err">
								{{ err }}
							</div>
							<div class="form-group">
								<label>Username</label>
								<input type="text" class="form-control" placeholder="Username" v-model="form.username">
							</div>
							<div class="form-group">
								<label>Password</label>
								<input type="password" class="form-control" placeholder="Password" v-model="form.password">
							</div>
							<button type="submit" class="btn btn-primary">Submit</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
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
			bodyAttrs: { class: 'login' },
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

<style>
html body.login {
	background-color: #F2F2F2;
}
</style>
