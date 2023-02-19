<script>
	import { Button, Header, imageHandler } from '$lib';
</script>

<Header background={imageHandler('home/kitchen-header.webp', true)}>
	<div class="py-20 text-center">
		<h1 class="pb-4 text-grey-100">
			<span class="block font-body text-xl font-normal">Sandbar</span>
			Full Service Facilities Contractor
		</h1>
		<p class="pb-4 text-grey-100">Expert solutions for all your commercial facilities needs</p>
		<Button href="/contact">Request A Quote</Button>
	</div>
</Header>
