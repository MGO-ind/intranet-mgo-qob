'use client';

import { useState, useEffect } from 'react';
import { dbTablas, catalogo_productos } from "@/app/schema";

export default function TablaProductos() {
    const [productos, setProductos] = useState<any[]>([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const [productosPorPagina] = useState(5); // Número de productos por página
    const [totalProductos, setTotalProductos] = useState(0);

    useEffect(() => {
        async function fetchProductos() {
            try {
                // Calcular el offset
                const offset = (paginaActual - 1) * productosPorPagina;

                // Obtener productos paginados
                const productosPaginados = await dbTablas
                    .select()
                    .from(catalogo_productos)
                    .orderBy(catalogo_productos.codigo_producto)
                    .limit(productosPorPagina)
                    .offset(offset);

                // Obtener el total de productos (para mostrar el número total de páginas)
                const total = await dbTablas
                    //.raw<{ count: number }[]>(`SELECT COUNT(*) as count FROM ${catalogo_productos}`);

                setProductos(productosPaginados);
                //setTotalProductos(total[0].count);
            } catch (e: any) {
                console.error(e);
            }
        }

        fetchProductos();
    }, [paginaActual, productosPorPagina]);

    const totalPaginas = Math.ceil(totalProductos / productosPorPagina);

    const handlePaginaAnterior = () => {
        if (paginaActual > 1) {
            setPaginaActual(paginaActual - 1);
        }
    };

    const handlePaginaSiguiente = () => {
        if (paginaActual < totalPaginas) {
            setPaginaActual(paginaActual + 1);
        }
    };

    /*let producto: any[] = [];
    try {
        producto = await dbTablas.select().from(catalogo_productos).orderBy(catalogo_productos.codigo_producto);
    }
    catch (e: any) {
        console.error(e);
    }*/

    return (
        <>
        <div className="relative flex flex-col w-full h-full overflow-scroll text-slate-300 bg-neutral-800 shadow-md rounded-lg bg-clip-border">
            <table className="w-full text-left table-auto min-w-max">   
                <thead>
                    <tr>
                        <th className='p-4 border-b uppercase border-neutral-500 text-slate-100 bg-zinc-900'>Codigo</th>
                        <th className='p-4 border-b uppercase border-neutral-500 text-slate-100 bg-zinc-900'>Nombre</th>
                        <th className='p-4 border-b uppercase border-neutral-500 text-slate-100 bg-zinc-900'>Clave SAT</th> 
                        <th className='p-4 border-b uppercase border-neutral-500 text-slate-100 bg-zinc-900'>Empresa</th> 
                        <th className='p-4 border-b uppercase border-neutral-500 text-slate-100 bg-zinc-900'>Registrado por:</th>
                    </tr>
                </thead>
                <tbody>
                    {productos && productos.map((producto: any, index: number) => (
                        <tr className={index % 2 ? "bg-stone-700 text-sm hover:bg-black hover:text-white border-b border-neutral-500" : "text-sm hover:bg-black hover:text-white border-b border-neutral-500"} key={producto.id}>
                            <td className="p-4">{producto.codigo_producto}</td>
                            <td className="p-4">{producto.nombre_producto}</td>
                            <td className="p-4">{producto.clave_sat}</td>
                            <td className="p-4">{producto.empresa_producto}</td>
                            <td className="p-4">{producto.correo_empleado}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-between items-center px-4 py-3">
                <div className="text-sm text-slate-200">
                    Mostrando <b>{(paginaActual - 1) * productosPorPagina + 1}</b>-
                    <b>{Math.min(paginaActual * productosPorPagina, totalProductos)}</b> de <b>{totalProductos}</b>
                </div>
                <div className="flex space-x-1">
                    <button
                        onClick={handlePaginaAnterior}
                        disabled={paginaActual === 1}
                        className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease"
                    >
                        Prev
                    </button>
                    <button
                        onClick={handlePaginaSiguiente}
                        disabled={paginaActual === totalPaginas}
                        className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease"
                    >
                        Sig
                    </button>
                </div>
            </div>
        </div>    

        </>
    )
}
