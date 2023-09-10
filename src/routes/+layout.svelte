<script>
	// Global CSS
	import '../app.postcss';
	// Skeleton UI
	import { AppBar, AppRail, AppRailTile, AppShell, storePopup } from '@skeletonlabs/skeleton';
	// Floating UI for Popups
	import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	/**
	 * @type {number}
	 * @description The current tile index
	 */
	let currentTile = 0;
</script>

<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">
	<svelte:fragment slot="header">
		<AppBar>
			<div slot="lead">NavIcon</div>
			<div>Title</div>
			<div slot="trail">Avatar</div>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<AppRail>
			<AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1"
				>Tile 1</AppRailTile
			>
			<AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2"
				>Tile 2</AppRailTile
			>
			<AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3"
				>Tile 3</AppRailTile
			>
		</AppRail>
	</svelte:fragment>

	<svelte:fragment slot="pageHeader">Page Header</svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
</AppShell>
