<script>
	import { enhance } from '$app/forms';
	export let form;
</script>

<form method="post" use:enhance>
	<input name="email" value={form?.values.email ?? ''} />
	<input type="password" name="password" />
	<button>Sign in</button>
</form>
