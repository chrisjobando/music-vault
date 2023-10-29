<script lang="ts">
  // Components
  import { BaseButton } from '$lib/components';

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
   * @description Click handler
   */
  export let onClick = () => {};
</script>

<BaseButton buttonType="submit" {text} {disabled} {onClick}>
  <slot />
</BaseButton>
