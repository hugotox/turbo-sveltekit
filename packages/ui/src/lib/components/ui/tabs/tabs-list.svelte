<script lang="ts">
  import { Tabs as TabsPrimitive } from 'bits-ui'
  import { cn } from '$lib/utils'
  import { getContext } from 'svelte'
  import { tabsListVariants, type TabsProps } from '.'
  import type { Writable } from 'svelte/store'

  type $$Props = TabsPrimitive.ListProps

  let className: $$Props['class'] = undefined
  export { className as class }

  const variantsStore =
    getContext<Writable<{ variant: TabsProps['variant'] }>>('variantsStore')

  $: variant = $variantsStore.variant
</script>

<TabsPrimitive.List
  class={cn(tabsListVariants({ variant, className }))}
  {...$$restProps}>
  <slot />
</TabsPrimitive.List>
