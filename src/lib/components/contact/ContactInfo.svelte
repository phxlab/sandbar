<script>
	import { contactStore, hoursStore, imageHandler } from '$lib';
</script>

<div
	class="rounded-br-2xl rounded-bl-2xl bg-primary-500 p-4 md:py-10 lg:rounded-bl-none lg:rounded-tr-2xl lg:pr-14"
>
	<h4 class="mb-7 text-grey-100">Contact Info</h4>
	{#each $contactStore as info}
		<div class="mb-4 flex items-center gap-4">
			<img src={imageHandler(info.icon)} alt="Call Us" />
			<h4 class="text-grey-100">
				<a href={`${info.href}${info.title}`}>{info.title}</a>
			</h4>
		</div>
	{/each}

	<hr class="border-t-primary-600" />

	<!-- Hours -->
	<div>
		<h4 class="my-7 text-grey-100">Hours</h4>
		{#each $hoursStore as info}
			<div class="mb-4 flex items-center gap-4">
				<h4 class="text-grey-100">{info.day}:</h4>
				<p class="text-grey-100">{info.time}</p>
			</div>
		{/each}
		<p class="text-grey-100">Emergency Services Available</p>
	</div>
</div>
