<script>
  // Forms
  import { enhance } from '$app/forms';
  // Components
  import { BaseButton, PageHeader } from '$lib/components';
  import { Avatar } from '$lib/components/profile';
  // Utils
  import { getUserFullName } from '$lib/utils';

  /**
   * @description Page data
   */
  export let data;

  const { userProfile } = data;
</script>

<svelte:head>
  <title>Your Profile</title>
  <meta name="description" content="Music Vault Profile" />
</svelte:head>

<div>
  <PageHeader title="Profile" />

  {#if userProfile}
    <div class="my-4 flex flex-col items-center">
      <Avatar size="lg" {userProfile} />
      <p class="mt-4"><span>Username:</span> {userProfile.display_name}</p>
      <p><span>Name:</span> {getUserFullName(userProfile)}</p>
    </div>

    <hr />
  {/if}

  <div class="mt-4 flex justify-between">
    <a href="/profile/update">
      <BaseButton text="Update profile" buttonColor="info" />
    </a>

    <form method="POST" action="/auth/signout" use:enhance>
      <BaseButton buttonType="submit" text="Sign out" buttonColor="warning" />
    </form>
  </div>
</div>
