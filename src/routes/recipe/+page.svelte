<script lang="ts">
	import { goto } from "$app/navigation";
	import { text } from "@sveltejs/kit";
  let topic:string;
 function findRecipe() {
  goto(`/recipe/${topic}`);
 }
</script>


<h1>
  Hello find the recipes that you wish to cook.
</h1>

<h2>Search below</h2>
<input type="text" bind:value={topic}>
<button on:click={findRecipe}>Find</button>

