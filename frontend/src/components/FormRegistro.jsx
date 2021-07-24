import React from 'react';
import './login.css'

export default function FormRegistro() {
    return (
        <div className="form-body login registro">
            <main className="form-signin">
                <form>
                    <h1 className="h3 mb-3 fw-normal">Registro</h1>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingName" placeholder="Nombre completo" required></input>
                        <label htmlFor="floatingName">Nombre Completo</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" required></input>
                        <label htmlFor="floatingEmail">Correo</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingNickname" placeholder="Nombre de usuario" required></input>
                        <label htmlFor="floatingNickname">Nombre de usuario</label>
                    </div>
                    <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required></input>
                    <label htmlFor="floatingPassword">Contraseña</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-secondary" type="submit">Registrarse</button>
                    <p>¿Ya tienes una cuenta? <a href="/login"> Ingresa</a></p>
                </form>
            </main>
        </div>
        
    )
}