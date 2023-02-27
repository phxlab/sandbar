<script>
	import { Container, imageHandler, navigationStore, servicesStore, hoursStore } from '$lib';
	import Icon from './Icon.svelte';

	export let data = {};
	const { info } = data;
</script>

<div class="bg-primary-800">
	<Container class="flex flex-col items-start pt-20 lg:flex-row lg:justify-between">
		<!-- Info -->
		<div class="flex w-full flex-col items-center lg:mr-20 lg:w-1/2">
			<img class="w-40" src={imageHandler(info.logo)} alt="Sandbar Mechanical Logo" />
			<p class="mb-4 mt-4 text-center">
				{info.tagline}
			</p>

			<p class="mb-7">
				<a href="/privacy">Privacy Policy</a> | <a href="terms">Terms & Conditions</a>
			</p>

			<div class="flex justify-center gap-7">
				{#each info.social as social}
					<Icon data={social} />
				{/each}
			</div>
		</div>

		<!-- Links -->
		<div class="mb-10 mt-20 flex w-full flex-wrap justify-between gap-14 lg:mt-0">
			<!-- Quick Links -->
			<div>
				<h4 class="mb-7">Quick Links</h4>
				<div class="flex flex-col gap-7">
					{#each $navigationStore as item}
						<a href={item.href}>{item.title}</a>
					{/each}
				</div>
			</div>

			<!-- Services -->
			<div>
				<h4 class="mb-7">Services</h4>
				<div class="flex flex-col gap-7">
					{#each $servicesStore as item}
						<a href={item.href}>{item.title}</a>
					{/each}
				</div>
			</div>

			<!-- Hours -->
			<div class="mb-8">
				<h4 class="mb-7">Hours</h4>
				<div class="flex flex-col gap-4">
					{#each $hoursStore as item}
						<div>
							<p>{item.day}: {item.time}</p>
						</div>
					{/each}
					<p>Emergency Services Available</p>
				</div>
			</div>
		</div>
	</Container>
	<div class="bg-primary-900 py-4">
		<Container class="text-center">
			<div class="md:flex md:justify-between">
				<p>© Copyright 2023 Sandbar Mechanical</p>
				<a
					rel="noreferrer"
					target="_blank"
					class="mt-4 cursor-default md:m-0"
					href="https://phoenixtechlab.com"
				>
					Web Design By <span class="cursor-pointer underline">Phoenix Tech Lab</span>
				</a>
			</div>
		</Container>
	</div>
</div>

<style lang="postcss">
	h4,
	a,
	p {
		color: theme(colors.grey.100);
	}
</style>
