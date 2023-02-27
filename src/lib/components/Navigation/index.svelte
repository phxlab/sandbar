<script>
	import { Hamburger } from 'svelte-hamburgers';
	import { page } from '$app/stores';
	import { Container, imageHandler } from '$lib';
	import { onMount } from 'svelte';

	const links = [
		{ href: '/', title: 'Home' },
		{ href: '/about', title: 'About' },
		{ href: '/services', title: 'Services' },
		{ href: '/projects', title: 'Projects' },
		{ href: '/Contact', title: 'Contact' },
	];

	// Bindings
	let activeNode;
	let navNode;

	// Store
	let activeX;
	let navSize = navNode?.offsetWidth;

	// Sate
	let resize = false;
	let open;

	const handleResize = () => {
		resize = true;
		activeX = activeNode?.getBoundingClientRect().x;
		setTimeout(() => {
			resize = false;
		}, 100);
	};

	$: navSize, handleResize();
	$: activeNode, (activeX = activeNode?.getBoundingClientRect().x);

	onMount(() => {
		const resizeObserver = new ResizeObserver(() => {
			navSize = navNode?.offsetWidth;
		});

		resizeObserver.observe(navNode);

		return () => resizeObserver.unobserve(navNode);
	});
</script>

<nav bind:this={navNode} class="relative h-14 w-full md:h-20">
	<Container class="flex h-full items-center justify-between">
		<!-- Logo -->
		<div class="lg:w-1/4">
			<a href="/">
				<img alt="Sandbar Mechanical Logo" class="h-10 md:h-14" src={imageHandler('logo.svg')} />
			</a>
		</div>

		<!-- Links -->
		<div class="flex hidden h-full items-center justify-center gap-10 md:flex lg:w-1/2">
			{#each links as link}
				<div class="flex h-full items-center">
					{#if $page.url.pathname === link.href}
						<a href={link.href} bind:this={activeNode} class="text-primary-500">
							{link.title}
						</a>
					{:else}
						<a href={link.href} class="hover:text-primary-500">
							{link.title}
						</a>
					{/if}
				</div>
			{/each}
		</div>

		<!-- Phone Number -->
		<div class="hidden w-1/4 items-center justify-end gap-4 lg:flex">
			<svg
				width="30"
				height="31"
				viewBox="0 0 30 31"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clip-path="url(#clip0_1_32)">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M21.7688 18.833C21.3963 18.6468 19.57 17.7493 19.23 17.6243C18.89 17.5005 18.6425 17.4393 18.3938 17.8118C18.1463 18.1818 17.435 19.0193 17.2188 19.2668C17.0013 19.5155 16.785 19.5455 16.4138 19.3605C16.0425 19.173 14.845 18.7818 13.4263 17.5168C12.3225 16.5318 11.5763 15.3155 11.36 14.943C11.1438 14.5718 11.3363 14.3705 11.5225 14.1855C11.69 14.0193 11.8938 13.7518 12.08 13.5355C12.2663 13.318 12.3275 13.163 12.4513 12.9143C12.5763 12.6668 12.5138 12.4505 12.42 12.2643C12.3275 12.078 11.585 10.2493 11.275 9.50552C10.9738 8.78177 10.6675 8.88052 10.44 8.86802C10.2225 8.85802 9.975 8.85552 9.7275 8.85552C9.48 8.85552 9.0775 8.94802 8.7375 9.32052C8.39625 9.69177 7.4375 10.5905 7.4375 12.4193C7.4375 14.2468 8.7675 16.013 8.95375 16.2618C9.14 16.5093 11.5725 20.2618 15.2988 21.8705C16.1863 22.253 16.8775 22.4818 17.4163 22.6518C18.3063 22.9355 19.1163 22.8955 19.7563 22.7993C20.4688 22.693 21.9538 21.9005 22.2638 21.033C22.5725 20.1655 22.5725 19.4218 22.48 19.2668C22.3875 19.1118 22.14 19.0193 21.7675 18.833H21.7688ZM14.9913 28.0868H14.9863C12.773 28.0872 10.6005 27.4922 8.69625 26.3643L8.24625 26.0968L3.56875 27.3243L4.8175 22.7643L4.52375 22.2968C3.28642 20.3272 2.63162 18.0477 2.635 15.7218C2.6375 8.90927 8.18 3.36677 14.9963 3.36677C18.2963 3.36677 21.3988 4.65427 23.7313 6.98927C24.8817 8.135 25.7936 9.49748 26.4141 10.9979C27.0346 12.4983 27.3514 14.1069 27.3463 15.7305C27.3438 22.543 21.8013 28.0868 14.9913 28.0868ZM25.5063 5.21552C24.129 3.82917 22.4903 2.72994 20.6851 1.98152C18.8799 1.2331 16.9442 0.850373 14.99 0.85552C6.7975 0.85552 0.1275 7.52427 0.125 15.7205C0.121204 18.329 0.805468 20.8923 2.10875 23.1518L0 30.8555L7.88 28.788C10.0598 29.9757 12.5026 30.598 14.985 30.598H14.9913C23.1838 30.598 29.8538 23.9293 29.8563 15.7318C29.8623 13.7784 29.481 11.8431 28.7343 10.0381C27.9876 8.23298 26.8905 6.59386 25.5063 5.21552Z"
						fill="#643C92"
					/>
				</g>
				<defs>
					<clipPath id="clip0_1_32">
						<rect width="30" height="30" fill="white" transform="translate(0 0.855469)" />
					</clipPath>
				</defs>
			</svg>
			<a href="tel:9099949667" class="font-base font-bold">(909) 994-9667</a>
		</div>

		<!-- Hamburger -->
		<div class="md:hidden">
			<Hamburger --color="#633B92" bind:open />
		</div>

		<div
			class={`active ${resize && 'noTransition'}`}
			style={`
				position: absolute;
				width: ${activeNode?.offsetWidth}px;
				height: 4px;
				left: ${activeX}px;
				transition: 0.5s ease;
				bottom: 0;
				border-radius: 4px;
			`}
		/>
	</Container>
</nav>

<style lang="postcss">
	.active {
		background-color: theme('colors.primary.500');
	}

	.noTransition {
		transition: none !important;
	}
</style>
