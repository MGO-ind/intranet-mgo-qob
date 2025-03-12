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
            <div className="relative flex flex-col w-full h-full overflow-scroll text-slate-300 bg-slate-800 shadow-md rounded-lg bg-clip-border">
                <table className="w-full text-left table-auto min-w-max">
                    <thead>
                        <tr>
                            <th className='p-4 border-b border-slate-600 text-slate-300 bg-slate-800'>Origen</th>
                            <th className='p-4 border-b border-slate-600 text-slate-300 bg-slate-800'>Destino</th>
                            <th className='p-4 border-b border-slate-600 text-slate-300 bg-slate-800'>Tamaño de envio</th>
                            <th className='p-4 border-b border-slate-600 text-slate-300 bg-slate-800'>Costo</th>
                            <th className='p-4 border-b border-slate-600 text-slate-300 bg-slate-800'>Copiar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fletes && fletes.map((flete: any, index: number) => (
                            <tr className={index % 2 ? "bg-stone-600 text-sm" : "text-sm hover:bg-dark hover:text-white"} key={flete.id}>
                                <td>{flete.origen}</td>
                                <td>{flete.destino}</td>
                                <td>{flete.tallaenvio}</td>
                                <td>$ {flete.costo}</td>
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