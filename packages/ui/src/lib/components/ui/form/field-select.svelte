<script lang="ts">
  import { cn } from '$lib/utils'
  import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectValue,
    SelectItem,
    SelectInput,
  } from '../select'
  export let name: string
  export let errorMessage: string | undefined = undefined
  export let options: Array<{ value: string; label: string }> = []
</script>

<Select>
  <SelectTrigger
    type="button"
    id={name}
    class={cn(!!errorMessage && 'border-destructive')}>
    <SelectValue placeholder="Select the tenant's plan" />
  </SelectTrigger>
  <SelectContent>
    {#each options as option}
      <SelectItem value={option.value}>{option.label}</SelectItem>
    {/each}
  </SelectContent>
  <SelectInput {name} />
</Select>
