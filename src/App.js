/*global chrome*/

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./main.css";

import Home from "./views/Home";
import Settings from "./views/Settings";

const router = createBrowserRouter([
	{
		path: "*",
		element: <Home />,
	},
	{
		path: "/settings",
		element: <Settings />,
	},
]);

const App = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
