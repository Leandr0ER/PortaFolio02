<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->

<h1>Contact</h1>

<svelte:head>
  <title>Contact me</title>
</svelte:head>

<form action="mailto:foo@example.com" method="GET">
    <label for="email">Email: <input id="email" type="email" name="text_email"> </label>
    <label for="subject">Subject: <input id="subject" type="text" name="text_subject"> </label>
    <label for="body">Body: <textarea id="body" name="text_message"></textarea> </label>                   
</form>
<button>Submit</button> 