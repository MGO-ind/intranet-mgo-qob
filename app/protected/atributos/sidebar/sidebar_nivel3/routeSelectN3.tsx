
import { IconType } from "react-icons";
import { FiHome } from "react-icons/fi";
import Link from "next/link";
import { LuNotebookText } from "react-icons/lu";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { RiContactsBook3Line } from "react-icons/ri";



export const RouteSelectN3 = () => {
  return (
    <div className="space-y-1">
      <TransitionLink Icon={FiHome} title="Inicio" href="/"/>
      <TransitionLink Icon={FaRegPenToSquare} title="Registro Productos" href="/protected/registro_productos" />
      <TransitionLink Icon={LuNotebookText } title="Catalogo de Productos" href="/protected/catalogo_productos" />
      <TransitionLink Icon={FaUserEdit} title="Registro Clientes" href="/protected/registro_clientes" />
      <TransitionLink Icon={RiContactsBook3Line} title="Catalogo de Clientes" href="/protected/catalogo_clientes" />
      
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
