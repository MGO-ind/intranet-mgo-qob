import { auth } from 'app/auth';

export const AccountAdminToggle = async () => {
    let session = await auth();
    return (
        <>
        <div className="border-b mb-4 mt-2 pb-4 border-stone-200">
            <button className="flex p-0.5 hover:bg-slate-600 rounded-full transition-colors relative gap-2 w-full item-center">
        
                <div className="flex items-center text-center">
                    <span className="text-sm font-bold block">
                        name
                    </span> 
                    <span className="text-xs block">
                        {session?.user?.email}
                    </span>
                </div>         
            </button> 
        </div>  
    </>

    );
}

//<img src="https://api.dicebear.com/9.x/notionists/svg" alt="avatar" className="size-8 rounded-full shrink-0 bg-sky-700 shadow"/>