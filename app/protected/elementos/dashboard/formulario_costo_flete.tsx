export function FormCostosFletes({
    action,
    children,
}:{
    action: any;
    children: React.ReactNode;
}) {
    return (
        <form 
        name="formCotizador" 
        className="py-4"
        action={action}
        >
        <div className="row">
            <label>Origen</label>
            <select
                name="origen"
                id="origen"
                className="w-6/12 text-black rounded-full text-sm sm:text-base h-8 sm:h-8 px-2 sm:px-5 m-2">
                <option>Brownsville</option>
                <option>Monterrey</option>
                <option>León</option>
            </select>
        </div>
        <div className="row">
            <label>destino</label>
            <select
                name="destino"
                id="destino"
                className="w-7/12 text-black rounded-full text-sm sm:text-base h-8 sm:h-8 px-2 sm:px-5 m-2">
                <option>México</option>
                <option>León</option>
                <option>Salamanca</option>
                <option>Tizayuca</option>
                <option>Querétaro</option>
                <option>Guadalajara</option>
                <option>Monterrey</option>
                <option>Aguascalientes</option>
                <option>Lagos de Moreno</option>
                <option>Ciudad de México</option>
                <option>Mazatlán</option>
            </select>
        </div>
        <div className="row">
            <label>Tamano</label>
            <select
                name="tallaenvio"
                id="tallaenvio"
                className="w-6/12 text-black rounded-full text-sm sm:text-base h-8 sm:h-8 px-2 sm:px-5 m-2">
                <option>Jumbo</option>
                <option>Full</option>
            </select>

        </div>
        <div className="row">
            <label>costo: $</label>
            <input
                name="costo"
                id="costo"
                placeholder="DTA"
                className="w-8/12 text-black rounded-full text-sm sm:text-base h-8 sm:h-8 px-2 sm:px-5 m-2"
                type="number"
                step="any"

            />
        </div>
        <div className="row">
            <label>paqueteria: $</label>
            <select
                name="paqueteria"
                id="paqueteria"
                className="w-8/12 text-black rounded-full text-sm sm:text-base h-8 sm:h-8 px-2 sm:px-5 m-2"
            >
                <option value={""}>Seleccione una opcion</option>
                <option value={1}>Paqueteria1</option>
            </select>
        </div>
        <button className="rounded-full border-green-300 border  transition-colors hover:bg-green-500 dark:bg-green-700 text-sm sm:text-base h-8 w-full sm:h-10 px-2 sm:px-5 m-2"
            type="submit">Capturar</button>

    </form>

    );
}