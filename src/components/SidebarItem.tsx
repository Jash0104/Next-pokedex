"use client";

import { usePathname } from "next/navigation"
import style from "./activeItem.module.css"

interface Props {
    path: string,
    icon: JSX.Element,
    title: string,
    subTitle: string
}


export const SidebarItem = ({ path, icon, title, subTitle }: Props ) => {
  
    const pathName = usePathname()

    return (
    <a href={path} className={` w-full px-2 inline-flex space-x-2 items-center border-b rounded-md border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150 ${ pathName === path && style['active-item']}`}>
        <div>
            {icon}  
        </div>
        <div className="flex flex-col">
            <span className="text-lg font-bold leading-5 text-white">{ title }</span>
            <span className="text-sm text-white/50 hidden md:block">{ subTitle }</span>
        </div>
    </a>
  )
}
