/*global chrome*/

import React, { useEffect, useState } from "react";

import Layout from "../components/Layout";
import Header from "../components/Header";
import PlayingNow from "../components/PlayingNow";

/* const device = {
	id: "",
	name: "",
	media: {
		id: "",
		title: "",
		artist: "",
		album: "",
		link: "",
	},
}; */

export default function Home() {
	const [ytDevices, setYtDevices] = useState([]);
	const [spotifyDevices, setSpotifyDevices] = useState([]);

	useEffect(() => {
		let userId = "";
		chrome.storage.sync.get("userId", items => (userId = items.userId));

		chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
			if (request.type !== "playback") return;

			setYtDevices(devices => {
				const exists = devices.find(device => device.id === userId);
				if (exists) {
					return [
						...devices.filter(device => device.id !== userId),
						{ ...exists, media: request.media },
					];
				}

				return [
					...devices,
					{
						id: userId,
						name: "Este dispositivo",
						media: request.media,
					},
				];
			});
		});
	}, []);

	return (
		<Layout>
			<Header />
			<main className="flex flex-col gap-5 p-2 bg-stone-100 h-[424px] overflow-y-auto">
				<PlayingNow serviceId="yt-music" devices={ytDevices} />
				<PlayingNow serviceId="spotify" devices={spotifyDevices} />
			</main>
		</Layout>
	);
}
