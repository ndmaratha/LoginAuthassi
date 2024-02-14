import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Header = () => {
	const { isAuthenticated, logout } = useAuth();
	return (
		<div className="bg-gray-800 text-white p-4 flex justify-between items-center">
			<Link to={"/"}>
				<h1 className="text-2xl font-bold">ShopIndia</h1>
			</Link>

			<Link to={"/cart"}>
				<div className="flex items-center space-x-2">
					<span>Cart</span>
				</div>
			</Link>
			{isAuthenticated ? (
				<button
					onClick={logout}
					className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
				>
					Logout
				</button>
			) : (
				<Link to={"/login"}>
					<button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
						Login
					</button>
				</Link>
			)}
		</div>
	);
};

export default Header;
