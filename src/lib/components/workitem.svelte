<script lang="ts">
	export let link: string = '';
</script>

<div class="flex flex-auto flex-col justify-center p-8 w-full">
	<a class="text-red-900 hover:text-red-600 p-4" href={link}>
		<slot />
	</a>

	<p class="p-4">
		To learn more about front-end development and sveltekit I decided to work on a simple project. I
		started with a pokedex tutorial on youtube but I tried to make it a bit more elaborate to prove
		that I did not just 'copy' code.
	</p>
</div>
