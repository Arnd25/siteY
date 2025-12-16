import React, { useState} from 'react';
import Container from "@/components/shared/container";
import NavMenu from "@/widgets/header/nav-menu";
import Image from "next/image";
import Logo from "../../../public/static/Logo.svg";
import Link from "next/link";
import MobileButton from "@/widgets/header/mobileButton";
import MobileMenu from "@/widgets/header/mobileMenu";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="absolute lg:place-self-center top-0 w-full z-20">
            <Container className="bg-indigo-400 backdrop-blur-2xl p-5 text-2xl  rounded-b-xl flex justify-between items-center">
                <Link href={"/"}><Image src={Logo} alt={""}/></Link>
                <NavMenu className="hidden md:block"/>
                <MobileButton onOpenMenu={() => setMenuOpen(true)} className="ml-auto md:ml-[unset] block lg:hidden" />
            </Container>
            <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </header>
    );
}
export default Header;