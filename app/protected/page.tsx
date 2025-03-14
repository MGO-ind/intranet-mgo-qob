import { auth } from 'app/auth';
import { Dashboard } from './atributos/dashboard/dashboard';
import { SideBarAdmin } from './atributos/sidebar/sidebar_admin/sidebar';

export default async function ProtectedPage() {
  let session = await auth();
  let correo = session?.user?.email;
  console.log(correo);
  console.log("lkdlakjds");

  return (
    <main className="grid bg-black text-white gap-4 p-4 grid-cols-[220px,_1fr]">
    <SideBarAdmin/>
    <Dashboard />
    {correo}

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
