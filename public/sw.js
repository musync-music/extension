function uniqueId() {
	var randomPool = new Uint8Array(32);
	crypto.getRandomValues(randomPool);
	var hex = "";
	for (var i = 0; i < randomPool.length; ++i) {
		hex += randomPool[i].toString(16);
	}

	return hex;
}

chrome.storage.sync.get("userId", items => {
	var userId = items.userId;

	if (!userId) {
		userId = uniqueId();
		chrome.storage.sync.set({ userId });
	}
});
