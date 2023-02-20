export let load;
load = () => {
	return {
		seo: {
			title: 'Full-Service Facilities Contractor | Sandbar Mechanical',
			description:
				'Your trusted full-service commercial contractor. Contact us for quality solutions at competitive prices.',
		},
		header: {
			upperTitle: 'Sandbar Mechanical',
			title: 'Full-Service Facilities Contractor',
			description: 'Expert solutions for all your commercial facilities needs',
			button: {
				title: 'Request A Quote',
				href: '/contact',
			},
		},
		services: {
			title: 'Our Services',
			items: [
				{
					icon: 'hvac',
					title: 'Commercial HVAC',
					description:
						'Authoritatively disseminate revolutionary partnerships without interdependent.',
				},
				{
					icon: 'refrigeration',
					title: 'Commercial Refrigeration',
					description:
						'Authoritatively disseminate revolutionary partnerships without interdependent.',
				},
				{
					icon: 'plumbing',
					title: 'Commercial Plumbing',
					description:
						'Authoritatively disseminate revolutionary partnerships without interdependent.',
				},
				{
					icon: 'kitchen',
					title: 'Kitchen Equipment',
					description:
						'Authoritatively disseminate revolutionary partnerships without interdependent.',
				},
				{
					icon: 'electrical',
					title: 'Electrical',
					description:
						'Authoritatively disseminate revolutionary partnerships without interdependent.',
				},
			],
		},
		about: {
			title: 'About Us',
			description:
				"Welcome to Sandbar Mechanical! We have over 23 years of experience as a trusted HVAC company in Hemet, CA, and we're here to handle all of your HVAC, refrigeration, and general contracting needs. Our team of experts is highly qualified and dedicated to delivering quality solutions at competitive prices. We've been serving commercial properties in the area for years, including restaurants, and we're proud of the reputation we've built for providing excellent service and reliable results.",
			image: {
				path: 'home/truck.webp',
				alt: 'One of Sandbar Mechanical Service Trucks',
				dev: true,
			},
			stats: [
				{
					title: '23+',
					description: 'Years of Experience',
				},
				{
					title: '150+',
					description: 'Customers',
				},
				{
					title: '200+',
					description: 'Projects',
				},
			],
			button: {
				title: 'About Sandbar',
				href: '/about',
			},
		},
	};
};
