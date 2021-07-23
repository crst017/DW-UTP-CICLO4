import React from 'react';
import './Interfaz.css';
import img1 from './img/search.png';
import img2 from './img/upload-file.png';




const Interfaz = () => {
    return (
        <div className='interfaz'>


            <div className="cont-card">
                <a className='card' href="/nuevo">
                    <div className="img-cont">
                        <img className="img" src={img2} alt="" />
                    </div>
                    <h2>Ingresar sus datos</h2>
                    <p>Ingrese su información para ser almacenada</p>
                </a>


                <a className="card" href="/indicadores">
                <div className="img-cont">
                        <img className="img" src={img1} alt="" />
                    </div>
                    <h2>Consultar registros</h2>
                    <p>Consulte registros históricos</p>
                </a>


            </div>
        </div>

    )
}

export default Interfaz