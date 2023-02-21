<script>
	import { Container, Faqs, imageHandler } from '$lib';

	export let data;
	const { title, items, image } = data;
</script>

<Container class="my-20">
	<h2 class="mb-20 text-center">{title}</h2>
	<div class="flex justify-between">
		<Faqs {items} />
		<img
			class="ml-20 hidden h-[1023px] flex-shrink-0 rounded-2xl object-cover xl:block xl:w-[650px] 2xl:w-[720px]"
			src={imageHandler(image.path, image.dev)}
			alt={image.alt}
		/>
	</div>
</Container>
