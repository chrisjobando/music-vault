<script lang="ts">
  // Utils
  import { buttonColors, marginTop, type IButtonType, type IMarginType } from './utils';

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
   * @description Margin top
   */
  export let top: IMarginType | undefined = undefined;

  /**
   * @description Click handler
   */
  export let onClick = () => {};

  // Variables
  /**
   * @description Button color styling
   */
  const themeColor = buttonColors[buttonColor];

  /**
   * @description Top margin styling
   */
  const topMargin = top ? ` ${marginTop[top]}` : '';
</script>

<button
  type={buttonType}
  class="btn max-w-md rounded-full {themeColor}{topMargin}"
  {disabled}
  on:click={onClick}
>
  <p>{text}</p>
</button>
