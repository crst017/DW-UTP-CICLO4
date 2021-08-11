import React from 'react';
import './Interfaz.css';
import img1 from './img/search.png';
import img2 from './img/upload-file.png';
import img3 from './img/edit.png';

const Interfaz = () => {
    return (

            <div className="cont-card interfaz">

                <a className='card' href="/nuevo">
                    <div className="img-cont">
                        <img className="img" src={img2} alt="" />
                    </div>
                    <h2>Ingresar sus datos</h2>
                    <p>Ingrese su información para ser almacenada</p>
                </a>

                <a className="card" href="/indicadores">
                <div className="img-cont">
                        <img className="img" src={img1} alt="" />
                    </div>
                    <h2>Consultar registros</h2>
                    <p>Consulte registros históricos</p>
                </a>

                <a className="card" href="/editar">
                <div className="img-cont">
                        <img className="img" src={img3} alt="" />
                    </div>
                    <h2>Editar</h2>
                    <p>Ingresar solo como administrador</p>
                </a>

            </div>

    )
}

export default Interfaz



