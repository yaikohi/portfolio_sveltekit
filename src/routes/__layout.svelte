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
</style>
