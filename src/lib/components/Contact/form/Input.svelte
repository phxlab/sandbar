<script>
	export let type = 'text';
	export let label = 'Enter A Label';
	export let name = '';
</script>

<div class="mb-7 w-full">
	<label for={name}>
		{label}
	</label>
	<input
		class="mt-2 block w-full border-b border-grey-300 px-2 py-2 active:border-primary-500"
		id={name}
		{name}
		{type}
		placeholder={label}
	/>
</div>
