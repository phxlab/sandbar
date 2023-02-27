<script>
	import { page } from '$app/stores';
	import { navigationStore, scrollLock } from '$lib';

	export let open;

	const toggleMobileNav = () => {
		open = false;
	};

	const toggleScrollLock = () => {
		scrollLock.set(!$scrollLock);
		console.log('Scroll Lock: ' + $scrollLock);
	};

	$: open, toggleScrollLock();
</script>

<div class="nav absolute z-30 w-full bg-primary-500">
	<div class="flex flex-col">
		{#each $navigationStore as item}
			<a
				on:click={toggleMobileNav}
				class={`${
					$page.url.pathname === item.href && 'bg-primary-600'
				} p-7 text-lg text-grey-100 active:bg-primary-800`}
				href={item.href}
			>
				{item.title}
			</a>
		{/each}
	</div>
</div>

<style>
	.nav {
		height: calc(100vh - 56px);
		top: 56px;
		left: 0;
	}
</style>
