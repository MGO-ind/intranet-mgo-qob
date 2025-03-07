export function FormCostoFlete({
    action,
    children,
  }: {
    action: any;
    children: React.ReactNode;
  }) {
    return (
      <form
        action={action}
        className="flex flex-col space-y-4 bg-stone-800 px-0 py-0 sm:px-2"
      >
        <div>
          <label
            htmlFor="origen"
            className="block text-xs text-white uppercase"
          >
            Origen
          </label>
          <select
            id="origen"
            name="origen"
            className="mt-1 block w-full text-black rounded-full border border-gray-700 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
            >
                <option>Brownsville</option>
                <option>Monterrey</option>
                <option>León</option>
            </select>
        
        </div>
        <div>
          <label
            htmlFor="destino"
            className="block text-xs uppercase"
          >
            Destino
          </label>
          <select
            id="destino"
            name="destino"
            className="mt-1 block w-full text-black appearance-none rounded-full border border-gray-300 px-3 py-2 placeholder-gray-700 shadow-sm focus:border-black  focus:ring-black sm:text-sm"
          >
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
        <div>
          <label
            htmlFor="tallaenvio"
            className="block text-xs uppercase"
          >
            Tamano
          </label>
          <select
            id="tallaenvio"
            name="tallaenvio"
            className="mt-1 block w-full text-black appearance-none rounded-full border border-gray-300 px-3 py-2 placeholder-gray-700 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          >
            <option>Jumbo</option>
            <option>Full</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="costo"
            className="block text-xs uppercase"
          >
            Costo: $
          </label>
          <input
            type="numeric"
            step="any"
            id="costo"
            name="costo"
            className="mt-1 block w-full text-black appearance-none rounded-full border border-gray-300 px-3 py-2 placeholder-gray-700 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          />
           
        </div>
        <div>
          <label
            htmlFor="id_paqueteria"
            className="block text-xs uppercase"
          >
            paqueteria:
          </label>
          <select
            id="id_paqueteria"
            name="id_paqueteria"
            className="mt-1 block w-full text-black appearance-none rounded-full border border-gray-300 px-3 py-2 placeholder-gray-700 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
            >
            <option value={""}>Seleccione una opcion</option>
            <option value={1}>Paqueteria1</option>
          </select>
        
        </div>

        {children}
      </form>
    );
  }
  