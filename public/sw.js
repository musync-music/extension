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

chrome.runtime.onMessage.addListener(req => {
	chrome.storage.sync.get(["userId", "deviceName", "party"], items => {
		const deviceId = items.userId;
		const deviceName = items.deviceName;
		const party = items.party;

		const body = {
			party,
			serviceId: "yt-music",
			deviceId,
			deviceName,
			media: req.media,
		};

		fetch(`https://musyncmusic.vercel.app/api/log/sync`, {
			mode: "no-cors",
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json; charset=utf-8",
			},
			body: JSON.stringify(body),
		}).then(res => {
			console.log(res.status === 200 ? "Sincronizado" : "Falha na sincronização");
		});
	});
});
