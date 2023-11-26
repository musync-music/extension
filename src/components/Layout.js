import React from "react";

export default function Layout({ children }) {
	return (
		<>
			<div className="w-[300px] h-[500px] text-stone-950">{children}</div>
		</>
	);
}
