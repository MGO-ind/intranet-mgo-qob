import SideBarAdmin from "../atributos/sidebar/sidebar_admin/sidebar_admin";
import { ConsultaFletes } from "../atributos/tablaCostoFletes/fletes";


export default function Home() {
    return (
      
      <main className="grid bg-black text-white gap-4 p-4 grid-cols-[220px,_1fr]">
        <SideBarAdmin/>
        <ConsultaFletes/>
      </main>   
    );
  }