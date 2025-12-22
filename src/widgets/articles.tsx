"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '@/components/shared/container';
import Image from 'next/image';
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";


type ArticleImg = {
    data: {
        attributes: {
            url: string;
        }
    }
}

type ArticleAttributes = {
    title: string,
    description: string,
    content: string,
    cover: ArticleImg,
};

type ArticleItem = {
    id: number;
    attributes: ArticleAttributes;
};


async function fetchArticles(): Promise<ArticleItem[]> {
    const response = await axios.get("/api/articles");
    return response.data.data;
}

const getImageUrl = (img: ArticleImg) => {
  const urlPart = img.data.attributes.url; 
  if (!urlPart) return '/placeholder.jpg';

  return `https://strapitest.ybru.ru${urlPart}`;
};

const Articles = ({ page = 'notmain' }: { page?: string }) => {
    const Page = page
    const [articles, setArticles] = useState<ArticleItem[] | null>(null);
    const router = useRouter();

    useEffect(() => {
        fetchArticles()
            .then((data) => {
                setArticles(data);
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);


    if (!articles || articles.length === 0)
        return <Container className="py-40 min-h-screen"><div className="text-black text-6xl text-center">Пусто</div></Container>;

    return (
        <Container className="px-2">
            <div className="items-center flex flex-col justify-center w-full py-5 mt-30" >
                {Page === "main" && (
                    <h2 className="text-5xl  text-black my-16">Блог</h2>
                )}
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 justify-items-center items-stretch">
                    {articles.map((article) => {
                        const imageUrl = getImageUrl(article.attributes.cover);

                        return (

                            <li key={article.id} className="w-full h-full flex flex-col ">
                                <div className="relative w-full  overflow-hidden rounded-t-2xl">
                                    <Image
                                        src={getImageUrl(article.attributes.cover)}
                                        alt={'Изображение статьи'}
                                        
                                        width={2143}
                                        height={2143}
                                        loading="lazy"
                                        className="object-cover border-indigo-950 border-2 rounded-t-2xl"


                                    />
                                </div>
                                <div className="w-full bg-indigo-950 rounded-b-2xl p-5 flex flex-col gap-4">
                                    <h2 className="text-xl font-bold text-white ">
                                        {article.attributes.title}
                                    </h2>
                                    <p className="text-sm text-gray-200 ">
                                        {article.attributes.description}
                                    </p>
                                    <Link href={`/Articles/${article.id}`} className="px-5 py-3 bg-indigo-800 rounded-2xl w-fit transition-all duration-300 hover:bg-indigo-500 ">Подробнее</Link>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                {Page === "main" && (
                <Button onClick={() => {router.push("/Articles");}}
                        className="w-fit  bg-indigo-900 text-xl py-6 px-7 mt-10 hover:bg-indigo-600 transition-all duration-300">
                    Все статьи
                </Button>
                )}
            </div>
        </Container>
    );
};

export default Articles;
