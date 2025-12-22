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





type JobsAttributes = {
    id: string;
    attributes: JobsItem
};

type JobsItem = {
    title: string,
    time: string,
    isDisabled: boolean,
    seoDescription: string
    slug: string
    content: string
};


const Jobs = () => {
    const router = useRouter()
    const [Jobs, setJobs] = useState<JobsAttributes[] | null>(null);

    const ButtonClicked = (id: string) => {
        router.push(`/Jobs/${id}`);
    }

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get("api/jobs");
                const data: JobsAttributes[] = response.data.data;
                const activeJobs = data.filter(job => !job.attributes.isDisabled);
                setJobs(activeJobs);
            } catch (error) {
                console.error("Ошибка при загрузке вакансий:", error);
            }
        };

        fetchArticles();
    }, []);


    if (!Jobs || Jobs.length === 0)
        return <Container className="py-40 min-h-screen"><div className="text-black text-6xl text-center"></div></Container>;

    return (
        <Container className="py-40 px-2 sm:px-5 xl:px-0 ">
            <div className="flex flex-col gap-10 w-full py-5 text-black">
                <h2 className="text-5xl ">Вакансии</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full gap-10 justify-items-center items-stretch">
                    {Jobs.map((Job) => {
                        const JobAttributes = Job.attributes
                        const markdownContent = JobAttributes.content
                        const result = md.render(markdownContent);
                        return (
                            <li key={Job.id} className="text-black shadow-2xl p-2 lg:p-8 flex flex-col w-full justify-baseline bg-gray-200 rounded-2xl">
                                <h2 className="text-4xl font-medium">{JobAttributes.title}</h2>
                                <div className="flex flex-col  gap-5 h-full justify-between">
                                    <div dangerouslySetInnerHTML={{ __html: result }} />
                                    <Link className="text-2xl px-7 py-4  border-black border-2 rounded-2xl mt-5 mb-10 w-fit" href={""}>Связаться </Link>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </Container>
    );
};

export default Jobs;
