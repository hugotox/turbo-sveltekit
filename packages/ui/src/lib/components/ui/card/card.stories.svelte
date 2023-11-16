<script context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf'
  import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription,
    CardFooter,
  } from '.'

  export const meta = {
    title: 'UI/Card',
    component: Card,
  }
</script>

<Template>
  <Card class="md:w-[350px]">
    <CardHeader>
      <CardTitle>Card title</CardTitle>
      <CardDescription>This is an example description</CardDescription>
    </CardHeader>
    <CardContent>
      Molestiae asperiores blanditiis aut dignissimos modi aliquid distinctio
      sint. Veniam quia eius ratione illum praesentium in. Recusandae sit
      corrupti accusamus voluptatem atque provident illo provident at. Id non et
      tempora sunt magnam est consectetur eos adipisci esse aliquam earum alias
      est cum. Nesciunt maxime a incidunt aliquam ex repellendus repudiandae
      excepturi est aut qui dolorem.
    </CardContent>
    <CardFooter>Footer area</CardFooter>
  </Card>
</Template>

<Story name="Default" args={{}} />
