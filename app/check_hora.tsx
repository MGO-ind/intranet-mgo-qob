import React, { useState } from "react";

export const CheckHora = () => {
    const hora = new Date().getHours();
    
    const [texto, setTexto] = useState('Entrada');

    const cambio = () => {
        if (texto === 'Entrada') {
            setTexto('Salida');
        } else {
            setTexto('Entrada');
        }
    }

    return (
        <div>
            <h1>La hora actual es: {hora}</h1>
            <h1>{texto}</h1>
            <button onClick={cambio}>{texto}</button>
        </div>
    );
}