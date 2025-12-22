"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '@/components/shared/container';
import Image from 'next/image';
import Link from "next/link";
import {filter} from "eslint-config-next";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {md} from "@/components/shared/renderclases";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";


type ProjectImg = {
    data: {
        attributes: {
            url: string;
        }
    }
}

type ProjectsAttributes = {
    id: string;
    attributes: ProjectItem
};

type ProjectItem = {
    title: string,
    description: string,
    cover: ProjectImg,
};



async function fetchProjects(): Promise<ProjectsAttributes[]> {
    const response = await axios.get("/api/projects");
    return response.data.data;
}

const getImageUrl = (img: ProjectImg) => {
  const urlPart = img.data.attributes.url; 
  if (!urlPart) return '/placeholder.jpg';

  return `https://strapitest.ybru.ru${urlPart}`;
};

const Projects = ({ page = 'notmain' }: { page?: string }) => {
    const router = useRouter()
    const [Projects, setProjects] = useState<ProjectsAttributes[] | null>(null);
    const Page = page

    const ButtonClicked = (id: string) => () => {
        router.push(`/Projects/${id}`);
    }

    useEffect(() => {
        fetchProjects()
            .then((data) => {
                setProjects(data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);


    if (!Projects || Projects.length === 0)
        return <Container className="py-40 min-h-screen"><div className="text-black text-6xl text-center"></div></Container>;
    return (
        <Container className="pt-40 px-5 xl:px-0 ">
            <div className="flex flex-col gap-10 w-full py-5 text-black">
                <h2 className="text-5xl ">Проекты</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full gap-10 justify-items-center ">
                        {Projects.map((project) => {
                            const ProjectAttributes = project.attributes;

                            return (
                                <li key={project.id} className="relative w-full">
                                  
                                  <div className="relative w-full rounded-2xl border-2 border-gray-300">
                                    
                                    <Image
                                      src={getImageUrl(project.attributes.cover)}
                                      alt={project.attributes.title}
                                      fill
                                      className="object-auto"
                                      sizes="200"
                                      priority={false}
                                    />
                                
                                    
                                    <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/50 to-transparent">
                                      <h3 className="text-lg sm:text-2xl font-bold text-white drop-shadow">
                                        {project.attributes.title}
                                      </h3>
                                    </div>
                                
                                   
                                    <Button
                                      onClick={ButtonClicked(project.id)}
                                      className="absolute bottom-5 right-5 bg-indigo-900 px-6 py-3 text-base sm:text-lg hover:bg-indigo-500 transition"
                                    >
                                      Подробнее
                                    </Button>
                                  </div>
                                </li>
                            )
                        })}
                </ul>
                {Page === "main" && (
                    <Button onClick={() => {router.push("/Projects");}}
                    className="w-fit self-center-safe bg-indigo-900 text-lg sm:text-xl py-6 px-7 hover:bg-indigo-600 transition-all duration-300">
                        Все проекты
                    </Button>
                )}
            </div>
        </Container>
    );
};

export default Projects;
