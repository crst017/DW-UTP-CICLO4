import React, { useState, useEffect } from "react";
import "./login.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Alert } from "@material-ui/lab";

const uri = "http://localhost:3001/api/";

export default function FormLogin() {
  const history = useHistory();
  const loginUser = async (user) => await axios.post(uri + "auth/login", user);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  

  const [errormsg, setErrormsg] = useState("");
  const [successmsg, setSuccessmsg] = useState("");

  const onLogin = () => {
    //   console.log('Login');
    //   console.log(loginData);
      loginUser(loginData)
        .then((res) => {
            console.log(res);
            setLoginData({
                email: "",
                password: "",
            });
            history.push('/interfaz')
            localStorage.setItem('token', res.data.jwtToken)
        })
        .catch((e) => {
            console.log(e.response.data.message);
            setErrormsg(e.response.data.message);
            closeAlert(3000);
        })
  }

  const closeAlert = (time) => {
    setTimeout(() => {
      setErrormsg("");
      setSuccessmsg("");
    }, time);
  };

  return (
    <div className="form-body login">
      <main className="form-signin">
        {/* <form> */}
        <h1 className="h3 mb-3 fw-normal">Login</h1>
        <div className="container alertaTask">
          {successmsg !== "" ? (
            <Alert
              variant="outlined"
              severity="success"
              className="alertaTask"
              onClose={() => closeAlert(0)}
            >
              {successmsg}
            </Alert>
          ) : (
            <div></div>
          )}

          {errormsg !== "" ? (
            <Alert
              variant="outlined"
              severity="error"
              className="alertaTask"
              onClose={() => closeAlert(0)}
            >
              {errormsg}
            </Alert>
          ) : (
            <div></div>
          )}
        </div>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingEmailLogin"
            placeholder="name@example.com"
            required
            value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
          ></input>
          <label htmlFor="floatingEmailLogin">Correo</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPasswordLogin"
            placeholder="Password"
            required
            value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
          ></input>
          <label htmlFor="floatingPasswordLogin">Contraseña</label>
        </div>
        <button className="w-100 btn btn-lg btn-secondary" type="submit" onClick={() => onLogin(loginData)}
            routerlink="interfaz">
          Ingresar
        </button>
        <p>
          ¿No tienes una cuenta?{" "}
          <a className="register-link" href="/registro">
            {" "}
            Regístrate
          </a>
        </p>
        {/* </form> */}
      </main>
    </div>
  );
}
