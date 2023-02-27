<script>
	import { Arrow, Electrical, Hvac, Kitchen, Plumbing, Refrigeration } from './icons';

	export let name;
	let className = '';
	export { className as class };
</script>

{#if name === 'hvac'}
	<Hvac className={`${className} transition-colors`} />
{/if}

{#if name === 'arrow'}
	<Arrow className={`${className} transition-colors`} />
{/if}

{#if name === 'refrigeration'}
	<Refrigeration className={`${className} transition-colors`} />
{/if}

{#if name === 'plumbing'}
	<Plumbing className={`${className} transition-colors`} />
{/if}

{#if name === 'kitchen'}
	<Kitchen className={`${className} transition-colors`} />
{/if}

{#if name === 'electrical'}
	<Electrical className={`${className} transition-colors`} />
{/if}
