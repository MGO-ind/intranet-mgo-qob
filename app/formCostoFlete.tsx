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
        className="flex flex-col space-y-4 bg-stone-800 px-4 py-8 sm:px-16"
      >
        <div>
          <label
            htmlFor="origen"
            className="block text-xs text-white uppercase"
          >
            Origen
          </label>
          <input
            id="origen"
            name="origen"
            type="text"
            placeholder="usuario@mgoindustrial.com"
            autoComplete="email"
            required
            className="mt-1 block w-full text-black appearance-none rounded-full border border-gray-700 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="destino"
            className="block text-xs uppercase"
          >
            Destino
          </label>
          <input
            id="destino"
            name="destino"
            type="text"
            required
            className="mt-1 block w-full text-black appearance-none rounded-full border border-gray-300 px-3 py-2 placeholder-gray-700 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          />
        </div>
        {children}
      </form>
    );
  }
  