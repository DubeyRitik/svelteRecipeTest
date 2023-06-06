<script>

  export let data;
  const recipes = data.rec;
  console.log(data.rec);
</script>

{#each recipes as recipe}
{recipe.title}
<img src={recipe.image} alt="recipe">
<br>

{/each}