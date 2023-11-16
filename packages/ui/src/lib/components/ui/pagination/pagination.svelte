<script lang="ts">
  import { page } from '$app/stores'
  import { Button } from '$lib/components/ui/button'
  import { ArrowLeft, ArrowRight } from 'lucide-svelte'
  import { cn } from '$lib/utils'

  export let pageSize: number = 10
  export let totalCount: number

  $: totalPages = Math.ceil(totalCount / pageSize)
  $: currentPage = Number($page.url?.searchParams.get('page')) || 1

  const getPrevLinkHref = (currentPage: number) => {
    if (currentPage > 1 && $page.url) {
      const newUrl = new URL($page.url)
      newUrl.searchParams.set('page', String(currentPage - 1))
      return newUrl.toString()
    }
  }

  const getNextLinkHref = (currentPage: number) => {
    if (currentPage < totalPages && $page.url) {
      const newUrl = new URL($page.url)
      newUrl.searchParams.set('page', String(currentPage + 1))
      return newUrl.toString()
    }
  }
</script>

<div class="flex items-center gap-0">
  <div class="mr-3">
    {(currentPage - 1) * pageSize + 1}-{Math.min(
      (currentPage - 1) * pageSize + pageSize,
      totalCount
    )} of
    {totalCount}
  </div>
  <Button
    size="sm"
    variant="secondary"
    href={getPrevLinkHref(currentPage)}
    aria-label="previous page"
    tabindex={currentPage === 1 ? -1 : 0}
    class={cn(
      'rounded-r-none border border-gray-200 focus:z-10',
      currentPage === 1 && 'bg-gray-25 hover:bg-gray-25 cursor-auto'
    )}>
    <ArrowLeft
      size={16}
      class={currentPage === 1 ? 'text-gray-400' : 'text-foreground'} />
  </Button>
  <Button
    size="sm"
    variant="secondary"
    href={getNextLinkHref(currentPage)}
    aria-label="next page"
    tabindex={currentPage === totalPages ? -1 : 0}
    class={cn(
      'translate-x-[-1px] rounded-l-none border border-gray-200 focus:z-10',
      currentPage === totalPages && 'bg-gray-25 hover:bg-gray-25  cursor-auto'
    )}>
    <ArrowRight
      size={16}
      class={currentPage === totalPages
        ? 'text-gray-400'
        : 'text-foreground'} />
  </Button>
</div>
