import React from 'react'
import { createContext, useState } from 'react'

export const Context = createContext();

export const Provider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState({});
	const login = () => setIsLoggedIn(true);
	const logout = () => setIsLoggedIn(false);

	return <Context.Provider value={{ isLoggedIn, login, logout, user, setUser }}>{children}</Context.Provider>;
};
