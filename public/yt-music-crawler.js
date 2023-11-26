const app = document.getElementsByTagName("ytmusic-app")[0];
const queue = app.queue_;
const api = queue.playerApi;

console.log(api);

setInterval(() => {
	const data = api.getVideoData();

	if (!data.video_id) return;

	const id = data.video_id;
	const title = data.title;
	const artist = data.author;
	const link = api.getVideoUrl();

	const message = {
		type: "playback",
		media: {
			id,
			title,
			artist,
			link,
		},
	};

	const event = new CustomEvent("yt-music-data", { detail: message });
	window.dispatchEvent(event);
}, 1000);
