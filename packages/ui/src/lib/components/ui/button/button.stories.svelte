<script lang="ts" context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf'
  import { Button, type ButtonProps } from '.'

  export const meta = {
    title: 'UI/Button',
    component: Button,
  }
</script>

<script lang="ts">
  const variants: ButtonProps['variant'][] = [
    'default',
    'destructive',
    'outline',
    'secondary',
    'ghost',
    'link',
  ]
</script>

<Template>
  <div class="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
    {#each variants as variant}
      <Button {variant}>{variant}</Button>
    {/each}
  </div>
</Template>

<Story name="Default" args={{}} />
