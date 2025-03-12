import Footer from "../footer";
import FormularioCostos from "../registro_fletes/place_formulario";
import { TablaCostoFlete } from "../registro_fletes/tabla_costo_flete";

export const Grid = () => {
    return (
        <>
            <div className="px-4 grid gap-3 grid-cols-12">
                <FormularioCostos />
                <TablaCostoFlete />
            </div>
            <Footer />
        </>

    );
};
