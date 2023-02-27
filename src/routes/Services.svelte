<script>
	import { Container, ServiceCards } from '$lib';

	export let data;
	const { title, items } = data;
</script>

<div class="bg-primary-900/5">
	<Container class="py-20">
		<h2 class="mb-10 text-center">{title}</h2>
		<ServiceCards {items} />
	</Container>
</div>
