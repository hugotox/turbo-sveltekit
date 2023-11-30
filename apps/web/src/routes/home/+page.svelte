<script lang="ts">
  export let data
</script>

{#if data.user}
  welcome {data.user.firstName}
{/if}
