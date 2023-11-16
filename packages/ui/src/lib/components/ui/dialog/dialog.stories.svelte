<script context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf'
  import {
    Dialog,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from '.'
  import DialogContent from './dialog-content.svelte'
  import { Button, buttonVariants } from '../button'
  import { Input } from '../input'

  export const meta = {
    title: 'UI/Dialog',
    component: Dialog,
  }
</script>

<Template>
  <Dialog>
    <DialogTrigger class={buttonVariants({ variant: 'outline' })}>
      Open dialog
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <div class="grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">
          <label for="name" class="text-right">Name</label>
          <Input id="name" value="Pedro Duarte" class="col-span-3" />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <label for="username" class="text-right">Username</label>
          <Input id="username" value="@peduarte" class="col-span-3" />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</Template>

<Story name="Default" />
