//"use client"

import {  useState } from "react";
//import { OrigenBrownsville } from "./destinoSelect/origenBrownsville";
//import { OrigenLeon } from "./destinoSelect/origenLeon";
import { FiDollarSign } from "react-icons/fi";
//import { OrigenMonterrey } from "./destinoSelect/origenMonterrey";

export const ConsultaFlete  = () => {

    /*const  [ values, setValues ] = useState({
        origen:"",

        });
    const [selected,setselected]=useState({
        origen:"",
    })

    const handleChange = (e)=>{
        const {name, value} =e.target;
        setValues({
            ...values,
            [name]: value,
        });
        setselected(e.target.value);

        console.log(value);
    }*/

    return (
        <div className="col-span-12 overflow-hidden rounded-3xl bg-zinc-800 border border-stone-500 shadow-lg h-[auto]">
            <div className="p-4">
                <h3 className="flex items-center gap-1.5 font-medium">
                    <FiDollarSign /> Consulta el precio del envio
                </h3>
                <p className="gap-1.5 font-mono font-bold">
                    Selecciona el origen del cual se envia <br/> Cuando te despliegue el campo "Flete" oprime en el boton "Copiar Peecio" por ultimo, pega en el cotizador

                </p>
            </div>

            <div className="grid gap-3 grid-cols-12 px-4">
                <div className="col-span-4">
                    <label>Origen:</label> 
                    <select 
                    className="text-black rounded-full text-sm sm:text-base h-8 sm:h-8 px-2 sm:px-5 m-2" 
                    name="origen"      
                    
                    >
                        <option>Selecciona una opcion</option>
                        <option>Brownsville</option>
                        <option>León</option>
                        <option>Monterrey</option>
                    </select> 

                </div>
                
                               
            </div>
            
        </div>
    );
};

/*<div className="col-span-8">
                    {selected == "Monterrey"?<OrigenMonterrey/>:""}
                    {selected == "Brownsville"?<OrigenBrownsville/>:""}
                    {selected == "León"?<OrigenLeon/>:""} 

                </div>*/