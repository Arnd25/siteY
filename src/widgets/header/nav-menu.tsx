import React from 'react';
import {MENU_DATA} from "@/data/menu.data";
import Link from "next/link";
import {cn} from "@/lib/utils";

interface INavMenuProps {
    className?: string;
}
const NavMenu = ({className} : INavMenuProps) => {
    return (
        <div className={cn(className,'')}>
            <nav className="w-full">
                <menu className=" flex items-center gap-x-6 w-full text-black text-2xl">
                    {MENU_DATA.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} className=" ">{item.label}</Link>
                        </li>
                    ))}
                </menu>
            </nav>
        </div>
    );
};

export default NavMenu;