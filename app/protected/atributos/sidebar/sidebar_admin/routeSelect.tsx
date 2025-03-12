
import { IconType } from "react-icons";
import { FiDollarSign, FiHome, FiPaperclip } from "react-icons/fi";
import { GrDeliver } from "react-icons/gr";
import { MdOutlineInventory } from "react-icons/md";
import Link from "next/link";


export const RouteSelectAdmin = () => {
  return (
    <div className="space-y-1">
      <TransitionLink Icon={FiHome} selected={false} title="Inicio" href="/"/>
      <TransitionLink Icon={FiPaperclip} selected={false} title="Registrar Flete" href="/protected/registro_flete"/>
      <TransitionLink Icon={FiDollarSign} selected={false} title="Cotizador" href="/protected/cotizador" />
      <TransitionLink Icon={GrDeliver} selected={false} title="Consultar Fletes" href="/protected/consultar_flete" />
      <TransitionLink Icon={MdOutlineInventory} selected={false} title="Inventario" href="/protected/inventario" />
    </div>
  );
};

const TransitionLink = ({
  selected,
  Icon,
  title,
  href,
}: {
  selected: boolean;
  Icon: IconType;
  title: string;
  href: string;
}) => {
  return (
    <Link href={href}
      className={`flex items-center justify-start gap-2 w-full rounded-full px-2 py-1.5 text-sm text-stone-50 transition-[box-shadow,_background-color,_color] ${
        selected
          ? "bg-slate-700 shadow"
          : "hover:bg-slate-200 bg-transparent hover:text-stone-900 shadow-none"
      }`}
    >
      <Icon className={selected ? "text-blue-400" : ""} />
      <span>{title}</span>
    </Link>
  );
};

      //<TransitionLink Icon={FiLink} selected={false} title="Registro de Usuario" href="/register"/>
