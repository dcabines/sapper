<script>
  import Thing from "../../../components/Thing.svelte";

  let user = {
    firstname: "Ada",
    lastname: "Lovelace",
  };
</script>

<svelte:head>
  <title>Example</title>
</svelte:head>

<h1>This is an example</h1>
<p>I hope it works. again. and again.</p>
<h1>Hello {user.firstname}!</h1>
<Thing />