<script lang="ts">
  // Forms
  import { enhance } from '$app/forms';
  // Components
  import { Loader, SubmitButton, TextInput } from '$lib/components/forms';
  import FileInput from '$lib/components/forms/FileInput.svelte';
  // Interfaces
  import type { IProfileErrors } from '$lib/schema/validationSchema.js';

  /**
   * @description Form data
   */
  export let form;

  let formErrors: IProfileErrors | undefined;
  let displayNameErrors: string | undefined;
  let firstNameErrors: string | undefined;
  let lastNameErrors: string | undefined;
  let avatarUrlErrors: string | undefined;

  function clearFormErrors() {
    formErrors = undefined;
    displayNameErrors = undefined;
    firstNameErrors = undefined;
    lastNameErrors = undefined;
    avatarUrlErrors = undefined;
  }

  /**
   * @description Loading state
   */
  let loading = false;

  function setLoadingState(state: boolean) {
    loading = state;
  }

  $: if (form) {
    if (form.success) {
      setLoadingState(false);
      clearFormErrors();
    } else {
      if ('errors' in form && form.errors) {
        setLoadingState(false);
        formErrors = form.errors as IProfileErrors;
        displayNameErrors = formErrors.display_name;
        firstNameErrors = formErrors.first_name;
        lastNameErrors = formErrors.last_name;
        avatarUrlErrors = formErrors.avatar_url;
        form.errors = undefined;
      }
    }
  }
</script>

<svelte:head>
  <title>Create Your Profile</title>
  <meta name="description" content="Create Music Vault Profile" />
</svelte:head>

{#if loading}
  <Loader bind:loading />
{/if}

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse lg:gap-10">
    <img alt="Music Match Landing" src="https://placehold.co/400" />

    <div class="card w-full max-w-lg flex-shrink-0 bg-base-100 shadow-2xl">
      <form method="POST" class="card-body" use:enhance>
        <h1 class="mt-4">Create your profile</h1>

        <div class="divider" />

        <div>
          <TextInput
            required
            label="Username"
            name="display_name"
            placeholder="JohnDoe123"
            bind:inputError={displayNameErrors}
          />

          <TextInput
            required
            name="first_name"
            label="First Name"
            placeholder="John"
            autocomplete="given-name"
            bind:inputError={firstNameErrors}
          />

          <TextInput
            name="last_name"
            label="Last Name"
            placeholder="Doe"
            autocomplete="family-name"
            bind:inputError={lastNameErrors}
          />

          <FileInput name="avatar" label="Profile Image" bind:inputError={avatarUrlErrors} />

          <SubmitButton top="lg" text="Create profile" onClick={() => setLoadingState(true)} />
        </div>
      </form>
    </div>
  </div>
</div>
