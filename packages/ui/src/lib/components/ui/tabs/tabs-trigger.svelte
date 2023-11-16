<script lang="ts">
  import { Tabs as TabsPrimitive } from 'bits-ui'
  import { cn } from '$lib/utils'
  import { getContext } from 'svelte'
  import type { Writable } from 'svelte/store'
  import { tabsTriggerVariants, type TabsProps } from '.'

  type $$Props = TabsPrimitive.TriggerProps
  type $$Events = TabsPrimitive.TriggerEvents

  let className: $$Props['class'] = undefined
  export let value: $$Props['value']
  export { className as class }

  const variantsStore =
    getContext<Writable<{ variant: TabsProps['variant'] }>>('variantsStore')

  $: variant = $variantsStore.variant
</script>

<TabsPrimitive.Trigger
  class={cn(tabsTriggerVariants({ variant, className }))}
  {value}
  {...$$restProps}
  on:click
  on:keydown
  on:focus>
  <slot />
</TabsPrimitive.Trigger>
