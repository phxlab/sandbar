<script>
	import { Container, ServiceCards } from '$lib';

	let items = [
		{
			icon: 'hvac',
			title: 'Commercial HVAC',
			description: 'Authoritatively disseminate revolutionary partnerships without interdependent.',
		},
		{
			icon: 'refrigeration',
			title: 'Commercial Refrigeration',
			description: 'Authoritatively disseminate revolutionary partnerships without interdependent.',
		},
		{
			icon: 'plumbing',
			title: 'Commercial Plumbing',
			description: 'Authoritatively disseminate revolutionary partnerships without interdependent.',
		},
		{
			icon: 'kitchen',
			title: 'Kitchen Equipment',
			description: 'Authoritatively disseminate revolutionary partnerships without interdependent.',
		},
		{
			icon: 'electrical',
			title: 'Electrical',
			description: 'Authoritatively disseminate revolutionary partnerships without interdependent.',
		},
	];
</script>

<div class="bg-primary-900/5">
	<Container class="py-20">
		<h2 class="mb-10 text-center">Our Services</h2>
		<ServiceCards {items} />
	</Container>
</div>
