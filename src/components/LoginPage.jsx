import React from 'react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Context } from './Context'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {

	const { login } = useContext(Context);
	const { setUser } = useContext(Context);
	const navigate = useNavigate();

    const {
		register, handleSubmit, formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		login();
		console.log(data);
		setUser(data);

		const lastPath = localStorage.getItem("lastPath") || "/";
		navigate(lastPath, {
			replace: true,
		});
	};

  return (
    <div>
        <h1>Registrate</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
				<div className="inputsCs"></div>
				<input placeholder="Ej: JuanSe9021" {...register("user")}/>
				<input placeholder="********" type="password" {...register("password", { required: true })}/>

				{errors.exampleRequired && <span>This field is required</span>}

				<input type="submit" />
			</form>
    </div>
  )
}
