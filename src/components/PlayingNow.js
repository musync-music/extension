import React from "react";

import { SERVICES } from "../utils/services";
import DeviceQuery from "./DeviceQuery";

export default function PlayingNow({ serviceId, players }) {
	const service = SERVICES[serviceId];

	return (
		<>
			<div className="flex flex-col gap-2">
				<header className="flex items-center gap-2">
					<img
						className="w-[16px] h-[16px]"
						src={service.icon}
						alt={`Ícone do ${service.name}`}
					/>
					<h3 className="text-sm font-medium">Tocando agora no {service.name}:</h3>
				</header>
				{players.length > 0 ? (
					players.map(player => <DeviceQuery key={player.id} player={player} />)
				) : (
					<>
						<h2 className="text-center font-medium text-sm italic">
							Não há dispositivos reproduzindo mídia nesse serviço.
						</h2>
					</>
				)}
			</div>
		</>
	);
}
