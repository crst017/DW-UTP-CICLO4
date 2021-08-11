// import React, { useState } from 'react';
import React from 'react';

const IndicadorVistaPrevia = (props) => {

    const { register } = props;
    console.log(register);

    return (
        <a href="/completa">
            <div className="indicador row g-0 d-flex">
                <span className="col-4 px-3">{register.idService}</span>
                <span className="col-3 px-3">{register.idIndicator}</span>
                <span className="col-3 px-3">{register.month}</span>
                <span className="col-2 px-3">{register.year}</span>
            </div>
        </a>
    )
}

export default IndicadorVistaPrevia
