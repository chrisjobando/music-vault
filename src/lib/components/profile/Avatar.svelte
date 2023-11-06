<script lang="ts">
  // Interfaces
  import type { IProfiles } from '$lib/types';
  // Utils
  import cx from 'classnames';
  import { getUserInitials } from './utils';

  // Props
  /**
   * @description Avatar size
   * @default 'md'
   */
  export let size: 'xs' | 'sm' | 'md' | 'lg' = 'md';

  /**
   * @description User's account data
   */
  export let userProfile: Omit<IProfiles, 'created_at' | 'display_name' | 'id' | 'user_id'>;

  const userInitials = getUserInitials(userProfile.first_name, userProfile.last_name);
</script>

{#if !userProfile.avatar_url}
  <div class="avatar placeholder">
    <div
      class={cx('rounded-full bg-neutral-focus text-neutral-content', {
        'w-10': size === 'xs',
        'w-12': size === 'sm',
        'w-16': size === 'md',
        'w-24': size === 'lg'
      })}
    >
      <span
        class={cx({
          'text-xs': size === 'xs',
          'text-xl': size === 'md',
          'text-3xl': size === 'lg'
        })}>{userInitials}</span
      >
    </div>
  </div>
{:else}
  <div class="avatar">
    <div
      class={cx('rounded-full ring ring-primary ring-offset-2 ring-offset-base-100', {
        'w-12': size === 'sm',
        'w-16': size === 'md',
        'w-24': size === 'lg'
      })}
    >
      <img src={userProfile.avatar_url} alt="User's Avatar" />
    </div>
  </div>
{/if}
