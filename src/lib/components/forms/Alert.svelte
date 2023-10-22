<script lang="ts">
  // Interfaces
  import type { IAlertType } from '../utils';
  // Utils
  import { themeColors } from '../utils';

  // Props
  /**
   * @description Alert message
   */
  export let message = '';

  /**
   * @description Alert color type
   */
  export let type: IAlertType = 'success';

  const bgColor = themeColors[type];

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

<div class="border-neob flex items-center justify-center p-3 shadow-light {bgColor}">
  <p><span>{message}</span></p>
</div>
