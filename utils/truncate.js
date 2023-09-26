function truncateText(text, limit) {
	if (text.length <= limit) {
		return text;
	}
	return text.slice(0, limit) + "...";
}

export default truncateText;
