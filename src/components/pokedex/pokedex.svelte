<script>
	import { Pokemon } from '../../stores/pokedex/pokestore';
	import pokeman from './pokemanCard.svelte';
	import PokemanCard from './pokemanCard.svelte';
</script>

<svelte:head>
	<title>Pokedex</title>
</svelte:head>

<h1 class="text-2xl text-gray-700 text-center my-8 uppercase">Pokedex in sveltekit</h1>
<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each $Pokemon as pokeman}
		<PokemanCard pokeman={pokeman} />
	{/each}
</div>
