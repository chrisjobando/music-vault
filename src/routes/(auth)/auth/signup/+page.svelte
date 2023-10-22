<script lang="ts">
  // Forms
  import { enhance } from '$app/forms';
  // Components
  import { Alert, EmailInput, Loader, PasswordInput, SubmitButton } from '$lib/components/forms';
  // Interfaces
  import type { IAuthSignUpErrors } from '$lib/schema/validationSchema.js';

  /**
   * @description Form data
   */
  export let form;

  let formErrors: IAuthSignUpErrors | undefined;
  let emailErrors: string | undefined;
  let passwordErrors: string | undefined;
  let confirmPasswordErrors: string | undefined;

  function clearFormErrors() {
    formErrors = undefined;
    emailErrors = undefined;
    passwordErrors = undefined;
    confirmPasswordErrors = undefined;
  }

  /**
   * @description Loading state
   */
  let loading = false;

  function setLoadingState(state: boolean) {
    loading = state;
  }

  let formEmail = '';

  $: if (form) {
    if (form.success) {
      setLoadingState(false);
      clearFormErrors();
    } else {
      if ('email' in form && form.email) {
        setLoadingState(false);
        let returnEmail = form.email as string;
        if (formEmail !== returnEmail) {
          formEmail = returnEmail;
        }
        form.email = undefined;
      }

      if ('errors' in form && form.errors) {
        setLoadingState(false);
        formErrors = form.errors as IAuthSignUpErrors;
        emailErrors = formErrors.email;
        passwordErrors = formErrors.password;
        confirmPasswordErrors = formErrors.confirm_password;
        form.errors = undefined;
      }
    }
  }
</script>

<svelte:head>
  <title>Sign up for Music Vault</title>
  <meta name="description" content="Sign up for Music Vault" />
</svelte:head>

{#if loading}
  <Loader bind:loading />
{/if}

<div class="text-center md:order-2">Image</div>

<form
  method="POST"
  class="pageContainer"
  use:enhance={() => {
    return async ({ update }) => {
      await update({ reset: false });
    };
  }}
>
  <div>
    <h1 class="py-8">Sign up</h1>
    <hr />
  </div>

  {#if form && form.message.length > 0}
    <Alert
      time={5000}
      message={form.message}
      type={form.success ? 'success' : 'warning'}
      onDestroyCallback={() => {
        if (form) {
          form.message = '';
        }
      }}
    />
  {/if}

  <div>
    <EmailInput required bind:value={formEmail} bind:inputError={emailErrors} />

    <PasswordInput required bind:inputError={passwordErrors} />

    <PasswordInput
      required
      name="confirm_password"
      label="Confirm Password"
      bind:inputError={confirmPasswordErrors}
    />

    <SubmitButton text="Sign up" onClick={() => setLoadingState(true)} />
  </div>

  <hr />

  <p>
    Already have an account? <a
      class="font-bold"
      href="/auth/signin"
      data-sveltekit-preload-data="tap">Sign in to your account</a
    >
  </p>
</form>
