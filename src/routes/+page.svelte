<script>
	import { About, Header, Services } from '$lib/blocks/home';
	import Faqs from '$lib/blocks/home/Faqs.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.seo.title}</title>
	<meta name="description" content={data.seo.description} />
</svelte:head>

<Header data={data.header} />

<Services data={data.services} />

<About data={data.about} />

<Faqs data={data.faqs} />
