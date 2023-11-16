<script lang="ts">
  import { Tabs as TabsPrimitive } from 'bits-ui'
  import { setContext } from 'svelte'
  import { writable } from 'svelte/store'
  import type { TabsProps } from '.'

  export let variant: TabsProps['variant'] = 'default'

  const variantsStore = writable({ variant })
  setContext('variantsStore', variantsStore)

  // update the store whenever the `variant` prop changes
  $: {
    variantsStore.set({ variant })
  }
</script>

<TabsPrimitive.Root {...$$restProps}>
  <slot />
</TabsPrimitive.Root>
