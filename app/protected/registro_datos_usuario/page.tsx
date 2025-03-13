import { RegistroDatosUsuario } from "../atributos/registro_datos_usuario/registro_datos_usuario";
import {SideBarAdmin} from "../atributos/sidebar/sidebar_admin/sidebar";

export default function Home() {
    return (
      
      <main className="grid bg-black text-white gap-4 p-4 grid-cols-[220px,_1fr]">
        <SideBarAdmin/>
        <RegistroDatosUsuario/>
      </main>   
    );
  }