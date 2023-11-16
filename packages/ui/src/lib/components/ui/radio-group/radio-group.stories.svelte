<script context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf'
  import { RadioGroup, RadioGroupInput, RadioGroupItem } from '.'

  export const meta = {
    title: 'UI/RadioGroup',
    component: RadioGroup,
  }
</script>

<script lang="ts">
</script>

<Template>
  <RadioGroup value="comfortable">
    <div class="flex items-center space-x-2">
      <RadioGroupItem value="default" id="r1" />
      <label for="r1">Default</label>
    </div>
    <div class="flex items-center space-x-2">
      <RadioGroupItem value="comfortable" id="r2" />
      <label for="r2">Comfortable</label>
    </div>
    <div class="flex items-center space-x-2">
      <RadioGroupItem value="compact" id="r3" />
      <label for="r3">Compact</label>
    </div>
    <RadioGroupInput name="spacing" />
  </RadioGroup>
</Template>

<Story name="Default" args={{}} />
