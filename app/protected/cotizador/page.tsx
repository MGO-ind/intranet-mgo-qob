import { Cotizador } from "../atributos/cotizador/cotizador";
import {SideBarAdmin} from "../atributos/sidebar/sidebar_admin/sidebar";



export default function Home() {
    return (
      
      <main className="grid bg-black text-white gap-4 p-4 grid-cols-[220px,_1fr]">
        <SideBarAdmin/>
        <Cotizador/>
       
      </main>   
    );
  }