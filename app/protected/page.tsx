import { auth } from 'app/auth';
import { Dashboard } from './atributos/dashboard/dashboard';
import { SideBarAdmin } from './atributos/sidebar/sidebar_admin/sidebar';
import { datosUsuario, dbTablas, getUsuario} from '../schema';


export default async function ProtectedPage() {
  let session = await auth();
  let correo = session?.user?.email;
  let usuarios: any[] = [];
  
  try {
    correo?.toString();
    if (correo) {
      const usuarioResponse = await getUsuario(correo);
      usuarios = usuarioResponse;
    }

  }
  catch (error) {
    console.error(error);
  }


  return (
    <main className="grid bg-black text-white gap-4 p-4 grid-cols-[220px,_1fr]">
    <SideBarAdmin/>

    <Dashboard />
    {usuarios.map((usuario) => (
          <div key={usuario.id}>
            <p>ID: {usuario.id}</p>
            <p>Nombre: {usuario.nombre}</p>
            <p>Apellido: {usuario.apellido}</p>
            <p>Nivel: {usuario.nivel}</p>
            <p>Correo: {usuario.correo}</p>
          </div>
        ))}

  </main> 
  );
}

/*
    <SignOut />
function SignOut() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button type="submit">Sign out</button>
    </form>
  );
}*/
