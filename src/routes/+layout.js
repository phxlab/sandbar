export let load;
load = () => {
	return {
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
