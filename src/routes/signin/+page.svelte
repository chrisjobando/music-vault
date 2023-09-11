<script lang="ts">
	/**
	 * @description - Toggles password visibility
	 */
	let showPassword = false;
</script>

<div class="content-center justify-center p-8 bg-primary-500">
	<h1 class="text-5xl font-bold mb-16">Sign in to Music Vault</h1>

	<label class="label pb-4">
		<span>Email</span>
		<input
			class="input w-full py-3 px-3 pr-16"
			type="email"
			placeholder="john@example.com"
			autocomplete="email"
		/>
	</label>

	<label class="label">
		<span>Password</span>
		<div class="relative w-full">
			<div class="absolute inset-y-0 right-0 flex items-center px-2 z-10">
				<input id="toggle" class="hidden" type="checkbox" bind:checked={showPassword} />
				<label
					class="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 cursor-pointer w-12 flex justify-center"
					for="toggle">{showPassword ? 'Hide' : 'Show'}</label
				>
			</div>
			<input
				class="input appearance-none focus:outline-none w-full py-3 px-3 pr-16"
				type={showPassword ? 'text' : 'password'}
				placeholder="Password"
			/>
		</div>
	</label>
</div>
