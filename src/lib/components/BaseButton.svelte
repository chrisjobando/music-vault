<script lang="ts">
  // Utils
  import { buttonColors, type IButtonType } from './utils';

  // Props
  /**
   * @description Button color
   */
  export let buttonColor: IButtonType = 'primary';

  /**
   * @description Button type
   */
  export let buttonType: 'button' | 'submit' | 'reset' = 'button';

  /**
   * @description Whether the button is disabled
   */
  export let disabled = false;

  /**
   * @description Button text
   */
  export let text = '';

  /**
   * @description Click handler
   */
  export let onClick = () => {};

  // Variables
  const themeColor = buttonColors[buttonColor];
</script>

<button type={buttonType} class="btn {themeColor}" {disabled} on:click={onClick}>
  <p>{text}</p>
</button>
