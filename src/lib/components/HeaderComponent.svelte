<script lang="ts">
  // Components
  import { AppBar, Avatar } from '@skeletonlabs/skeleton';
  // Interfaces
  import type { Profiles } from '$lib/utils';

  /**
   * @description User's account data
   */
  export let userProfile: Profiles | null;

  /**
   * @description The fallback initials for the avatar
   */
  const fallbackInitials = userProfile
    ? userProfile.first_name[0] + (userProfile.last_name?.[0] ?? '')
    : 'CO';
</script>

<AppBar>
  <div slot="lead">AppIcon</div>
  <div>Music Vault</div>
  <div slot="trail">
    {#if userProfile}
      <Avatar
        width="w-8"
        cursor="cursor-pointer"
        initials={fallbackInitials}
        background="bg-tertiary-500"
        src={userProfile.avatar_url ?? undefined}
      />
    {/if}
  </div>
</AppBar>
