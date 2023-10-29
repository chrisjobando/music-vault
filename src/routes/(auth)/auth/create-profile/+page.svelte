<script lang="ts">
  // Forms
  import { enhance } from '$app/forms';
  // Components
  import { Loader, SubmitButton, TextInput } from '$lib/components/forms';
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

<div>Image</div>

<form method="POST" use:enhance>
  <div>
    <h1>Create your profile</h1>
    <hr />
  </div>

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

    <TextInput
      name="avatar_url"
      label="Avatar URL"
      placeholder="https://picsum.photos/100"
      bind:inputError={avatarUrlErrors}
    />

    <SubmitButton text="Create profile" onClick={() => setLoadingState(true)} />
  </div>
</form>
