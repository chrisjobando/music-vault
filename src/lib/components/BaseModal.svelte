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

<dialog bind:this={dialogRef}>
  <div>
    <slot name="header" />

    <hr />

    <slot name="content" />

    <hr />

    <div>
      <BaseButton
        text={closeText}
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
