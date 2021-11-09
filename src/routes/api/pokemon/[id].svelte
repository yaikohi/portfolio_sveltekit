<script context="module" lang="ts">
	// ` context="module" ` makes it so this <script /> content runs before the page is rendered
	import { getPokemonById } from '../../../stores/pokedex/pokestore';

	export async function load(ctx) {
		let id = ctx.page.params.id;
		const pokeman = await getPokemonById(id);
		return { props: { pokeman } };
	}
</script>

<script lang="ts">
	export let pokeman;
	const types: any[] = pokeman.types;
</script>

<svelte:head
	><h1>
		Pokedex - {pokeman.name}
	</h1></svelte:head
>
<div class="flex flex-col items-center">
	<h1 class="text-center text-4xl my-8 uppercase">
		{pokeman.name}
	</h1>

	<p class="font-sans">
		Type(s):

		{#each types as type}
			<strong>{type.type.name} </strong>
		{/each}
	</p>
	<p>
		Height:
		<strong>
			{pokeman.height / 10}
		</strong> m
	</p>
	<img
		class="card-image"
		src={pokeman.sprites['front_default']}
		alt={`Sprite image of ${pokeman.name}`}
	/>
</div>
