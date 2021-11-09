<script lang="ts">
	export let linkAddr: string;
	export let linkName: string;
</script>

<a
	class="mx-4 text-lg 
    text-gray-500 
    active:text-gray-900 
    hover:text-red-600 
    focus:ring-red-600 
    focus:ring-2
    focus:outline-none 
    focus:ring-opacity-50"
	href={linkAddr}>{linkName}</a
>
