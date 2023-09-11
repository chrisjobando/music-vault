<script lang="ts">
	// Components
	import { AppRail, AppRailTile } from '@skeletonlabs/skeleton';

	/**
	 * @description The current tile index
	 */
	let currentTile = 0;
</script>

<AppRail>
	<AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1"
		>Collection</AppRailTile
	>
	<AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">Rotation</AppRailTile
	>
	<AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3"
		>Experience</AppRailTile
	>
	<AppRailTile bind:group={currentTile} name="tile-4" value={3} title="tile-4">Engage</AppRailTile>
</AppRail>
