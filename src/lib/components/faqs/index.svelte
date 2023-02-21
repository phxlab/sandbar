<script>
	import Faq from './Faq.svelte';

	export let items;
</script>

<div class="w-full">
	{#each items as item, idx}
		<Faq data={item} {idx} border={idx !== items.length - 1} />
	{/each}
</div>
