<script context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf'

  export const meta = {
    title: 'UI/Colors',
  }
</script>

<script lang="ts">
  const list = [
    'bg-background',
    'bg-foreground',
    'bg-muted',
    'bg-muted-foreground',
    'bg-popover',
    'bg-popover-foreground',
    'bg-card',
    'bg-card-foreground',
    'bg-border',
    'bg-input',
    'bg-primary',
    'bg-primary-foreground',
    'bg-secondary',
    'bg-secondary-foreground',
    'bg-accent',
    'bg-accent-foreground',
    'bg-destructive',
    'bg-destructive-foreground',
    'bg-ring',
    'bg-radius',
  ]
</script>

<Template>
  {#each list as color}
    <div class="flex">
      <div class="w-48">{color.replace('bg-', '')}</div>
      <div class={'h-6 w-6 border border-slate-500 ' + color} />
    </div>
  {/each}
</Template>

<Story name="Default" args={{}} />
