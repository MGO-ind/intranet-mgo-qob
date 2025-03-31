import { TopBar } from "../topbar/topbar";
import { GridCatalogoProductos } from "./grid_catalogo_productos";


export function RegistroProductos() {
    return (
        <div className="bg-zinc-700 rounded-3xl pb-4 shadow h-auto">
            <TopBar/>
            <GridCatalogoProductos />
        </div>
    );
};
