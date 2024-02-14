import React from "react";
import ReactDOM from "react-dom/client";
import App, { appRouter } from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import  AuthProvider  from "./Context/AuthContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
		<AuthProvider>
	<RouterProvider router={appRouter}>
			<App />
	</RouterProvider>
		</AuthProvider>
);
