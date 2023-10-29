<script lang="ts">
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
   * @description Click handler
   */
  export let onClick = () => {};
</script>

<BaseButton buttonType="submit" buttonColor="secondary" {text} {disabled} {onClick}>
  <slot />
</BaseButton>
