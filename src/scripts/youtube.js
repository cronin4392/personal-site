let itemsParsed = items.map((item) => {
	let textEl = item.querySelector('.ytd-channel-name');
	let linkEl = item.querySelector('.channel-link');

	if (textEl) {
		let text = textEl.innerText;
		let link = `https://www.youtube.com/${linkEl.getAttribute('href')}`;
		return {
			type: 'youtube',
			name: text,
			link: link,
			tags: [],
		};
	}
	return null;
});
console.log(itemsParsed);
