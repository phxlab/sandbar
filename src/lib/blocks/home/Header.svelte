<script>
	import { Button, Header, imageHandler } from '$lib';

	export let data;
	let { upperTitle, title, description, button } = data;
</script>

<Header background={imageHandler('home/kitchen-header.webp', true)}>
	<div class="py-20 text-center lg:w-1/3 lg:py-40 lg:text-left">
		<h1 class="text-grey-100">
			<span class="block font-body text-xl font-normal">{upperTitle}</span>
			{title}
		</h1>
		<p class="py-4 text-grey-100 lg:py-7">
			{description}
		</p>
		<Button href={button.href}>{button.title}</Button>
	</div>
</Header>
