import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex h-screen bg-stone-200">
      <div className="w-screen h-screen flex flex-col justify-center items-center ">
        <div className='z-10 w-full max-w-md h-[300px] py-5 overflow-hidden rounded-2xl border bg-stone-800 border-gray-100 shadow-xl'>  
          <div className="flex items-center justify-center max-w-screen-sm my-7">
            <img src="https://i.ibb.co/d0nRK2kq/Recurso-1logo.png"
              className="h-10" />
          </div>
          <div className="text-center items-center justify-center max-w-screen-sm mb-10">
           
            <h1 className="text-stone-200 font-bold text-4xl">
              MGO QOB
            </h1>
          </div>
          <div className="flex space-x-2 items-center justify-center text-3xl align-middle text-center">
            <Link
              href="/protected"
              className="rounded-full border-slate-100 border text-black hover:text-white transition-colors hover:bg-stone-900 dark:bg-stone-200 sm:text-base h-8 w-[200px] sm:h-10 px-5 sm:px-5 m-3 py-1"
            >
              Iniciar Sesión
            </Link>        
          </div>
        </div>
      </div>
    </div>
  );
}
