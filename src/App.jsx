import { Outlet, createBrowserRouter } from "react-router-dom";
import Login from "./Component/Login";
import Body from "./Component/Body";
import Cart from "./Component/Cart";
import Header from "./Component/Header";
import { useState } from "react";
import PrivateRoute from "./Component/PrivateRoute";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}
export const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/",
				element: (
					<PrivateRoute>
						<Body />
					</PrivateRoute>
				),
			},
			{
				path: "/cart",
				element: <Cart />,
			},
		],
	},
]);
export default App;
