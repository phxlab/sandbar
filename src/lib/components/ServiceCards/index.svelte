<script>
	import Card from './Card.svelte';
	import { register } from 'swiper/element/bundle';
	import { onMount } from 'svelte';

	register();
	let swiperNode;

	export let items = [];

	const options = {
		slidesPerView: 1,
		spaceBetween: 10,
		pagination: {
			clickable: true,
		},
		breakpoints: {
			640: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1280: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
			1536: {
				slidesPerView: 5,
				spaceBetween: 20,
			},
		},
	};

	onMount(() => {
		Object.assign(swiperNode, options);
		swiperNode.initialize();
	});
</script>

<div class="relative">
	<swiper-container class="flex gap-5 overflow-hidden pb-20" bind:this={swiperNode} init="false">
		{#each items as item}
			<swiper-slide>
				<Card data={item} />
			</swiper-slide>
		{/each}
	</swiper-container>
</div>
