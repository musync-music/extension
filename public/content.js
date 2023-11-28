/* 
interface PostHandlerBody {
	party: string;
	serviceId: "yt-music" | "spotify";
	deviceId: string;
	deviceName: string;
	media: {
		id: string;
		title: string;
		artist: string;
		album?: string;
		duration?: number;
		url: string;
	};
} 
*/

window.addEventListener(
	"crawler-data",
	event => {
		data = event.detail;
	},
	false
);

setInterval(() => {
	chrome.runtime.sendMessage(data);
}, 5000);
