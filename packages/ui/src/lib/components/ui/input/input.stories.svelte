<script context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf'
  import Input from './input.svelte'

  export const meta = {
    title: 'UI/Input',
    component: Input,
  }
</script>

<Template>
  <div class="w-60">
    <Input placeholder="Enter your name" />
  </div>
</Template>

<Story name="Default" args={{}} />
