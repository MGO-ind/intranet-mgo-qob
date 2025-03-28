'use client';

import { useFormStatus } from 'react-dom';
import Swal from "sweetalert2";


export function SubmitButtonFlete({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();
    

  return (
    <button
      type={pending ? 'button' : 'submit'}
      aria-disabled={pending}
      className="rounded-full border-green-300 border  transition-colors hover:bg-green-500 dark:bg-green-700 text-sm sm:text-base h-8 w-full sm:h-10 px-2 sm:px-5 m-2"
    >
      {children}
      {pending && (
        <svg
          className="animate-spin ml-2 h-4 w-4 text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      <span aria-live="polite" className="sr-only" role="status">
        {pending ? 'Loading' : 'Submit form'}
      </span>
    </button>
  );
}

export function errorCostoFlete() {
  return Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Costo ya existe',
          color: "white",
          background: "black",
          customClass: {
              popup: 'border-radius-0'
          }
      });
  }
export  function successCostoFlete() {
    Swal.fire({
        title: "Se ha guardado el costo",
        text: "El costo ha sido guardado con éxito",
        width: 600,
        icon: "success",
        padding: "3em",
        color: "white",
        background: "black",
        customClass: {
            popup: 'border-radius-0'
        }
    });
}