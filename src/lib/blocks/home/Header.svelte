<script>
	import { Button, Header, imageHandler } from '$lib';
</script>

<Header background={imageHandler('home/kitchen-header.webp', true)}>
	<div class="py-20 text-center lg:w-1/3 lg:py-40 lg:text-left">
		<h1 class="text-grey-100">
			<span class="block font-body text-xl font-normal">Sandbar</span>
			Full Service Facilities Contractor
		</h1>
		<p class="py-4 text-grey-100 lg:py-7">
			Expert solutions for all your commercial facilities needs
		</p>
		<Button href="/contact">Request A Quote</Button>
	</div>
</Header>
