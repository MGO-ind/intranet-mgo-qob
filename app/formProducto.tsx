import { InputCorreoUsuario } from "./protected/atributos/inputCorreoUsuario";

export function FormRegistroProductos({
    action,
    children,
  }: {
    action: any;
    children: React.ReactNode;
  }) {
    return (
      <form
        action={action}
        className="flex flex-col space-y-4 bg-zinc-800 px-2 py-5 sm:px-4"
      >
        <div>
          <label
            htmlFor="marca_temporal"
            className="block text-xs text-white uppercase"
          >
            marca_temporal
          </label>
          <input
            type="numeric"
            step="any"
            id="marca_temporal"
            name="marca_temporal"
            required
            className="mt-1 block w-full text-black appearance-none rounded-full border border-gray-300 px-3 py-2 placeholder-gray-700 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          />
        
        </div>
        <div>
          <label
            htmlFor="codigo_producto"
            className="block text-xs uppercase"
          >
            codigo_producto
          </label>
          <input
            type="numeric"
            step="any"
            id="codigo_producto"
            name="codigo_producto"
            required
            className="mt-1 block w-full text-black appearance-none rounded-full border border-gray-300 px-3 py-2 placeholder-gray-700 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="nombre_producto"
            className="block text-xs uppercase"
          >
            nombre_producto
          </label>
          <select
            id="nombre_producto"
            name="nombre_producto"
            required
            className="mt-1 block w-full text-black rounded-full border border-gray-300 px-3 py-2 placeholder-gray-700 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          >
            <option value={""}>Seleccione una opción</option>
            <option value={"Jumbo"}>Jumbo</option>
            <option value={"Full"}>Full</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="empresa_producto"
            className="block text-xs uppercase"
          >
            empresa_producto
          </label>
          <input
            type="numeric"
            step="any"
            id="empresa_producto"
            name="empresa_producto"
            required
            className="mt-1 block w-full text-black appearance-none rounded-full border border-gray-300 px-3 py-2 placeholder-gray-700 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          />
           
        </div>
        <div>
          <label
            htmlFor="correo_empleado"
            className="block text-xs uppercase"
          >
            correo_empleado 
          </label>
          <InputCorreoUsuario/>
        
        </div>
        <div>
          <label
            htmlFor="clave_sat"
            className="block text-xs uppercase"
          >
            clave_sat 
          </label>
          <select
            id="clave_sat"
            name="clave_sat"
            required
            className="mt-1 block w-full text-black rounded-full border border-gray-300 px-3 py-2 placeholder-gray-700 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
            >
            <option value={""}>Seleccione una opción</option>
            <option value={1}>Paqueteria1</option>
          </select>
        
        </div>
        <div>
          <label
            htmlFor="categoria"
            className="block text-xs uppercase"
          >
            categoria 
          </label>
          <select
            id="categoria"
            name="categoria"
            required
            className="mt-1 block w-full text-black rounded-full border border-gray-300 px-3 py-2 placeholder-gray-700 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
            >
            <option value={""}>Seleccione una opción</option>
            <option value={1}>Paqueteria1</option>
          </select>
        
        </div>
        <div>
          <label
            htmlFor="subcategoria"
            className="block text-xs uppercase"
          >
            subcategoria 
          </label>
          <select
            id="subcategoria"
            name="subcategoria"
            required
            className="mt-1 block w-full text-black rounded-full border border-gray-300 px-3 py-2 placeholder-gray-700 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
            >
            <option value={""}>Seleccione una opción</option>
            <option value={1}>Paqueteria1</option>
          </select>
        
        </div>

        {children}
      </form>
    );
  }
  