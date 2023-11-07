<script lang="ts">
  // Forms
  import { enhance } from '$app/forms';
  import BaseButton from '$lib/components/BaseButton.svelte';
  // Components
  import { PageHeader } from '$lib/components';
  import { Alert, FileInput, Loader, SubmitButton, TextInput } from '$lib/components/forms';
  // Interfaces
  import type { IProfileErrors } from '$lib/schema/validationSchema';
  import type { IUserProfile } from '$lib/types';

  /**
   * @description Page data
   */
  export let data;

  const { userProfile } = data;

  /**
   * @description Form data
   */
  export let form;

  /**
   * @description Form values
   */
  const formValues: IUserProfile = {
    display_name: userProfile?.display_name ?? '',
    first_name: userProfile?.first_name ?? '',
    last_name: userProfile?.last_name !== null ? userProfile?.last_name ?? '' : '',
    avatar_url: userProfile?.avatar_url !== null ? userProfile?.avatar_url ?? '' : ''
  };

  let originalProfileValues = structuredClone(formValues);

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

  // Form Handler
  $: if (form) {
    // Success Handling
    if (form.success) {
      setLoadingState(false);
      clearFormErrors();
    } else {
      // Error Handling
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

  $: disableUpdate = JSON.stringify(originalProfileValues) === JSON.stringify(formValues);
</script>

<svelte:head>
  <title>Update Your Profile</title>
  <meta name="description" content="Update Music Vault Profile" />
</svelte:head>

{#if loading}
  <Loader bind:loading />
{/if}

<form
  method="POST"
  use:enhance={({ formData }) => {
    formData.set('original_profile', JSON.stringify(userProfile));
    return async ({ update }) => {
      originalProfileValues = structuredClone(formValues);
      await update({ reset: false });
    };
  }}
>
  <div class="mb-4">
    <a href="/profile">
      <BaseButton text="Back" />
    </a>
  </div>

  <PageHeader title="Update Profile" />

  {#if form && form.message.length > 0}
    <Alert
      time={5000}
      message={form.message}
      onDestroyCallback={() => {
        if (form) {
          form.message = '';
        }
      }}
    />
  {/if}

  <TextInput
    required
    top="lg"
    label="Username"
    name="display_name"
    placeholder="JohnDoe123"
    bind:value={formValues.display_name}
    bind:inputError={displayNameErrors}
  />

  <TextInput
    required
    top="sm"
    name="first_name"
    label="First Name"
    placeholder="John"
    autocomplete="given-name"
    bind:value={formValues.first_name}
    bind:inputError={firstNameErrors}
  />

  <TextInput
    top="sm"
    name="last_name"
    label="Last Name"
    placeholder="Doe"
    autocomplete="family-name"
    bind:value={formValues.last_name}
    bind:inputError={lastNameErrors}
  />

  <FileInput
    top="sm"
    name="avatar"
    label="Profile Image"
    bind:value={formValues.avatar_url}
    bind:inputError={avatarUrlErrors}
  />

  <SubmitButton
    top="lg"
    text="Update"
    onClick={() => setLoadingState(true)}
    bind:disabled={disableUpdate}
  />
</form>
