<script lang="ts">
  export let loading = false;

  /**
   * @description Dialog ref object
   */
  let spinnerRef: HTMLDialogElement | null = null;

  $: if (spinnerRef && loading) spinnerRef.showModal();
</script>

<dialog bind:this={spinnerRef}>
  {#if spinnerRef && loading}
    <span class="loading loading-spinner loading-lg" />
  {/if}
</dialog>
