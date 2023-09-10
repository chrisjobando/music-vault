<script>
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { AppShell, storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>


<AppShell>
	<svelte:fragment slot="header">Header</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment>
	<svelte:fragment slot="pageHeader">Page Header</svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
</AppShell>
