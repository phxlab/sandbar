<script>
	import Icon from './Icon.svelte';

	export let data;
	let hover = false;

	const handleHover = (bool) => {
		hover = bool;
	};
</script>

<div
	on:mouseenter={() => handleHover(true)}
	on:mouseleave={() => handleHover(false)}
	class={`flex flex-col items-center justify-between rounded-2xl py-12 px-12 px-6 text-center transition-all ${
		hover ? 'bg-primary-500' : 'bg-grey-100'
	}`}
>
	<Icon name={data.icon} class={hover ? 'fill-grey-100' : 'fill-primary-500'} />
	<div>
		<h4 class={`${hover ? 'text-grey-100' : 'text-grey-900'} pt-7 pb-2 transition-colors`}>
			{data.title}
		</h4>
		<p class={`${hover ? 'text-grey-100' : 'text-grey-900'} transition-colors`}>
			{data.description}
		</p>
	</div>
	<a
		href={data.href}
		class={`${hover ? 'text-grey-100' : 'text-grey-900'} flex items-center gap-2 transition-colors`}
	>
		Learn More <Icon
			name="arrow"
			class={`relative ${
				hover ? 'left-2 fill-grey-100' : 'left-0 fill-primary-500'
			} transition-all`}
		/>
	</a>
</div>
