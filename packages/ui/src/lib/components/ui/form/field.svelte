<script lang="ts">
  import type { ComponentType } from 'svelte'
  import { Input } from '../input'
  import { cn } from '$lib/utils'
  import FieldSelect from './field-select.svelte'

  export let name: string
  export let label: string | undefined = undefined
  export let required: boolean = false
  export let errorMessage: string | undefined = undefined
  export let type: 'text' | 'email' | 'tel' | 'select' | 'password'
  export let options: Array<{ value: string; label: string }> = []

  let control: ComponentType
  $: {
    if (
      type === 'text' ||
      type === 'email' ||
      type === 'tel' ||
      type === 'password'
    ) {
      control = Input
    }
  }
</script>

<div class="my-3">
  <label for={name}>
    {#if label}
      <span class="mb-2 block">
        {label}
        {#if required}
          <span class="text-destructive">*</span>
        {/if}
      </span>
    {/if}
    {#if type === 'select' && options.length}
      <FieldSelect {name} {options} {errorMessage} />
    {:else if control}
      <svelte:component
        this={control}
        id={name}
        {name}
        {type}
        {required}
        class={cn(!!errorMessage && 'border-destructive')} />
    {/if}
  </label>
  {#if errorMessage}
    <div class="mt-1 text-sm text-destructive">{errorMessage}</div>
  {/if}
</div>
