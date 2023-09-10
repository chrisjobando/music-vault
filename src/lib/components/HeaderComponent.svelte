<script>
	// Components
	import { AppBar, Avatar } from '@skeletonlabs/skeleton';

	/**
	 * @type {string}
	 * @description The fallback initials for the avatar
	 */
	const fallbackInitials = 'CO';
</script>

<AppBar>
	<div slot="lead">AppIcon</div>
	<div>Title</div>
	<div slot="trail">
		<Avatar
			width="w-8"
			cursor="cursor-pointer"
			initials={fallbackInitials}
			background="bg-tertiary-500"
			border="border-4 border-surface-300-600-token hover:!border-primary-500"
		/>
	</div>
</AppBar>
