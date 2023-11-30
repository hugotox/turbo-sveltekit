<script context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf'
  import { Datepicker } from '.'

  export const meta = {
    title: 'UI/Datepicker',
    component: Datepicker,
  }
</script>

<script lang="ts">
</script>

<Template let:args>
  <Datepicker class="w-40" {...args} />
</Template>

<Story name="Default" args={{}} />
