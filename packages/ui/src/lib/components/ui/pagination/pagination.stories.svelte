<script context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf'
  import { Pagination } from '.'

  export const meta = {
    title: 'UI/Pagination',
    component: Pagination,
  }
</script>

<script lang="ts">
</script>

<Template>
  <Pagination totalCount={100} />
</Template>

<Story name="Default" args={{}} />
