import React from 'react';
import './login.css'

export default function FormLogin() {
    return (
        <div className="form-body">
            <main className="form-signin">
                <form>
                    <h1 className="h3 mb-3 fw-normal">Login</h1>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingEmailLogin" placeholder="name@example.com" required></input>
                        <label htmlFor="floatingEmailLogin">Correo</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPasswordLogin" placeholder="Password" required></input>
                        <label htmlFor="floatingPasswordLogin">Contraseña</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Ingresar</button>
                    <p>¿No tienes una cuenta? <a href="/"> Regístrate</a></p>
                </form>
            </main>
        </div>
        
    )
}