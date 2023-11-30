<script lang="ts">
  // https://raw.githack.com/mymth/vanillajs-datepicker/v1.3.4/demo/plain-css.html
  import { cn } from '$lib/utils'
  import type { HTMLInputAttributes } from 'svelte/elements'
  import { onMount } from 'svelte'
  import { Datepicker } from 'vanillajs-datepicker'
  import { Calendar } from 'lucide-svelte'
  import './datepicker.css'

  type $$Props = HTMLInputAttributes

  let input: HTMLDivElement
  let className: $$Props['class'] = undefined
  export { className as class }
  export let showIcon: boolean = true

  onMount(() => {
    const datepicker = new Datepicker(input, {
      autohide: true,
      weekStart: 1,
    })
  })
</script>

<div class="relative inline-block">
  <input
    type="text"
    bind:this={input}
    class={cn(
      'flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
      className
    )} />
  {#if showIcon}
    <Calendar size={18} class="pointer-events-none absolute right-2 top-2" />
  {/if}
</div>
