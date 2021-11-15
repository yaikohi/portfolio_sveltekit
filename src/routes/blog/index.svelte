<script lang="ts">
	import BlogpostSummary from '@/lib/components/BlogpostSummary.svelte';
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Posts</h1>
<div class="grid-cols-3 p-20 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
	<div class="w-full col-span-2 row-span-1 rounded">
		<BlogpostSummary
			title="Creating reactive components in svelte"
			date="15-11-2021"
			subtitle="featuring Rxjs"
			>In this blogpost I'll explain how to set up Rxjs with svelte and show some examples.</BlogpostSummary
		>
	</div>

	<div class="w-full rounded">
		<BlogpostSummary
			title="Maintaining global state persistence in vuejs"
			date="15-11-2021"
			subtitle="featuring vuex-persistedstate"
			>Recently I learned how the rootstate from my vuex store disappears after a use refreshes the
			page.</BlogpostSummary
		>
	</div>
	<div class="w-full rounded">
		<BlogpostSummary
			title="Maintaining global state persistence in vuejs"
			date="15-11-2021"
			subtitle="featuring vuex-persistedstate"
			>Recently I learned how the rootstate from my vuex store disappears after a use refreshes the
			page.</BlogpostSummary
		>
	</div>
</div>
<div class="flex-auto b-4 p-2 rounded-md" />
