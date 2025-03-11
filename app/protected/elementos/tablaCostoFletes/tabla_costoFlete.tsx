
import {dbCosto, costoflete} from 'app/schema'
import Swal from 'sweetalert2';

export default async function TableFlete() {
    let fletes: any[] = []
    try {
        fletes = await dbCosto.select().from(costoflete);
    } catch (e: any) {
        console.error(e);
    }

    const copiarValor=(flete: any)=>{
        const costo = document.createElement("textarea");
        const precio = flete.costo;
        costo.value = `${precio}`;
        document.body.appendChild(costo);
        costo.select();
        document.execCommand("copy");
        document.body.removeChild(costo);
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
        <div className="col-span-12 bg-zinc-800 items-center justify-items-center gap-12 text-center font-[family-name:var(--font-geist-sans)]">

        <table className="table-auto border-slate-50 rounded-xl p-2 w-full">
            <thead>
                <tr className='
                bg-stone-900 m-5 text-white text-center p-5'>
                    <th>Origen</th>
                    <th>Destino</th>
                    <th>Tamaño de envio</th>
                    <th>Costo</th>
                    <th>Copiar</th>
                </tr>
            </thead>
            <tbody>
                {fletes && fletes.map((flete: any, index: number) => (
                    <tr className={index % 2 ? "bg-stone-600 text-sm" : "text-sm"} key={flete.id}>
                        <td>{flete.origen}</td>
                        <td>{flete.destino}</td>
                        <td>{flete.tallaenvio}</td>
                        <td>$<input name='costo' id='costo' readOnly className='text-white text-center h-7 bg-zinc-800 rounded-full'  value={flete.costo}/></td>
                        <td className='mx-2 my-2'><button className="rounded-full border-green-300 border  transition-colors hover:bg-green-500 dark:bg-green-700 text-sm sm:text-base h-8 w-full sm:h-7 px-2 sm:px-5 m-2" >Copiar</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        </>
    )
}