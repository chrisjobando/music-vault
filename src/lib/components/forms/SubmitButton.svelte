<script lang="ts">
  // Utils
  import type { IMarginType } from '../utils';
  // Components
  import { BaseButton } from '$lib/components';

  // Props
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

<BaseButton buttonType="submit" buttonColor="secondary" {top} {text} {disabled} {onClick}>
  <slot />
</BaseButton>
