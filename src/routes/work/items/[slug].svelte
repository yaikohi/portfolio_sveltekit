<script context="module" lang="ts">
	export async function load({ page }) {
		let slug: string = page.params.slug;
		return { props: { slug } };
	}
</script>

<script>
	import Pokedex from '../../../lib/components/pokedex/pokedex.svelte';

	export let slug;
</script>

<svelte:head>
	<title>{slug}</title>
</svelte:head>

<div
	class="flex-auto flex-col 
			bg-gray-200 
			rounded-md 
			p-8
			"
>
	<h1
		class="
			text-4xl 
			my-8 
			uppercase
			"
	>
		SvelteKit Pokedex
	</h1>
	<div
		class="
				flex
				flex-row
				m-6
				"
	/>
	<Pokedex />
</div>
