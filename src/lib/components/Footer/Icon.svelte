<script>
	import { onMount } from 'svelte';

	export let data = {};
	const { type, href } = data;
	let Icon;

	onMount(async () => {
		Icon = (await import(`./icons/${type}.svelte`)).default;
	});
</script>

<a {href} target="_blank" rel="noreferrer nofollow">
	<svelte:component this={Icon} />
</a>
