<script>
	// Global CSS
	import '../app.postcss';

	// Skeleton UI
	import { AppShell, autoModeWatcher, storePopup } from '@skeletonlabs/skeleton';

	// Components
	import { HeaderComponent, SideBarComponent } from '$lib/components';

	// Floating UI for Popups
	import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
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

	<svelte:fragment slot="pageHeader">Page Header</svelte:fragment>

	<slot />

	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
</AppShell>
