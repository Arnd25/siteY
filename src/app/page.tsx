import React from 'react';
import Hero from "@/widgets/hero";
import About from "@/widgets/about";
import Jobs from "@/widgets/Jobs";
import Projects from "@/widgets/projects";
import Articles from "@/widgets/articles";



const Page = () => {

    return (
        <div className="w-full flex flex-col ">
            <Hero/>
            <About />
            <Projects page={"main"}/>
            <Articles page={"main"}/>
            <Jobs/>
        </div>
    );
};

export default Page;