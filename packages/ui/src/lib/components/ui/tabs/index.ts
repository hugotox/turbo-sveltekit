import Tabs from './tabs.svelte'
import Content from './tabs-content.svelte'
import List from './tabs-list.svelte'
import Trigger from './tabs-trigger.svelte'
import { tv } from 'tailwind-variants'
import type { Tabs as TabsPrimitive } from 'bits-ui'

const tabsListVariants = tv({
  base: 'inline-flex h-9 items-center justify-center rounded-lg p-1 text-muted-foreground',
  variants: {
    variant: {
      default: 'bg-muted',
      vintage: 'space-x-1 rounded-b-none bg-gray-200 pb-0',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const tabsTriggerVariants = tv({
  base: 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground',
  variants: {
    variant: {
      default: 'px-3 py-1 data-[state=active]:shadow',
      vintage: 'h-full rounded-b-none px-3 py-1 hover:bg-gray-100',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const tabsContentVariants = tv({
  base: '',
  variants: {
    variant: {
      default:
        'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      vintage:
        '-mt-px border-t border-t-gray-200 pt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type Variant = 'default' | 'vintage' | undefined

type Props = TabsPrimitive.Props & {
  variant?: Variant
}

export {
  type Props as TabsProps,
  Tabs,
  Content as TabsContent,
  List as TabsList,
  Trigger as TabsTrigger,
  tabsListVariants,
  tabsTriggerVariants,
  tabsContentVariants,
}
