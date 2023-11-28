import React from "react";

export default function DeviceQuery({ player }) {
	if (!player) return null;

	return (
		<>
			<section className="flex flex-col gap-2 truncate">
				<span className="font-light text-xs">
					Reproduzindo em: {player.device.name || player.media.id}
				</span>
				<div className="flex items-center gap-2 truncate">
					{player.media ? (
						<>
							<a
								className="flex justify-center items-center p-1 bg-violet-600 rounded-xl"
								href={player.media.url}
								target="_blank"
							>
								<svg
									className="bg-violet-600 text-purple-100"
									stroke="currentColor"
									fill="currentColor"
									strokeWidth="0"
									viewBox="0 0 24 24"
									height="40px"
									width="40px"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path fill="none" d="M0 0h24v24H0V0z"></path>
									<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"></path>
								</svg>
							</a>
							<div className="truncate">
								<h4 className="font-medium">{player.media.title}</h4>
								<span className="font-light">
									{player.media.artist}
									{player.media.album ? " • " + player.media.album : null}
								</span>
							</div>
						</>
					) : (
						<>
							<h2 className="text-center font-medium text-sm italic">
								Não há mídia sendo reproduzida nesse dispositivo.
							</h2>
						</>
					)}
				</div>
			</section>
		</>
	);
}
