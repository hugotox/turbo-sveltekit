<script lang="ts">
  import { enhance } from '$app/forms'
  import { Field } from 'ui'
  import { Button } from 'ui'
  import { Card, CardHeader, CardTitle, CardContent, CardFooter } from 'ui'
  import type { ActionData, PageData } from './$types'

  export let data: PageData
  export let form: ActionData
</script>

<div class="flex h-screen flex-col justify-center bg-gray-50 align-middle">
  <form action="?/login" method="post" class="mt-4" use:enhance>
    <Card class="mx-auto w-80">
      <CardHeader>
        <CardTitle>Log In</CardTitle>
      </CardHeader>
      <CardContent>
        {#if form?.message}
          <p class="text-red-600">{form.message}</p>
        {/if}
        <input type="hidden" name="next" value={data.next} />
        <Field name="username" type="text" required label="Username" />
        <Field name="password" type="password" required label="Password" />
      </CardContent>
      <CardFooter class="flex justify-end">
        <Button type="submit">Log in</Button>
      </CardFooter>
    </Card>
  </form>
</div>
