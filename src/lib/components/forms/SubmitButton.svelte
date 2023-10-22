<script lang="ts">
  // Components
  import { BaseButton } from '$lib/components';
  // Interfaces
  import type { IButtonType } from '../utils';

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
   * @description Button color override
   */
  export let buttonColor: IButtonType = 'primary';

  /**
   * @description Additional CSS classes
   */
  export let classes = '';

  const submitButtonClasses = classes.length > 0 ? `w-full ${classes}` : 'w-full';

  /**
   * @description Click handler
   */
  export let onClick = () => {};
</script>

<BaseButton
  buttonType="submit"
  classes={submitButtonClasses}
  {icon}
  {text}
  {disabled}
  {buttonColor}
  {onClick}
>
  <slot />
</BaseButton>
