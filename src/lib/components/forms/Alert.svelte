<script lang="ts">
  // Props
  /**
   * @description Alert message
   */
  export let message = '';

  /**
   * @description Alert lifetime in milliseconds
   */
  export let time: number = 3000;

  /**
   * @description Callback function to be called on destroy
   */
  export let onDestroyCallback = () => {};

  // Destroy after [time] milliseconds
  setTimeout(() => {
    onDestroyCallback();
  }, time);
</script>

<div class="alert alert-warning">
  <span>{message}</span>
</div>
