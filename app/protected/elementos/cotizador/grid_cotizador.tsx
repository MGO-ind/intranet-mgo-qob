import Footer from "../footer";
import { CambioDolares } from "./cambio_dolares";
import { ConsultaFlete } from "./consulta_fletes";
import { FormularioCotizador } from "./formulario_cotizador";

export const GridCotizador = () => {
    return (
      
      <>
    <div className="px-4 grid gap-3 grid-cols-12">
        <ConsultaFlete/>
        <FormularioCotizador/>
        <CambioDolares/>
    </div>
    <Footer/>
    
    </>
    );
  };