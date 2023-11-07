<script lang="ts">
  // Styling
  import cx from 'classnames';

  // Interfaces
  import type { IButtonType, IMarginType } from './utils';

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
</script>

<button
  type={buttonType}
  class={cx('btn max-w-md', {
    'btn-primary': buttonColor === 'primary',
    'btn-secondary': buttonColor === 'secondary',
    'btn-info': buttonColor === 'info',
    'btn-success': buttonColor === 'success',
    'btn-warning': buttonColor === 'warning',
    'btn-error': buttonColor === 'error',
    'rounded-full': buttonType === 'submit',
    'mt-2': top === 'sm',
    'mt-4': top === 'md',
    'mt-8': top === 'lg',
    'mt-10': top === 'xl'
  })}
  {disabled}
  on:click={onClick}
>
  <p>{text}</p>
</button>
