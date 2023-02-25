<script>
	import Input from './form/Input.svelte';
	import Select from './form/Select.svelte';
	import { services, times } from './form/options.js';
	import { Button } from '$lib';
</script>

<div class="w-full p-4 lg:px-10 lg:py-7">
	<h3 class="mb-7">Contact Form</h3>
	<div class="md:flex md:gap-5">
		<Input name="firstName" label="First Name" />
		<Input name="lastName" label="Last Name" />
	</div>
	<div class="md:flex md:gap-5">
		<Input name="phone" label="Phone Number" type="tel" />
		<Input name="email" label="Email" type="email" />
	</div>
	<div class="md:flex md:gap-5">
		<Select name="time" label="Preferred Callback Time" placeholder="Select Time" options={times} />
		<Select name="service" label="Service" placeholder="Select Service" options={services} />
	</div>
	<div>
		<label for="message"> Message </label>
		<textarea
			name="message"
			id="message"
			class="min-h-24 mt-2 block h-24 w-full resize-y border-b border-grey-300 px-2 py-2 active:border-primary-500"
			placeholder="Message"
		/>
	</div>
	<div class="mt-7">
		<Button>Submit</Button>
	</div>
</div>
