<script context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf'
  import DarkToggle from './dark-toggle.svelte'

  export const meta = {
    title: 'UI/DarkToggle',
    component: DarkToggle,
  }
</script>

<script lang="ts">
  import type { Mode } from '.'
  let mode: Mode = 'light'

  const handleClick = () => {
    const nextMode =
      document.documentElement.className === 'light' ? 'dark' : 'light'
    document.documentElement.className = nextMode
    mode = nextMode
  }
</script>

<Template>
  <DarkToggle {mode} on:click={handleClick} />
</Template>

<Story name="Default" />
