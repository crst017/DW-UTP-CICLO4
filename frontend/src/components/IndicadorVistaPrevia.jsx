// import React, { useState } from 'react';
import React from 'react';

const IndicadorVistaPrevia = (props) => {

    const { register } = props;

    const capitalize = function( string ) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    
    return (
        
            <div className="indicador row g-0 d-flex">
                <span className="col-4 px-3">{capitalize(register.idService.serviceName)}</span>
                <span className="col-3 px-3">{capitalize(register.idIndicator.indicatorName)}</span>
                <span className="col-3 px-3">{capitalize(register.month)}</span>
                <span className="col-2 px-3">{capitalize(register.year)}</span>
            </div>

    )
}

export default IndicadorVistaPrevia
