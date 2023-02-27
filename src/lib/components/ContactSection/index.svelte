<script>
	import { Contact, Container, imageHandler } from '$lib';

	export let data;
	const { background } = data;
</script>

<div
	class="py-10"
	style={`
	background: linear-gradient(90deg, rgba(20, 3, 40, 0.7) 0%, rgba(28, 5, 45, 0) 100%),
							url('${imageHandler(background.path)}');
	background-size: cover;
	background-position: center center;
	`}
>
	<Container class="flex h-full items-center justify-center">
		<Contact />
	</Container>
</div>
