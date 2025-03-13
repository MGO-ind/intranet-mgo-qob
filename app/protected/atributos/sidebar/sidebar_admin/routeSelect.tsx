import { IconType } from "react-icons";
import { FiDollarSign, FiHome } from "react-icons/fi";
import { GrDeliver } from "react-icons/gr";
import { MdOutlineInventory } from "react-icons/md";
import Link from "next/link";
import { FaPen } from "react-icons/fa";
import { LuPackage } from "react-icons/lu";
import { auth } from "@/app/auth";
import { getUsuario } from "@/app/schema";

export const RouteSelectAdmin = async () => {
  let session = await auth();
  let correo = session?.user?.email;

  let usuario: any[] = [];
  if (correo) {
      try {
          usuario = await getUsuario(correo);
      }
      catch (e: any) {
          console.error(e);
      }
  } else {
      console.error("Correo is undefined or null");
  }

  return (
    <div className="space-y-1">
      <TransitionLink Icon={FiHome} title="Inicio" href="/"/>
      <TransitionLink Icon={LuPackage} title="Registrar Flete" href="/protected/registro_flete"/>
      <TransitionLink Icon={FiDollarSign} title="Cotizador" href="/protected/cotizador" />
      <TransitionLink Icon={GrDeliver} title="Consultar Fletes" href="/protected/consultar_flete" />
      <TransitionLink Icon={MdOutlineInventory} title="Inventario" href="/protected/inventario" />
      <TransitionLink Icon={FaPen} title="Datos Usuario" href="/protected/registro_datos_usuario" />
    </div>
  );
};

const TransitionLink = ({
  Icon,
  title,
  href,
}: {
  Icon: IconType;
  title: string;
  href: string;
}) => {
  return (
    <Link href={href}
      className={`flex items-center justify-start gap-2 w-full rounded-full px-2 py-1.5 text-sm text-stone-50 transition-[box-shadow,_background-color,_color] hover:bg-slate-200 bg-transparent hover:text-stone-900 shadow-none `}
    >
      <Icon />
      <span>{title}</span>
    </Link>
  );
};

      //<TransitionLink Icon={FiLink} selected={false} title="Registro de Usuario" href="/register"/>
