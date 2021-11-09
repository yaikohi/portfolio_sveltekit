<script lang="ts">
	import { Pokemon, fetchPokemon } from '../../../stores/pokedex/pokestore';
	import PokemanCard from './pokemanCard.svelte';

	let searchTerm: string = '';
	let filteredPokemon: any[] = [];

	$: {
		if (searchTerm) {
			filteredPokemon = $Pokemon.filter((pokeman) =>
				pokeman.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredPokemon = [...$Pokemon];
		}
	}
	fetchPokemon();
</script>

<svelte:head>
	<title>Pokedex</title>
</svelte:head>

<input
	class="
	w-full 
	rounded-md 
	text-lg 
	p-4 
	border-2 
	border-gray-200"
	bind:value={searchTerm}
	placeholder="Search Pokemon"
/>
<div
	class="
	py-4 
	grid 
	gap-4 
	xl:grid-cols-5 
	lg:grid-cols-4 
	md:grid-cols-2 
	sm:grid-cols-1
	"
>
	{#each filteredPokemon as pokeman}
		<PokemanCard {pokeman} />
	{/each}
</div>
