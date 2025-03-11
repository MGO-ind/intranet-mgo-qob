import { dbCosto, costoflete } from 'app/schema';
import CopyButton from './copyButton';

export default async function TableFlete() {
    let fletes: any[] = [];
    try {
        fletes = await dbCosto.select().from(costoflete);
    } catch (e: any) {
        console.error(e);
    }

    return (
        <>
            <div className="col-span-12 my-4 border-slate-50 rounded-xl bg-zinc-800 items-center justify-items-center gap-12 text-center font-[family-name:var(--font-geist-sans)]">
                <table className="table border  p-2 w-full">
                    <thead>
                        <tr className='bg-stone-900 h-10 text-white text-center'>
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
                                <td>$<input name='costo' id='costo' readOnly className='text-white text-center h-7 bg-zinc-800 rounded-full w-20' value={flete.costo} /></td>
                                <td className='mx-2 my-2'>
                                    <CopyButton costo={flete.costo} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}