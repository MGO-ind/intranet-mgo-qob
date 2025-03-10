import {dbCosto, costoflete} from 'app/schema'
import RefreshButton from './refresh_button';
export default async function TableFlete() {
    let fletes: any[] = []
    try {
        fletes = await dbCosto.select().from(costoflete);
    } catch (e: any) {
        console.error(e);
    }
    return (
        <>
        <RefreshButton/>
        <table className="table-auto w-full">
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
                        <td>{flete.costo}</td>
                        <td>{flete.id_paqueteria}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}