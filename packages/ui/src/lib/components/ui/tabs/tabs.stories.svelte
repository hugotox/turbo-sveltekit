<script context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf'
  import { Tabs, TabsList, TabsContent, TabsTrigger } from '.'

  export const meta = {
    title: 'UI/Tabs',
    component: Tabs,
    argTypes: {
      variant: {
        options: ['default', 'vintage'],
        control: { type: 'radio' },
      },
    },
  }
</script>

<script lang="ts">
</script>

<Template let:args>
  <Tabs {...args}>
    <TabsList>
      <TabsTrigger value="tab1">Tab one</TabsTrigger>
      <TabsTrigger value="tab2">Tab two</TabsTrigger>
      <TabsTrigger value="tab3">Tab three</TabsTrigger>
    </TabsList>
    <TabsContent value="tab1">
      Quis qui eaque reprehenderit ut fugit reiciendis quia eaque ea qui
      provident temporibus.
    </TabsContent>
    <TabsContent value="tab2">
      Aut sunt et amet sunt maiores sunt est. Dolor architecto qui nihil magnam
      doloremque aliquam. Tempora at quis voluptate. Consectetur sit id dicta
      dignissimos rerum quod temporibus dolorem omnis. Quia qui et laudantium
      omnis et debitis quos similique voluptatem et.
    </TabsContent>
    <TabsContent value="tab3">
      Consequatur eius blanditiis dolor cumque sequi quas consequatur dolorem
      saepe qui molestias vero excepturi. Suscipit distinctio odit qui nisi
      tempore. Ut cupiditate fuga dolore culpa recusandae similique est ut et
      rerum iste pariatur quam voluptas. Voluptates asperiores odio quia dicta
      cumque eveniet quis veritatis et ullam autem voluptatem pariatur.
    </TabsContent>
  </Tabs>
</Template>

<Story name="Default" args={{}} />
