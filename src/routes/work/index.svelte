<script>
	import WorkItem from '../../lib/components/workItem.svelte';
</script>

<svelte:head>
	<title>Work</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">I am working on these things.</h1>
<div class="grid-cols-3 p-20 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
	<div class="w-full col-span-2 row-span-2 rounded">
		<WorkItem link="/work/pokedex">Pokedex</WorkItem>
	</div>

	<div class="w-full rounded">
		<WorkItem link="/work/checkers">Checkers</WorkItem>
	</div>
</div>
