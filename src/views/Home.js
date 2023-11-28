/*global chrome*/

import React, { useEffect, useState } from "react";
import useSWR from "swr";

import Layout from "../components/Layout";
import Header from "../components/Header";
import PlayingNow from "../components/PlayingNow";
import { getURL } from "../utils/server";

/* interface SyncData {
	id: string;
	partyId: string;
	serviceId: "yt-music" | "spotify";
	device: {
		id: string;
		name: string;
	};
	media: {
		id: string;
		title: string;
		artist: string;
		album?: string;
		duration?: number;
		url: string;
	};
} */

const fetcher = url => fetch(url).then(res => res.json());

export default function Home() {
	const [ytPlayers, setYtPlayers] = useState([]);
	const [spotifyPlayers, setSpotifyPlayers] = useState([]);
	const [party, setParty] = useState("");

	const { data } = useSWR(`${getURL(true)}/api/log/sync?party=${party}`, fetcher, {
		refreshInterval: 5000,
	});

	useEffect(() => {
		chrome.storage.sync.get("party", items => {
			setParty(items.party);
		});
	}, []);

	useEffect(() => {
		if (!data || !data.data) return;

		setYtPlayers(data.data.yt_devices);
		setSpotifyPlayers(data.data.spotify_devices);
	}, [data]);

	return (
		<Layout>
			<Header />
			<main className="flex flex-col gap-5 p-2 bg-stone-100 h-[424px] overflow-y-auto">
				<PlayingNow serviceId="yt-music" players={ytPlayers} />
				<PlayingNow serviceId="spotify" players={spotifyPlayers} />
			</main>
		</Layout>
	);
}
