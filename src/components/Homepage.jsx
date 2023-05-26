import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from './Context'

export const Homepage = () => {
  let { isLoggedIn } = useContext(Context);
	const { logout } = useContext(Context);
	const { user } = useContext(Context);
	const navigate = useNavigate();
  console.log(isLoggedIn);
  
	const logOut = () => {
		logout();
		navigate("/login");
	};

  return (
    <>
    <div className="Ingresaste">
      <h1>Ya iniciaste sección</h1>
    </div>
      <h2>Tus usuario y contraseña es:</h2>
      <a> {`Usuario: ${user.user}`} </a>
			<a> {`Contraseña: ${user.password}`} </a>
			<button onClick={() => logOut()}> Log out </button>
    </>
  )
}
