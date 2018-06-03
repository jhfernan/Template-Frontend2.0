<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
		<div class="container">
			<nuxt-link class="navbar-brand" to="/" exact>Front End Testing</nuxt-link>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div class="navbar-nav">
					<nuxt-link class="nav-item nav-link" to="/login" exact>Log In</nuxt-link>
				</div>
			</div>
		</div>
	</nav>
</template>
