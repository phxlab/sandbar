<script>
	import { ContactSection } from '$lib';
	import Faqs from './Faqs.svelte';
	import Header from './Header.svelte';
	import About from './About.svelte';
	import Services from './Services.svelte';

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

<ContactSection data={data.contact} />
