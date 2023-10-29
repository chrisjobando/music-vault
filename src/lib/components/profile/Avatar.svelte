<script lang="ts">
  // Interfaces
  import type { IProfiles } from '$lib/types';
  // Utils
  import { getUserInitials } from './utils';

  // Props
  /**
   * @description User's account data
   */
  export let userProfile: Omit<IProfiles, 'created_at' | 'display_name' | 'id' | 'user_id'>;

  const userInitials = getUserInitials(userProfile.first_name, userProfile.last_name);
</script>

{#if !userProfile.avatar_url}
  <div>
    <p>{userInitials}</p>
  </div>
{:else}
  <img src={userProfile.avatar_url} alt="User's Avatar" />
{/if}
