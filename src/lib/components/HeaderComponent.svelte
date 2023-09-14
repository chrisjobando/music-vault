<script lang="ts">
  // Components
  import { AppBar, Avatar } from '@skeletonlabs/skeleton';

  /**
   * @description User's account data
   */
  export let userAccount: {
    id: string;
    display_name: string;
    first_name: string;
    last_name: string | null;
    avatar_url: string | null;
    user_id: string;
  } | null;

  /**
   * @description The fallback initials for the avatar
   */
  const fallbackInitials = userAccount
    ? userAccount.first_name[0] + (userAccount.last_name?.[0] ?? '')
    : 'CO';
</script>

<AppBar>
  <div slot="lead">AppIcon</div>
  <div>Music Vault</div>
  <div slot="trail">
    {#if userAccount}
      <Avatar
        width="w-8"
        cursor="cursor-pointer"
        initials={fallbackInitials}
        background="bg-tertiary-500"
        src={userAccount.avatar_url ?? undefined}
      />
    {/if}
  </div>
</AppBar>
