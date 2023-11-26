let data = null;

window.addEventListener(
	"yt-music-data",
	event => {
		data = event.detail;
	},
	false
);

setInterval(() => {
	chrome.runtime.sendMessage(data);
}, 1000);
