export default function ({ store, redirect }) {
	if (!store.state.user) {
		return redirect('/login')
	} else if (!store.state.user.admin) {
		return redirect('/home')
	}
}
