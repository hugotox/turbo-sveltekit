<script context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf'
  import { Tooltip, TooltipTrigger, TooltipContent } from '.'

  export const meta = {
    title: 'UI/Tooltip',
    component: Tooltip,
  }
</script>

<script lang="ts">
  import { Button } from '$lib/components/ui/button'
</script>

<Template>
  <Tooltip>
    <TooltipTrigger asChild let:builder>
      <Button builders={[builder]}>Hover</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</Template>

<Story name="Default" args={{}} />
