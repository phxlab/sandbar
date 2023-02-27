export let load;
load = () => {
	return {
		navigation: {
			links: [
				{
					title: 'Home',
					href: '/',
				},
				{
					title: 'About',
					href: '/about',
				},
				{
					title: 'Services',
					href: '/services',
				},
				{
					title: 'Projects',
					href: '/projects',
				},
				{
					title: 'Contact',
					href: '/contact',
				},
			],
		},
		services: [
			{
				title: 'Commercial HVAC',
				href: '/services/commercial-hvac',
			},
			{
				title: 'Commercial Refrigeration',
				href: '/services/commercial-refrigeration',
			},
			{
				title: 'Commercial Plumbing',
				href: '/services/commercial-plumbing',
			},
			{
				title: 'Kitchen Equipment',
				href: '/services/kitchen-equipment',
			},
			{
				title: 'Electrical',
				href: '/services/electrical',
			},
		],
		footer: {
			info: {
				logo: 'logo-white.svg',
				tagline: 'Experience the comfort of quality commercial services with Sandbar Mechanical.',
				social: [
					{
						type: 'Facebook',
						href: 'https://www.facebook.com/SandbarMechanical/',
					},
					{
						type: 'Instagram',
						href: 'https://www.instagram.com/sandbar_mechanical/',
					},
					{
						type: 'LinkedIn',
						href: 'https://www.linkedin.com/company/sandbar-mechanical',
					},
				],
			},
		},
		contact: [
			{
				title: '(909) 532-9305',
				icon: 'icons/phone.svg',
				href: 'tel:',
			},
			{
				title: 'service@sandbarmechanical.com',
				icon: 'icons/email.svg',
				href: 'mailto:',
			},
		],
		hours: [
			{
				day: 'Mon - Fri',
				time: '8 AM - 5 PM',
			},
			{
				day: 'Sat - Sun',
				time: 'Closed',
			},
		],
	};
};
