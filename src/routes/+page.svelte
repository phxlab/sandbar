<script>
	import { About, Header, Services } from '$lib/blocks/home';
	import Faqs from '$lib/blocks/home/Faqs.svelte';
	import { Contact } from '$lib/blocks/core';

	export let data;
</script>

<svelte:head>
	<title>{data.seo.title}</title>
	<meta name="description" content={data.seo.description} />
</svelte:head>

<Header data={data.header} />

<About data={data.about} />

<Services data={data.services} />

<Faqs data={data.faqs} />

<Contact data={data.contact} />
