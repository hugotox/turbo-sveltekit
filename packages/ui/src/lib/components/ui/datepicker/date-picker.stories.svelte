<script context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf'
  import { DatePicker } from '.'

  export const meta = {
    title: 'UI/DatePicker',
    component: DatePicker,
  }
</script>

<script lang="ts">
  let value: Date
</script>

<Template>
  <DatePicker bind:value />
  <p class="mt-4">Value: {value}</p>
</Template>

<Story name="Default" args={{}} />
