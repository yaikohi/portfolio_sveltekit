<script>
	import WorkItem from '../../lib/components/workItem.svelte';
</script>

<svelte:head>
	<title>Work</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">I am working on these things.</h1>

<div class="flex-auto b-4 p-2 border-2 rounded-md">
	<WorkItem link="/work/pokedex">Pokedex</WorkItem>
</div>

<h1 class="text-4xl text-center my-8 uppercase">I have worked on these things.</h1>

<div class="flex-auto b-4 p-2 border-2 rounded-md">
	<WorkItem link="/work/checkers">Checkers</WorkItem>
</div>
