<script>
	import { Button, Container, imageHandler } from '$lib';

	export let data;
	const { title, description, image, stats, button } = data;
</script>

<Container class="flex flex-col items-center justify-center py-20 md:flex-row">
	<img
		class="mb-10 shrink-0 rounded-2xl object-cover md:mr-10 md:w-[400px] lg:mr-28 xl:w-[500px] 2xl:h-[650px] 2xl:w-[620px]"
		src={imageHandler(image.path, image.dev)}
		alt={image.alt}
	/>
	<div>
		<h2>{title}</h2>
		<p class="my-7">{description}</p>
		<div class="flex justify-center lg:gap-10">
			{#each stats as item, idx}
				<div
					class="mb-10 flex w-1/3 flex-col text-center {idx === 1 &&
						'border-r border-l border-grey-200 px-3 lg:px-10'}"
				>
					<h3 class="mb-2">{item.title}</h3>
					<p>{item.description}</p>
				</div>
			{/each}
		</div>
		<Button href={button.href}>{button.title}</Button>
	</div>
</Container>
