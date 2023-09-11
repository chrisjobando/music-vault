<script>
	// Global CSS
	import '../app.postcss';

	// Skeleton UI
	import { AppShell, autoModeWatcher, storePopup } from '@skeletonlabs/skeleton';

	// Svelte
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	// Components
	import { HeaderComponent, SideBarComponent } from '$lib/components';

	// Floating UI for Popups
	import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	/**
	 * @type {{ supabase: import('@supabase/supabase-js').SupabaseClient<import('../DatabaseDefinitions')>; session: import('@supabase/supabase-js').Session }}
	 */
	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((_event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
	});
</script>

<!-- Set's website theme to match the user's OS theme. -->
<svelte:head
	>{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}</svelte:head
>

<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">
	<svelte:fragment slot="header">
		<HeaderComponent />
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<SideBarComponent />
	</svelte:fragment>

	<svelte:fragment slot="pageHeader"><h1>Page Header</h1></svelte:fragment>

	<slot />

	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
</AppShell>
