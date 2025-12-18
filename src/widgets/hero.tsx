import React from 'react';
import bg from "@/../public/static/hero_bg.png";
import Container from "@/components/shared/container";
import {Button} from "@/components/ui/button";
import { FaTelegramPlane } from "react-icons/fa";


const Hero = () => {
    return (            
        <div className="w-full backdrop-blur-2xl  bg-[url(@/../public/static/hero_bg.png)] object-cover bg-no-repeat">
            <Container className="py-40 md:py-52 text-black flex flex-col gap-24 w-full px-5 xl:px-0">
                <h1 className="text-3xl md:text-6xl text-white font-bold"> Высоконагрузочные <span className="text-blue-600">решения</span> для <span className="text-blue-800">амбициозного роста</span></h1>
                <div className="flex flex-col sm:flex-row lg:items-center gap-5 xl:gap-48">
                    <p className="max-w-lg text-sm sm:text-lg text-gray-100 font-medium">Фокусируемся на архитектуре, которая обеспечивает стабильность сегодня и бесконечное масштабирование завтра.</p>
                    <Button variant={"link"} className={"hover:no-underline text-lg border-cyan-300 border-2 py-8 px-5 rounded-2xl md:text-2xl text-cyan-300"} >Написать в telegram <FaTelegramPlane size={20} /> </Button>
                </div>
            </Container>
        </div>
    );
};

export default Hero;
