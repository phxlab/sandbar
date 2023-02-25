<script>
	export let label = 'Enter a label';
	export let name;
	export let placeholder = 'Enter a placeholder';
	export let options = [];
</script>

<div class="mb-7 w-full">
	<label for={name}>{label}</label>
	<select
		id={name}
		{name}
		class="mt-2 w-full border-b border-grey-300 bg-grey-100 p-2 active:border-primary-500"
	>
		<option selected disabled>{placeholder}</option>
		{#each options as option}
			<option>{option}</option>
		{/each}
	</select>
</div>
