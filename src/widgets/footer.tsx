import React from 'react';
import Container from "@/components/shared/container";
import Logo from "@/../public/static/Logo_footer.svg"
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import NavMenu from "@/widgets/header/nav-menu";
import {MENU_DATA} from "@/data/menu.data";

const Footer = () => {
    return (
        <footer className="bg-blue-950 pt-8">
            <Container className="flex flex-col px-2 gap-15">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 justify-between w-full ">
                    <div className="flex flex-col gap-10 order-1">
                        <Image src={Logo} alt="Logo"/>
                        <p className="max-w-80 text-lg text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi incidunt ipsa iste labore natus nemo rerum saepe. Aliquid eius nisi quia quidem similique veniam vero.</p>
                    </div>

                    <div className="flex flex-col gap-5 md:order-3 order-2">
                        <h3 className="text-2xl ">Информация</h3>
                        <nav className="w-full">
                            <menu className=" flex flex-col  gap-y-1.5 w-full  text-lg ">
                                {MENU_DATA.map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.href} className="hover:text-indigo-500 transition-all duration-300">{item.label}</Link>
                                    </li>
                                ))}
                            </menu>
                        </nav>
                    </div>
                    <div className="flex flex-col text-2xl gap-2 md-order-2 order-3">
                        <Link href={""} className="hover:text-indigo-500 transition-all duration-300">example@mail.com</Link>
                        <Link href={""} className="hover:text-indigo-500 transition-all duration-300">+7 123 456 78 90</Link>
                    </div>
                    <div className="order-4">
                        <Button className="text-2xl bg-transparent hover:bg-transparent border-2 rounded-4xl font-normal border-blue-500 py-8 px-4 xl:px-8">Связаться с нами</Button>
                    </div>
                </div>
                <p className="text-gray-400">© 2025 ООО «НПК «РПР». Все права защищены.</p>
            </Container>

        </footer>
    );
};

export default Footer;
