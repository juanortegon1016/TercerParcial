import React from 'react'
import { useContext } from 'react'
import { Context } from './Context'
import { useLocation, useNavigate } from 'react-router-dom'

export const PrivateRoutes = ({children}) => {

  const { isLoggedIn } = useContext(Context);
	const navigate = useNavigate();

	const { pathname, search } = useLocation();
	localStorage.setItem("lastPath", `${pathname}${search}`);

	const goToLogIn = () => {
		navigate("/login");
	};

  return isLoggedIn ? (
    children ):(
    <>
      <h1>Registrate con tu datos</h1>
      <button onClick={() => goToLogIn()}>BorrarImagen</button>  
    </>
  );
}