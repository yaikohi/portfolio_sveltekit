<script lang="ts">
	export let title: string;
	export let date: string;
	export let subtitle: string;
</script>

<div class="container p-12">
	<h1 class="font-bold text-4xl py-2 text-bluepurple-800">{title}</h1>
	<h4 class="font-medium text-2xl py-2 border-b border-metal-100 text-bluepurple-800">
		{subtitle}
	</h4>
	<p class="text-lg"><slot /></p>
	<p class="text-xs float-right">{date}</p>
	<a href="/blog/post" class="pl-2 hover:text-blue-200">... read more...</a>
</div>
