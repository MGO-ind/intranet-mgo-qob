import { RegistroFletes } from "../atributos/registro_fletes/registro_fletes";
import { auth } from 'app/auth';
import { SideBarAdmin } from "../atributos/sidebar/sidebar_admin/sidebar";
import { getUsuario } from "@/app/schema";
import { SideBarN1 } from "../atributos/sidebar/sidebar_nivel1/sidebar_n1";
import { SideBarGral } from "../atributos/sidebar/sidebar_general/sidebar_gral";


export default async function ProtectedRegistroFlete() {
  let session = await auth();
    let correo = session?.user?.email;
    let usuarios: any[] = [];
    let nivelUsuario: string | undefined;
    
    try {
      correo?.toString();
      if (correo) {
        const usuarioResponse = await getUsuario(correo);
        usuarios = usuarioResponse;
  
        if (usuarios.length > 0) {
          nivelUsuario = usuarios[0].nivel; // Asignar el nivel del primer usuario a la variable
        }
      }
    }
    catch (error) {
      console.error(error);
    }
    return (
      
      <main className="grid bg-black text-white gap-4 p-4 grid-cols-[220px,_1fr]">
        {nivelUsuario ==='na1' ?<SideBarAdmin/>: "" }
        {nivelUsuario ==='n1' ?<SideBarN1/>: <SideBarGral/> }
        <RegistroFletes/>
      </main>   
    );
  }