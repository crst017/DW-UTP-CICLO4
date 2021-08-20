import React from 'react'

import Filtro from './Filtro';
import Tabla from './Tabla';

const Indicadores = () => {
    return (
        <section className="container-fluid indicadores col-10 g-0 d-flex" id="indicadores">
              <Filtro className="col"></Filtro>
              <Tabla></Tabla>
        </section>
    )
}

export default Indicadores
