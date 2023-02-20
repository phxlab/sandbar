<script>
	import { Header, Services } from '$lib/blocks/home';

	export let data;
</script>

<svelte:head>
	<title>{data.seo.title}</title>
	<meta name="description" content={data.seo.description} />
</svelte:head>

<Header data={data.header} />

<Services data={data.services} />

<div class="pb-[1000px]" />
