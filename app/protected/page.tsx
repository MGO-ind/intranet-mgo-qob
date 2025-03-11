import { auth } from 'app/auth';
import SideBarAdmin from './atributos/sidebar/sidebar_admin/sidebar_admin';
import { Dashboard } from './atributos/dashboard/dashboard';

export default async function ProtectedPage() {
  let session = await auth();

  return (
    <main className="grid bg-black text-white gap-4 p-4 grid-cols-[220px,_1fr]">
    <SideBarAdmin/>
    <Dashboard />

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
