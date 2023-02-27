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
				href: '/Contact',
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
		faqs: {
			title: 'Frequently Asked Questions',
			image: {
				path: 'home/refrigeration.webp',
				alt: 'Refrigeration Unit',
				dev: true,
			},
			items: [
				{
					question: 'What services do you offer?',
					answer:
						'We offer a range of commercial-only services, including HVAC, refrigeration, kitchen equipment, plumbing, flooring, and electrical services. We provide repair, maintenance, replacement, and installation services for each of these areas.',
				},
				{
					question: 'Are you only available for commercial properties?',
					answer:
						'Yes, we specialize in serving commercial properties, including restaurants and other businesses.',
				},
				{
					question: 'What type of HVAC services do you provide?',
					answer:
						'We provide a full range of HVAC services, including installation, maintenance, repair, and replacement. Our services cover all types of commercial HVAC systems.',
				},
				{
					question: 'Do you offer kitchen equipment repair services?',
					answer:
						'Yes, we offer repair and maintenance services for a range of commercial kitchen equipment, including ovens, fryers, refrigerators, and more.',
				},
				{
					question: 'Do you provide emergency services?',
					answer:
						'Yes, we offer emergency repair services for all our commercial services, including HVAC, refrigeration, kitchen equipment, plumbing, flooring, and electrical systems.',
				},
				{
					question: 'What is included in the maintenance services you offer?',
					answer:
						'Our maintenance services include regular inspections, cleaning, and testing of all commercial systems, as well as preventative measures to ensure efficient and safe operation.',
				},
				{
					question: 'Do you offer installation services for flooring and electrical systems?',
					answer:
						'Yes, we offer installation services for a range of commercial flooring and electrical systems. Our experienced team can help you select the best options for your needs and budget.',
				},
				{
					question: 'How do you ensure the quality of your services?',
					answer:
						'We are committed to providing the highest quality services to our commercial clients. We have a team of experienced technicians and use the best tools and techniques available to ensure the best results.',
				},
				{
					question: 'Do you offer competitive pricing?',
					answer:
						'Yes, we offer competitive pricing for all our commercial services. We strive to provide the best value for our clients.',
				},
				{
					question: 'What sets you apart from other HVAC companies in the area?',
					answer:
						'We have over 23 years of experience serving commercial clients in the area, and we are committed to providing the highest quality services and customer satisfaction. Our team of experienced technicians can handle all your commercial needs, from installation to maintenance and repair.',
				},
			],
		},
		contact: {
			background: {
				path: 'backgrounds/contact-bg.webp',
			},
		},
	};
};
