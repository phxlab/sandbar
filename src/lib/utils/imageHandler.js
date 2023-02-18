const imageHandler = (path, dev = false) => {
	let base = 'https://cdn.sandbarmechanical.com';
	let url = `${base}/${path}`;
	if (dev) {
		url = `${base}/development/${path}`;
	}

	return url;
};

export default imageHandler;
