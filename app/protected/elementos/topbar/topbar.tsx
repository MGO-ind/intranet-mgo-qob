import { FaSignOutAlt } from "react-icons/fa";
import { auth, signOut  } from 'app/auth';

export const TopBar = async () => {
  const currentDat = new Date();
  const currentDate = currentDat.toLocaleDateString("en-US");
  let session = await auth();
  
  
  return ( 
    <div className="border-b px-4 mb-4 mt-2 pb-4 border-stone-200">
    <div className="flex items-center justify-between p-0.5">
      <div>
          <span className="text-sm font-bold block">🚀 Buen día, Name! {session?.user?.id}</span>
        <span className="text-sm block text-stone-200">
        {currentDate}
        </span>
      </div>     
        
      <SignOut />
     
    </div>
  </div>
);

};

function SignOut() {
    return (
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <button className="flex text-sm items-center gap-2 text-stone-900 bg-stone-100 transition-colors hover:bg-blue-100 hover:text-stone-800 px-3 py-1.5 rounded-full" type="submit"><FaSignOutAlt /> Cerrar Sesión</button>
      </form>
    );
  }
  
