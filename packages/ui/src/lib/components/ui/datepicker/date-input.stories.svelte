<script context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf'
  import { DateInput } from '.'

  export const meta = {
    title: 'UI/DateInput',
    component: DateInput,
  }
</script>

<script lang="ts">
  let value: Date
</script>

<Template>
  <DateInput bind:value closeOnSelection />
  <br />
  <p>Value: {value}</p>
</Template>

<Story name="Default" args={{}} />
