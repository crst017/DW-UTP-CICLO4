import React, { useState, useEffect } from "react";
import "./Interfaz.css";
import img1 from "./img/search.png";
import img2 from "./img/upload-file.png";
import img3 from "./img/edit.png";

const Interfaz = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [role, setRole] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"))
    if (token == null) {
      return;
    } else {
      let jwtData = token.split(".")[1];
      let decodedJwtJsonData = window.atob(jwtData);
      let decodedJwtData = JSON.parse(decodedJwtJsonData);
      setRole(decodedJwtData.role);
        console.log(decodedJwtData);
      //   return role;
    }
  }, [token]);

  return (
    <div className="cont-card interfaz">
      <a className="card" href="/nuevo">
        <div className="img-cont">
          <img className="img" src={img2} alt="" />
        </div>
        <h2>Registrar Indicador</h2>
        <p>Cree un nuevo indicador mensual</p>
      </a>

      <a className="card" href="/indicadores">
        <div className="img-cont">
          <img className="img" src={img1} alt="" />
        </div>
        <h2>Consultar Registros</h2>
        <p>Consulte registros históricos</p>
      </a>

      {(role === "admin") ? (
        <a className="card" href="/editar">
          <div className="img-cont">
            <img className="img" src={img3} alt="" />
          </div>
          <h2>Editar Indicadores</h2>
          <p>Ingresar solo como administrador</p>
        </a>
      ) : <div></div>}

      {(role === "admin") && (
        <a className="card" href="/editarServicio">
          <div className="img-cont">
            <img className="img" src={img3} alt="" />
          </div>
          <h2>Editar Servicios</h2>
          <p>Ingresar solo como administrador</p>
        </a>
      )}
    </div>
  );
};

export default Interfaz;
