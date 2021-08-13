// import React, { useState } from 'react';
import React from 'react';

const IndicadorVistaPrevia = (props) => {

    const { register } = props;
    console.log(register);

    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1)
    }
    
    return (
        <a href="/completa">
            <div className="indicador row g-0 d-flex">
                <span className="col-4 px-3">{register.idService.serviceName.capitalize()}</span>
                <span className="col-3 px-3">{register.idIndicator.indicatorName.capitalize()}</span>
                <span className="col-3 px-3">{register.month.capitalize()}</span>
                <span className="col-2 px-3">{register.year}</span>
            </div>
        </a>
    )
}

export default IndicadorVistaPrevia
