"use client"
import { useRef, useState } from "react";
import { AiFillCalculator } from "react-icons/ai";
import Swal from 'sweetalert2'

export const FormularioCotizador = () => {

    const formRef = useRef(null);
    //form: useRef<HTMLFormElement>

    const  [ values, setValues ] = useState({
        tipoDeCambio: "",
        costoBasico: "",
        gastosAduanales: "", 
        dta: "",
        utilidad: "",
        flete: "",
        tam:""
        });

    const handleInputChange = (event: { target: { name: string; value: string;  }; })=> {
            const { name, value }= event.target;
            setValues({
                ...values,
                [name]:value,
            });
        };

    const handleForm = (event: { preventDefault: () => void; }) => {
            event.preventDefault();
//convertir un string a numero entero
            const tipoDeCambio1 = new Number(values.tipoDeCambio)
            const costoBasico1 = new Number(values.costoBasico)
            const gastosAduanales1 = new Number(values.gastosAduanales)
            const dta1 = new Number(values.dta)
            const utilidad1 = new Number(values.utilidad)
            const flete1 = new Number(values.flete)
            const tamanio = new String(values.tam)
//suma de todos los inputs
            function sumArray(arr:number[]): number{
                if (arr.length == 0 ){
                    return 0;
                } else {
                    return arr[0] + sumArray(arr.slice(1));
                }
            };
            
//dividir flete entre el tipo de cambio
            function dividir(arr:number[]): number{
                if(arr.length == 0){
                    return 0;
                } else {              
                  return arr[0]/arr[1]  
                }
            };
            const div= dividir([ Number(flete1),Number( tipoDeCambio1)]);
            
// if de que no este ningun input vacio   
            if(values.tipoDeCambio !=='' && values.costoBasico !== '' && values.gastosAduanales !== '' && values.utilidad !== '' && values.flete !==''){
                if(tamanio == "Jumbo"){
                    //dividir el resultado de flete entre costo, entre galones de unidad
                    
                    function dividirJumbo(num: number){
                        const divJumbo2 =10000
                        //const divJumbo: number[] =[10000]
                        //const divJumbo2 = Number(divJumbo)
                        if(num == 0){
                            return 0;
                        } else {
                        return num / divJumbo2                  
                        }
                    };
                    const resultadoJumbo1 = dividirJumbo(div)
                    const resultadoJumbo = resultadoJumbo1.toFixed(2)
                    const total= sumArray([ Number(costoBasico1), Number(gastosAduanales1), Number(dta1), Number(utilidad1), Number(resultadoJumbo)])
                    const tot1 = new Number(total);
                    const tot2 = tot1.toFixed(2)
                    Swal.fire({ 
                        title: "El Precio para el cliente de acuerdo a su seleccion (Jumbo) es: $"+`${tot2}`+" USD. El flete que usted ingreso fue de $"+`${flete1}`+".00 "+" MX",
                        icon: "success",
                        width: 600,
                        padding: "3em",
                        color: "white",
                        background: "black",
                        customClass: {
                            popup: 'border-radius-0'
                          }
                      });

                } else {
                    //dividir el resultado de flete entre costo, entre galones de unidad
                    
                    function dividirFull(num: number):number{
                        const divFull2 =15500
                        if(num == 0){
                            return 0;
                        } else {
                        return num / divFull2                  
                        }
                    };
                    const resultadoFull1 = dividirFull(div)
                    const resultadoFull = resultadoFull1.toFixed(2)
                    const total= sumArray([ Number(costoBasico1), Number(gastosAduanales1), Number(dta1), Number(utilidad1), Number(resultadoFull)])
                    const tot1 = new Number(total);
                    const tot2 = tot1.toFixed(2)
                    Swal.fire({
                        title: "El Precio para el cliente de acuerdo a su seleccion (Full) es: $"+`${tot2}`+" USD. El flete que usted ingreso fue de $"+`${flete1}`+".00 MX",
                        icon: "success",
                        width: 600,
                        padding: "3em",
                        color: "white",
                        background: "black",
                        customClass: {
                            popup: 'border-radius-0'
                          }
                      });
                }
                
                 
            } else {
                Swal.fire({
                    title: "Favor de llenar todos los campos",
                    width: 600,
                    icon: "error",
                    padding: "3em",
                    color: "white",
                    background: "black",
                    customClass: {
                        popup: 'border-radius-0'
                    }
                });
            }            
        };
    
    
        const borrarForm = (event: { preventDefault: () => void; }) => {
            event.preventDefault();
            if (formRef.current !=""){
                //const formReset = formRef.current
                //formReset.reset()

            } else {
                Swal.fire({
                    title: "El formulario esta vacio",
                    width: 600,
                    icon: "error",
                    padding: "3em",
                    color: "white",
                    background: "black",
                    customClass: {
                        popup: 'border-radius-0'
                    }
                });
            }
        };

    return (
        <div className="col-span-4 rounded-3xl bg-zinc-800 border border-stone-500 shadow-lg h-[auto] sm:h-auto overflow-y-scroll scrollbar-thin">
            <div className="p-4">
                <h3 className="flex items-center gap-1.5 font-medium">
                    <AiFillCalculator /> Cotizador
                </h3>
            </div>

            <div className="h-[auto] sm:h-auto px-4 flex-row items-center ">
                <p>Ultimo Inventario:  
                    <span className="font-semibold p-1">  
                        00/00/0000
                    </span>
                </p>
                     
                <form  name="formCotizador" onSubmit={handleForm} >
                
                    <div className="row">
                        <label>Tipo de Cambio: $</label>
                        <input 
                            name="tipoDeCambio" 
                            placeholder="Tipo de Cambio" 
                            className="w-6/12 text-black rounded-full text-sm sm:text-base h-8 sm:h-8 px-2 sm:px-5 m-2" 
                            type="number"
                            step="any"
                            
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div className="row">
                        <label>Costo Basico: $</label>
                        <input 
                            name="costoBasico" 
                            placeholder="Costo Basico"
                            className="w-7/12 text-black rounded-full text-sm sm:text-base h-8 sm:h-8 px-2 sm:px-5 m-2" 
                            type="number"
                            step="any"
                          
                            onChange={handleInputChange} 

                        />
                    </div>
                    <div className="row">
                        <label>Gastos Aduanales: $</label>
                        <input 
                            name="gastosAduanales" 
                            placeholder="Gastos Aduanales"
                            className="w-6/12 text-black rounded-full text-sm sm:text-base h-8 sm:h-8 px-2 sm:px-5 m-2" 
                            type="number"  
                            step="any"
                        
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div className="row">
                        <label>DTA: $</label>
                        <input 
                            name="dta" 
                            placeholder="DTA"
                            className="w-8/12 text-black rounded-full text-sm sm:text-base h-8 sm:h-8 px-2 sm:px-5 m-2" 
                            type="number"
                            step="any"
                          
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div className="row">
                        <label>Utilidad: $</label>
                        <input 
                            name="utilidad" 
                            placeholder="Utilidad"
                            className="w-8/12 text-black rounded-full text-sm sm:text-base h-8 sm:h-8 px-2 sm:px-5 m-2" 
                            type="number"
                            step="any"
                     
                            onChange={handleInputChange} 
                        />
                    </div> 
                    <div className="col-span-2">
                        <label className=""> Flete: $
                            <input className="w-5/12 text-black rounded-full text-sm sm:text-base h-8 sm:h-8 px-2 sm:px-5 m-2" 
                            name="flete" 
                            type="number"
                            step="any"
                          
                            placeholder="Costo del Flete"
                            onChange={handleInputChange} 
                            />
                        </label>
                    </div>
                    <div className="col-span-2 text-center items-center">
                        <label className="">
                            <input className="w-5 text-black rounded-full text-sm sm:text-base h-8 sm:h-8 m-2" 
                            name="tam" 
                            radioGroup="tamano"
                            type="radio"
                            step="any"
                            value={"Full"}
                            placeholder="Costo del Flete"
                            onChange={handleInputChange} 
                            /> Full
                        </label>
                        <label className="">
                            <input className="w-5 text-black rounded-full text-sm sm:text-base h-8 sm:h-8 m-2" 
                            name="tam" 
                            type="radio"
                            radioGroup="tamano"
                            step="any"
                            value={"Jumbo"}
                            placeholder="Costo del Flete"
                            onChange={handleInputChange} 
                            /> Jumbo
                        </label>
                    </div>

                    <button className="rounded-full border-green-300 border  transition-colors hover:bg-green-500 dark:bg-green-700 text-sm sm:text-base h-8 w-full sm:h-10 px-2 sm:px-5 m-2" 
                        type="submit">Calcular</button>
                           
                </form> 
                <button className="rounded-full border-red-300 border  transition-colors hover:bg-red-500 dark:bg-red-900 text-sm sm:text-base h-8 w-full sm:h-10 px-2 sm:px-5 m-2" onClick={borrarForm} >Borrar</button>         
            </div>
       
            
            

        </div>
    );
};

