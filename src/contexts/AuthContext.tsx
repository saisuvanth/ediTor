import { createContext, useEffect, useReducer, useState } from "react";


const AuthContext = createContext<string>('');

const AuthContextProvider = ({ children }: any) => {
	const [token, setToken] = useState<string>('');

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			setToken(token);
		} else {

		}
	}, [children])

	return (
		<AuthContext.Provider value={token}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthContextProvider;