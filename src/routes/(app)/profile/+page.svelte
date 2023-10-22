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

<div class="pageContainer">
  <PageHeader title="Profile" />

  {#if userProfile}
    <div class="mx-auto flex flex-col items-center">
      <Avatar size="large" {userProfile} />
      <p class="mt-4"><span>Username:</span> {userProfile.display_name}</p>
      <p class="mt-2"><span>Name:</span> {getUserFullName(userProfile)}</p>
    </div>

    <hr />
  {/if}

  <div class="flex flex-wrap justify-center md:flex-nowrap md:justify-between">
    <a href="/profile/update">
      <BaseButton text="Update profile" buttonColor="info" classes="w-64" />
    </a>

    <form method="POST" action="/auth/signout" use:enhance>
      <BaseButton buttonType="submit" text="Sign out" buttonColor="warning" classes="w-64" />
    </form>
  </div>
</div>
