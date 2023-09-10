<script>
	// Components
	import { AppRail, AppRailTile } from '@skeletonlabs/skeleton';

	/**
	 * @type {number}
	 * @description The current tile index
	 */
	let currentTile = 0;
</script>

<AppRail>
	<AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">Tile 1</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">Tile 2</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3">Tile 3</AppRailTile>
</AppRail>
