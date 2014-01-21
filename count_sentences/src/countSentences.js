function countSentences(string) {
	var split_array = string.split(/\./);
	var size = split_array.length;
	if (size == 1) {
		return 0
	} else {
		return size;
	};
};
