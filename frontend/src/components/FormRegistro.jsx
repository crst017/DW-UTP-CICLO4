import React, { useState, useEffect } from "react";
import axios from "axios";
import { Alert } from "@material-ui/lab";
import "./login.css";
import { useHistory } from 'react-router-dom'

const uri = "http://localhost:3001/api/";

export default function FormRegistro() {

  useEffect(() => {
    getCompanies();
    return () => {
      
    };
  }, []);

  const history = useHistory();
  const registerUser = (user) => axios.post(uri + "user/newUser", user);
  const fetchCompanies = () => axios.get(uri + "company/getCompany")

  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    userName: "",
    password: "",
    idCompany: "",
  });
  const [companies, setCompanies] = useState([])

  const [errormsg, setErrormsg] = useState("");
  const [successmsg, setSuccessmsg] = useState("");

  const onRegister = () => {
    registerUser(registerData)
      .then((res) => {
        setSuccessmsg("User registered successfully");
        closeAlert(3000);
        setRegisterData({
          fullName: "",
          email: "",
          userName: "",
          password: "",
          idCompany: "",
        });
        history.push('/login') 
      })
      .catch((e) => {
        console.log(registerData);
        setErrormsg(e.response.data.message);  
        console.log(e.response.data.message);
        closeAlert(3000);
      });
  };


  const getCompanies = () => {
    fetchCompanies()
      .then((res) => {
        console.log(res.data.company);
        setCompanies(res.data.company)
      })
      .catch((e) => {
        setErrormsg(e.response.data.message);  
        console.log(e.response.data.message);
        closeAlert(3000);
      });
  }

  
  const closeAlert = (time) => {
    setTimeout(() => {
      setErrormsg("");
      setSuccessmsg("");
    }, time);
  };

  return (
    <div className="form-body login registro">
      <main className="form-signin">
        {/* <form> */}
          <h1 className="h3 mb-3 fw-normal">Registro</h1>
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
              type="text"
              className="form-control"
              id="floatingName"
              placeholder="Nombre completo"
              required
              value={registerData.fullName}
              onChange={(e) =>
                setRegisterData({ ...registerData, fullName: e.target.value })
              }
            ></input>
            <label htmlFor="floatingName">Nombre Completo</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingEmail"
              placeholder="name@example.com"
              required
              value={registerData.email}
              onChange={(e) =>
                setRegisterData({ ...registerData, email: e.target.value })
              }
            ></input>
            <label htmlFor="floatingEmail">Correo</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingNickname"
              placeholder="Nombre de usuario"
              required
              value={registerData.userName}
              onChange={(e) =>
                setRegisterData({ ...registerData, userName: e.target.value })
              }
            ></input>
            <label htmlFor="floatingNickname">Nombre de usuario</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              required
              value={registerData.password}
              onChange={(e) =>
                setRegisterData({ ...registerData, password: e.target.value })
              }
            ></input>
            <label htmlFor="floatingPassword">Contraseña</label>
          </div>
          <div className="form-floating">
            <select className="form-select" aria-label="Default select example" onChange={(e) =>
                  setRegisterData({ ...registerData, idCompany: e.target.value })
                } >
                <option>Seleccione</option>
              {companies.map(company => (
                <option key={company._id} value={company._id}
                >{company.companyName}</option>
              ))}
            </select>
            <label htmlFor="company">Compañía</label>
          </div>
          <button
            className="w-100 btn btn-lg btn-secondary"
            type="submit"
            onClick={() => onRegister(registerData)}
            routerlink="login"
          >
            Registrarse
          </button>
          <p>
            ¿Ya tienes una cuenta? <a href="/login"> Ingresa</a>
          </p>
        {/* </form> */}
      </main>
    </div>
  );
}
