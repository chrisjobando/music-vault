<script lang="ts">
  // Forms
  import { enhance } from '$app/forms';
  // Components
  import { Alert, EmailInput, Loader, PasswordInput, SubmitButton } from '$lib/components/forms';
  // Interfaces
  import type { IAuthSignInErrors } from '$lib/schema/validationSchema.js';

  /**
   * @description Form data
   */
  export let form;

  let formErrors: IAuthSignInErrors | undefined;
  let emailErrors: string | undefined;
  let passwordErrors: string | undefined;

  function clearFormErrors() {
    formErrors = undefined;
    emailErrors = undefined;
    passwordErrors = undefined;
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
        formErrors = form.errors as IAuthSignInErrors;
        emailErrors = formErrors.email;
        passwordErrors = formErrors.password;
        form.errors = undefined;
      }
    }
  }
</script>

<svelte:head>
  <title>Sign in to Music Vault</title>
  <meta name="description" content="Sign in to Music Vault" />
</svelte:head>

{#if loading}
  <Loader bind:loading />
{/if}

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse lg:gap-10">
    <img alt="Music Match Landing" src="https://placehold.co/400" />

    <div class="card w-full max-w-lg flex-shrink-0 bg-base-100 shadow-2xl">
      <form
        method="POST"
        class="card-body"
        use:enhance={() => {
          return async ({ update }) => {
            await update({ reset: false });
          };
        }}
      >
        <h1 class="mt-4">Sign in</h1>

        <div class="divider" />

        {#if form && form.message.length > 0}
          <Alert
            time={51000000}
            message={form.message}
            type={form.success ? 'success' : 'error'}
            onDestroyCallback={() => {
              if (form) {
                form.message = '';
              }
            }}
          />
        {/if}

        <EmailInput required bind:value={formEmail} bind:inputError={emailErrors} />

        <PasswordInput required top="sm" bind:inputError={passwordErrors} />

        <SubmitButton top="lg" text="Sign in" onClick={() => setLoadingState(true)} />

        <div class="divider" />

        <p>
          Don't have an account? <a href="/auth/signup" data-sveltekit-preload-data="tap"
            >Create an account</a
          >
        </p>
      </form>
    </div>
  </div>
</div>
