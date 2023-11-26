import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
	const { pathname } = useLocation();

	return (
		<>
			<header className="flex justify-between items-center bg-violet-600 text-purple-100 px-3 pt-3">
				<div>
					<h1 className="text-2xl font-semibold">Musync</h1>
					<h2 className="text-sm">Sincronize suas músicas.</h2>
				</div>
				<div>
					{pathname === "/settings" ? (
						<Link to="/">
							<svg
								stroke="currentColor"
								fill="currentColor"
								strokeWidth="0"
								viewBox="0 0 24 24"
								height="36px"
								width="36px"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path fill="none" d="M0 0h24v24H0z"></path>
								<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
							</svg>
						</Link>
					) : (
						<Link to="/settings">
							<svg
								stroke="currentColor"
								fill="currentColor"
								strokeWidth="0"
								viewBox="0 0 24 24"
								height="36px"
								width="36px"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path fill="none" d="M0 0h24v24H0z"></path>
								<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
							</svg>
						</Link>
					)}
				</div>
			</header>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180" className="bg-stone-100">
				<path
					fill="#7c3aed"
					fillOpacity="1"
					d="M0,160L80,144C160,128,320,96,480,101.3C640,107,800,149,960,149.3C1120,149,1280,107,1360,85.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
				></path>
			</svg>
		</>
	);
}
