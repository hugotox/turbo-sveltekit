<script context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf'
  import { Textarea } from '.'

  export const meta = {
    title: 'UI/Textarea',
    component: Textarea,
  }
</script>

<script lang="ts">
</script>

<Template>
  <Textarea placeholder="Type your message here." />
</Template>

<Story name="Default" args={{}} />
