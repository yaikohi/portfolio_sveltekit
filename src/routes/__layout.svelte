<script lang="ts">
	import 'tailwindcss/tailwind.css';
	import Navbar from '../lib/components/navbar.svelte';
</script>

<div class="p-8 max-w-7xl lg:mx-auto lg:grid flex flex-col">
	<Navbar />
	<slot />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	/* @layer base {
		h1 {
			@apply text-4xl;
		}
		h2 {
			@apply text-2xl;
		}
		/* @font-face {
			font-family: Zen Kaku Gothic Antique;
			src: url('../../fonts/ZenKakuGothicAntique') format('ttf');
		} 
	} */
</style>
