export default function ({ store, redirect }) {
	if (!store.getters['loggedIn']) {
		return redirect('/login')
	} else if (!store.state.user.admin) {
		return redirect('/home')
	}
}
