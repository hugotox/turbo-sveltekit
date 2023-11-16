<script lang="ts">
  import { Sun, Moon } from 'lucide-svelte'
  import Button from '../button/button.svelte'
  import { cn } from '$lib/utils'
  import type { Mode } from '.'

  export let className: string | undefined = undefined
  export { className as class }
  export let mode: Mode
</script>

<Button
  aria-label="toggle theme mode"
  variant="ghost"
  class={cn('px-2', className)}
  on:click
  on:keydown>
  {#if mode === 'light'}
    <Sun />
  {:else}
    <Moon />
  {/if}
</Button>
