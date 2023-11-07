<script lang="ts">
  // Icons
  import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from './alertIcons';
  // Styling
  import cx from 'classnames';
  // Interfaces
  import type { IAlertType } from '../utils';

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
   * @description Alert type
   */
  export let type: IAlertType = 'info';

  /**
   * @description Callback function to be called on destroy
   */
  export let onDestroyCallback = () => {};

  // Destroy after [time] milliseconds
  setTimeout(() => {
    onDestroyCallback();
  }, time);
</script>

<div
  class={cx('alert', {
    'alert-info': type === 'info',
    'alert-success': type === 'success',
    'alert-warning': type === 'warning',
    'alert-error': type === 'error'
  })}
>
  {#if type === 'info'}
    <InfoIcon />
  {:else if type === 'success'}
    <SuccessIcon />
  {:else if type === 'warning'}
    <WarningIcon />
  {:else}
    <ErrorIcon />
  {/if}
  <span>{message}</span>
</div>
