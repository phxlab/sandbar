<script>
	import { contactStore, hoursStore, imageHandler } from '$lib';
	import Input from './Input.svelte';
	import Select from './Select.svelte';
	import { services, times } from './options';
</script>

<div class="flex flex-col overflow-hidden rounded-xl bg-grey-100">
	<!-- Contact Info -->
	<div class="rounded-br-2xl rounded-bl-2xl bg-primary-500 p-4">
		<h4 class="mb-7 text-grey-100">Contact Info</h4>
		{#each $contactStore as info}
			<div class="mb-4 flex items-center gap-4">
				<img src={imageHandler(info.icon)} alt="Call Us" />
				<h4 class="text-grey-100"><a href={`${info.href}${info.title}`}>{info.title}</a></h4>
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
	<div class="p-4">
		<h3 class="mb-7">Contact Form</h3>
		<Input name="firstName" label="First Name" />
		<Input name="lastName" label="Last Name" />
		<Input name="phone" label="Phone Number" type="tel" />
		<Input name="email" label="Email" type="email" />
		<Select name="time" label="Preferred Callback Time" placeholder="Select Time" options={times} />
		<Select name="service" label="Service" placeholder="Select Service" options={services} />
		<div>
			<label for="message"> Message </label>
			<textarea
				name="message"
				id="message"
				class="min-h-24 mt-2 block h-24 w-full resize-y border-b border-grey-300 px-2 py-2 active:border-primary-500"
				placeholder="Message"
			/>
		</div>
	</div>
</div>
