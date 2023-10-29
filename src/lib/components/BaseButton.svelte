<script lang="ts">
  // Utils

  // Props
  /**
   * @description Button text
   */
  export let text = '';

  /**
   * @description Whether the button is disabled
   */
  export let disabled = false;

  /**
   * @description Button type
   */
  export let buttonType: 'button' | 'submit' | 'reset' = 'button';

  /**
   * @description Click handler
   */
  export let onClick = () => {};
</script>

<button type={buttonType} {disabled} on:click={onClick}>
  <p>{text}</p>
</button>
