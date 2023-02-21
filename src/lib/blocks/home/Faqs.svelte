<script>
	import { Container, Faqs, imageHandler } from '$lib';

	export let data;
	const { title, items, image } = data;
</script>

<Container class="py-20">
	<h2 class="mb-10 text-center">{title}</h2>
	<div class="flex justify-between">
		<Faqs {items} />
		<img
			class="ml-20 hidden flex-shrink-0 rounded-2xl xl:block xl:w-[650px] 2xl:w-[720px]"
			src={imageHandler(image.path, image.dev)}
			alt={image.alt}
		/>
	</div>
</Container>
