<script context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf'
  import { Avatar, AvatarFallback, AvatarImage } from '.'

  export const meta = {
    title: 'UI/Avatar',
    component: Avatar,
  }
</script>

<script lang="ts">
</script>

<Template>
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
</Template>

<Story name="Default" args={{}} />
