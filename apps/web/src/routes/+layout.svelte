<script>
  import './app.css'
  export let data

  $: {
    // this is needed to update the theme mode client side after login
    if (typeof window !== 'undefined' && data.user?.preferencesJson?.theme) {
      document.documentElement.className = data.user?.preferencesJson?.theme
    }
  }
</script>

<svelte:head>
  <title>Turborepo SvelteKit</title>
</svelte:head>

<slot />
