<script>
	import { slide } from 'svelte/transition';
	import { idxOfOpenFaq } from './store';

	export let data;
	export let border;
	export let idx;
	let faqIsOpen = false;

	const handleFaqToggle = () => {
		const selectedText = window.getSelection().toString().length;
		if (!selectedText) {
			faqIsOpen = !faqIsOpen;
			$idxOfOpenFaq = faqIsOpen ? idx : null;
		}
	};

	$: if ($idxOfOpenFaq !== idx) {
		faqIsOpen = false;
	}
</script>

<div
	on:keypress={handleFaqToggle}
	on:click={handleFaqToggle}
	class="py-7 px-4 {border && 'border-b border-grey-200'}"
>
	<div class="flex cursor-pointer items-center justify-between">
		<h4>{data.question}</h4>
		<p
			class="rotate-0 select-none text-2xl transition-all {faqIsOpen &&
				'rotate-[45deg] text-primary-500'}"
		>
			+
		</p>
	</div>
	{#if faqIsOpen}
		<p transition:slide class="mt-3">{data.answer}</p>
	{/if}
</div>
