<script>
  import Thing from "../../../components/Thing.svelte";

  export let user = {
    firstname: "Ada",
    lastname: "Lovelace",
  };
</script>

<svelte:head>
  <title>Example</title>
</svelte:head>

<h1>This is an example</h1>
<p>Now we're getting automated.</p>
<h1>Hello {user.firstname}!</h1>
<input type="text" bind:value={user.firstname}>
<Thing />