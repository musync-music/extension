const TITLE_QUERY = "div[data-testid='context-item-info-title'] a[data-testid='context-item-link']";
const SUBTITLE_QUERY =
	"div[data-testid='context-item-info-subtitles'] a[data-testid='context-item-info-artist']";
const URL_QUERY = "div[data-testid='CoverSlotCollapsed__container'] a[data-testid='context-link']";

setInterval(() => {
	const title = document.querySelector(TITLE_QUERY);
	const artist = document.querySelector(SUBTITLE_QUERY);
	const url = document.querySelector(URL_QUERY);

	if (!title || !artist || !url) return;

	const message = {
		type: "playback",
		serviceId: "spotify",
		media: {
			id: `${title.innerHTML.toLocaleLowerCase()}-${artist.innerHTML.toLocaleLowerCase()}`,
			title: title.innerHTML,
			artist: artist.innerHTML,
			url: url.href,
		},
	};

	const event = new CustomEvent("crawler-data", { detail: message });
	window.dispatchEvent(event);
}, 1000);
