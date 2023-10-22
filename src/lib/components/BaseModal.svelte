<script lang="ts">
  // Components
  import BaseButton from './BaseButton.svelte';

  // Props
  /**
   * @description Close button text
   */
  export let closeText = 'Close';

  /**
   * @description Modal state
   */
  export let showModal = false;

  /**
   * @description Callback for when the modal is closed
   */
  export let onCancelCallback = () => {};

  /**
   * @description Dialog ref object
   */
  let dialogRef: HTMLDialogElement | null = null;

  $: if (dialogRef && showModal) dialogRef.showModal();
</script>

<dialog
  class="min-w-sm max-w-lg rounded-lg bg-white backdrop:bg-dialogBackdrop"
  bind:this={dialogRef}
>
  <div class="border-neob p-5">
    <slot name="header" />

    <hr />

    <slot name="content" />

    <hr />

    <div class="flex">
      <BaseButton
        classes="w-32"
        text={closeText}
        buttonColor="info"
        onClick={() => {
          if (dialogRef) {
            dialogRef.close();
            onCancelCallback();
          }
        }}
      />

      <slot name="footer" />
    </div>
  </div>
</dialog>

<style lang="postcss">
  dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }

  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
