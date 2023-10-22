<script lang="ts">
  // Utils
  import { themeColors, type IButtonType } from './utils';

  // Props
  /**
   * @description Whether the button has an icon instead of text
   */
  export let icon: boolean = false;

  /**
   * @description Button text
   */
  export let text = '';

  /**
   * @description Whether the button is disabled
   */
  export let disabled = false;

  /**
   * @description Button background color
   */
  export let buttonColor: IButtonType = 'primary';

  /**
   * @description Additional CSS classes
   */
  export let classes = '';

  let defaultButtonClasses =
    'border-neob relative z-30 my-2 box-border flex items-center justify-center enabled:shadow-light disabled:cursor-not-allowed disabled:opacity-70';
  defaultButtonClasses = defaultButtonClasses + ' ' + themeColors[buttonColor];
  defaultButtonClasses = icon ? defaultButtonClasses : defaultButtonClasses + ' p-3';

  let buttonClasses =
    classes.length > 0 ? defaultButtonClasses + ' ' + classes : defaultButtonClasses;

  const initialButtonClasses = buttonClasses;

  /**
   * @description Button type
   */
  export let buttonType: 'button' | 'submit' | 'reset' = 'button';

  /**
   * @description Click handler
   */
  export let onClick = () => {};

  // Functions
  function onButtonHover() {
    if (!disabled) {
      buttonClasses = buttonClasses + ' -translate-y-1 shadow-harsh';
    }
  }

  function onButtonUnhover() {
    if (!disabled) {
      buttonClasses = initialButtonClasses;
    }
  }
</script>

<button
  type={buttonType}
  class={buttonClasses}
  {disabled}
  on:click={onClick}
  on:mouseenter={onButtonHover}
  on:mouseleave={onButtonUnhover}
>
  <slot />
  <p>{text}</p>
</button>
