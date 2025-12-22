"use client"
import React, {useEffect} from 'react';
import Link from "next/link";
import {MENU_DATA} from "@/data/menu.data";
import {cn} from "@/lib/utils";
import Image from "next/image";
import logo from "@/../public/static/Logo_footer.svg";
import { IoMdClose } from "react-icons/io";
import {Button} from "@/components/ui/button";

interface IMobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: IMobileMenuProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        }
    }, [isOpen]);
    return (
        <>
            <div onClick={onClose} className={cn("fixed inset-0 z-40 bg-black/30 backdrop-blur-md transition-opacity duration-200", isOpen ? "opacity-100 visible" : "opacity-0 invisible" )} />
            <aside className={cn("fixed top-0 right-0 bottom-0 p-5 max-w-xs w-full h-screen bg-zinc-900 border-l border-zinc-700 z-50 transform transition-transform", isOpen ? "translate-x-0" : "translate-x-full")}>
                <div className="w-full space-y-4">
                    <menu className="w-full text-white flex flex-col gap-10">
                        <div className="flex items-center justify-between">
                            <Link href={"/"}>
                                <Image src={logo} alt="Логотип сайта" className="" />
                            </Link>
                            <Button variant={"destructive"}  className="bg-indigo-900" onClick={onClose}><IoMdClose></IoMdClose></Button>
                        </div>
                        <div className="flex flex-col gap-3">
                            {MENU_DATA.map((item, index) => (
                                <li key={index} className="w-full text-white">
                                    <Link onClick={onClose} href={item.href} className=" inline-block w-full text-lg bg-transparent rounded-md transition-colors hover:bg-zinc-800 hover:text-white">{item.label}</Link>
                                </li>
                            ))}
                        </div>

                    </menu>
                </div>
            </aside>
        </>
    );
};

export default MobileMenu;
