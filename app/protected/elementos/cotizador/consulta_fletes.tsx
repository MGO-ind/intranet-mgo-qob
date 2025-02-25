
import { FiDollarSign } from "react-icons/fi";


export const ConsultaFlete  = () => {

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
                   
                </div>
                
                               
            </div>
            
        </div>
    );
};

