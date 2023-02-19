<script>
	import { Container } from '$lib';

	export let background;
</script>

<div
	class="relative max-h-[700px] bg-grey-900"
	style={`
	background: linear-gradient(89.89deg, rgba(0, 0, 0, 0.78) 0.11%, rgba(0, 0, 0, 0.1) 99.91%), linear-gradient(0deg, rgba(0, 0, 0, 0.14), rgba(0, 0, 0, 0.14)), url("${background}");
	background-size: cover;
	`}
>
	<Container>
		<slot />
	</Container>
</div>
