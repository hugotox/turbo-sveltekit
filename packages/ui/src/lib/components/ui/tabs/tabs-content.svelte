<script lang="ts">
  import { Tabs as TabsPrimitive } from 'bits-ui'
  import { cn } from '$lib/utils'
  import { getContext } from 'svelte'
  import { tabsContentVariants, type TabsProps } from '.'
  import type { Writable } from 'svelte/store'

  type $$Props = TabsPrimitive.ContentProps

  let className: $$Props['class'] = undefined
  export let value: $$Props['value']
  export { className as class }

  const variantsStore =
    getContext<Writable<{ variant: TabsProps['variant'] }>>('variantsStore')

  $: variant = $variantsStore.variant
</script>

<TabsPrimitive.Content
  class={cn(tabsContentVariants({ variant, className }))}
  {value}
  {...$$restProps}>
  <slot />
</TabsPrimitive.Content>
