import { Plan } from "../plan";
import { AccountAdminToggle } from "./account_Admin_Toggle";





export default function SideBarAdmin() {

  return (
    <div className="font-[family-name:var(--font-geist-mono)]">
      <div className="overflow-y bg-black text-white sticky top-4 h-[calc(100vh-32px-48px)]" >
        <AccountAdminToggle/>
   
    </div>
    <Plan/>
    </div>


  );
}