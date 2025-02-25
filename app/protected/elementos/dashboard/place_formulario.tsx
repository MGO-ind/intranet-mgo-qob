//import { insertCostoFlete } from "@/app/action";
import { FiFolder } from "react-icons/fi";

export default function FormularioCostos() {


    return (
        <div className="col-span-4 rounded-3xl bg-zinc-800 border border-stone-500 shadow-lg h-[auto] sm:h-auto overflow-y-scroll scrollbar-thin">
            <div className="p-4">
                <h3 className="flex items-center text-lg gap-1.5 font-medium">
                    <FiFolder />
                    Fletes
                </h3>
                <h3 className="font-normal">
                    Guardar un costo
                </h3>
            </div>
            <div className="h-[auto] sm:h-auto px-4 flex-row items-center ">
               

            </div>



        </div>

    );
}