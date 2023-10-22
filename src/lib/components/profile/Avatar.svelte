<script lang="ts">
  // Interfaces
  import type { IUserProfile } from '$lib/types';
  // Utils
  import { getUserInitials } from './utils';

  // Props
  /**
   * @description User's account data
   */
  export let userProfile: Omit<IUserProfile, 'display_name'>;

  /**
   * @description Avatar Size
   */
  export let size: 'small' | 'medium' | 'large' = 'medium';

  // Variables
  const sizeClasses = {
    small: 'h-6 w-6',
    medium: 'h-12 w-12',
    large: 'h-24 w-24'
  };

  const initialsClasses = {
    small: 'text-xs',
    medium: 'text-md',
    large: 'text-3xl'
  };

  const classes = sizeClasses[size];
  const textClasses = initialsClasses[size];

  const userInitials = getUserInitials(userProfile.first_name, userProfile.last_name);
</script>

{#if !userProfile.avatar_url}
  <div class="flex items-center justify-center rounded-full bg-primary {classes}">
    <p class={textClasses}>{userInitials}</p>
  </div>
{:else}
  <img src={userProfile.avatar_url} alt="User's Avatar" class="rounded-full {classes}" />
{/if}
