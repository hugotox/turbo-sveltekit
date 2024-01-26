<script context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf'
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectInput,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from '.'

  export const meta = {
    title: 'UI/Select',
    component: Select,
  }
</script>

<script lang="ts">
  const fruits = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'blueberry', label: 'Blueberry' },
    { value: 'grapes', label: 'Grapes' },
    { value: 'pineapple', label: 'Pineapple' },
  ]
</script>

<Template>
  <Select>
    <SelectTrigger class="w-[180px]">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        {#each fruits as fruit (fruit.value)}
          <SelectItem value={fruit.value} label={fruit.label}>
            {fruit.label}
          </SelectItem>
        {/each}
      </SelectGroup>
    </SelectContent>
    <SelectInput name="favoriteFruit" />
  </Select>
</Template>

<Story name="Default" args={{}} />
