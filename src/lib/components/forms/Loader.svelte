<script lang="ts">
  export let loading = false;

  /**
   * @description Dialog ref object
   */
  let spinnerRef: HTMLDialogElement | null = null;

  $: if (spinnerRef && loading) spinnerRef.showModal();
</script>

<dialog class="loader" bind:this={spinnerRef}>
  {#if spinnerRef && loading}
    <div class="spinner" />
  {/if}
</dialog>

<style lang="postcss">
  .loader {
    @apply fixed left-0 top-0 flex h-full w-full items-center justify-center border-none bg-transparent outline-none backdrop:bg-dialogBackdrop;
    transition:
      opacity 0.75s,
      visibility 0.75s;
  }

  .spinner {
    @apply h-11 w-11 rounded-full border-[15px] border-solid border-white border-t-primary;
    animation: loading 0.75s ease infinite;
    transition:
      opacity 0.75s,
      visibility 0.75s;
  }

  @keyframes loading {
    from {
      transform: rotate(0turn);
    }
    to {
      transform: rotate(1turn);
    }
  }
</style>
