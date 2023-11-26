import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout";
import Header from "../components/Header";

export default function Settings() {
	const [name, setName] = useState("");
	const [party, setParty] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		chrome.storage.sync.get(["deviceName", "party"], items => {
			const deviceName = items.deviceName;
			const party = items.party;

			setName(deviceName || "");
			setParty(party || "");
		});
	}, []);

	const submit = useCallback(event => {
		event.preventDefault();
		const newName = event.target[0].value;
		const newParty = event.target[1].value;

		if (!newName || !newParty) return;

		chrome.storage.sync.set({ deviceName: newName, party: newParty });
		navigate("/");
	}, []);

	return (
		<Layout>
			<Header />
			<main className="flex flex-col gap-2 p-2 bg-stone-100 h-[424px] overflow-y-auto">
				<h2 className="text-xl font-medium">Configurações</h2>
				<form onSubmit={submit} className="flex flex-col gap-4">
					<div className="flex flex-col gap-1 w-full">
						<span>Altere o nome deste dispositivo:</span>
						<input
							id="deviceName"
							type="text"
							defaultValue={name}
							placeholder="Nome do dispositivo:"
							className="p-2 bg-stone-200 active:outline-purple-400/30"
							min={2}
							max={50}
						/>
					</div>
					<div className="flex flex-col gap-1 w-full">
						<span>Insira o seu código de grupo:</span>
						<input
							id="party"
							type="text"
							defaultValue={party}
							placeholder="Código de grupo:"
							className="p-2 bg-stone-200 active:outline-purple-400/30"
							min={10}
							max={50}
						/>
					</div>
					<input
						type="submit"
						className="p-2 w-full bg-purple-500 text-stone-100 cursor-pointer hover:brightness-95 duration-200"
						value="Salvar"
					/>
				</form>
			</main>
		</Layout>
	);
}
