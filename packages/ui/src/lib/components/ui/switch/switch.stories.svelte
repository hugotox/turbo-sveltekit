<script context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf'
  import { Switch } from '.'

  export const meta = {
    title: 'UI/Switch',
    component: Switch,
  }
</script>

<script lang="ts">
</script>

<Template>
  <div class="flex items-center space-x-2">
    <Switch id="airplane-mode" />
    <label for="airplane-mode">Airplane Mode</label>
  </div>
</Template>

<Story name="Default" args={{}} />
