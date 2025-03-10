import {dbCosto, costoflete} from 'app/schema'
import RefreshButton from './refresh_button';
import Swal from 'sweetalert2';
export default async function TableFlete() {
    let fletes: any[] = []
    try {
        fletes = await dbCosto.select().from(costoflete);
    } catch (e: any) {
        console.error(e);
    }

    const copiarValor=()=>{
        const precio = document.createElement("input");
        //precio.setAttribute("value", `${flete.costo}`);
        document.body.appendChild(precio);
        precio.select();
        document.execCommand("copy");
        document.body.removeChild(precio);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Se ah copiado correctamente",
            showConfirmButton: false,
            timer: 1500,
            color: "white",
            background: "black",
            customClass: {
                popup: 'border-radius-0'
              }
            });
        //alert("funciona")
    }
    return (
        <>
        <div className="col-span-12 rounded-3xl p-4 border bg-zinc-800 border-stone-300 items-center justify-items-center pb-10 gap-12 sm:p-20 font-[family-name:var(--font-geist-sans)]">

        
        
        <table className="table-auto border rounded-l w-full">
            <thead>
                <tr>
                    <th>Origen</th>
                    <th>Destino</th>
                    <th>Tamaño de envio</th>
                    <th>Costo</th>
                    <th>Copiar</th>
                </tr>
            </thead>
            <tbody>
                {fletes && fletes.map((flete: any) => (
                    <tr key={flete.id}>
                        <td>{flete.origen}</td>
                        <td>{flete.destino}</td>
                        <td>{flete.tallaenvio}</td>
                        <td id='costo' >{flete.costo}</td>
                        <td><button className="rounded-full border-green-300 border  transition-colors hover:bg-green-500 dark:bg-green-700 text-sm sm:text-base h-8 w-full sm:h-10 px-2 sm:px-5 m-2" >Copiar</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        </>
    )
}