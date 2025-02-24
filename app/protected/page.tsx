import { auth, signOut } from 'app/auth';
import SideBarAdmin from './elementos/sidebar/sidebar_admin/sidebar_admin';

export default async function ProtectedPage() {
  let session = await auth();

  return (
    <main className="grid bg-black text-white gap-4 p-4 grid-cols-[220px,_1fr]">
    <SideBarAdmin/>


   <SignOut />
  </main> 
  );
}

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
}
