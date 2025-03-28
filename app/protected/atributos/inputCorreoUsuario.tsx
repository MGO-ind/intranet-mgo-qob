import { auth } from 'app/auth';
import { getUsuario } from "@/app/schema";

export const InputCorreoUsuario = async () => {
  let session = await auth();

  let correo = session?.user?.email;
  /*let usuarios: any[] = [];
  let nameUsuario: string | undefined;
    
  try {
    correo?.toString();
    if (correo) {
      const usuarioResponse = await getUsuario(correo);
      usuarios = usuarioResponse;
  
      if (usuarios.length > 0) {
        nameUsuario = usuarios[0].nombre; // Asignar el nivel del primer usuario a la variable
      }
    }
  }
  catch (error) {
    console.error(error);
  }*/

  return ( 

    <input
    id="correo"
    name="correo"
    value={session?.user?.email ?? ''}
    required
    className="mt-1 block w-full text-black rounded-full border border-gray-700 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
/>
   
);

};


