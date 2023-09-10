<script>
	// Global CSS
	import '../app.postcss';
	// Skeleton UI
	import { AppBar, AppShell, storePopup } from '@skeletonlabs/skeleton';
	// Floating UI for Popups
	import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">
	<svelte:fragment slot="header">
		<AppBar>
			<div slot="lead">NavIcon</div>
			<div>Title</div>
			<div slot="trail">Avatar</div>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment>

	<svelte:fragment slot="pageHeader">Page Header</svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
</AppShell>
