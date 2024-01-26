<script>
  import { page } from '$app/stores'
  import 'ui/app.css'

  const user = $page.data

  $: {
    // this is needed to update the theme mode client side after login
    if (typeof window !== 'undefined' && user?.preferencesJson?.theme) {
      document.documentElement.className = user?.preferencesJson?.theme
    }
  }
</script>

<svelte:head>
  <title>Turborepo SvelteKit</title>
</svelte:head>

<slot />
