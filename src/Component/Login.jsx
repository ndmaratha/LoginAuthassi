import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const{login}=useAuth();
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = await fetch("https://dummyjson.com/auth/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				username: username,
				password: password,
				// expiresInMins: 60, // optional
			}),
		});
		const res = await data.json();
		console.log(res);
		login(res?.token)
		navigate("/",{replace:true});
	};

	return (
		<div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<h2 className="text-center text-3xl font-extrabold text-gray-900">
					Sign in to your account
				</h2>
			</div>

			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<form className="space-y-6" onSubmit={handleSubmit}>
						<div>
							<label
								htmlFor="username"
								className="block text-sm font-medium text-gray-700"
							>
								Username or Email
							</label>
							<input
								id="username"
								name="username"
								type="text"
								autoComplete="username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								required
								className="mt-1 p-3 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
							/>
						</div>

						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700"
							>
								Password
							</label>
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
								className="mt-1 p-3 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
							/>
						</div>

						<div>
							<button
								type="submit"
								className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
							>
								Sign in
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
