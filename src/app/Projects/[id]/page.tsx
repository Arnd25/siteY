import { notFound } from 'next/navigation';
import Container from '@/components/shared/container';
import Image from 'next/image';
import { md } from "@/components/shared/renderclases"



type ArticlesImgProps = {
    id: number;
    data: {
        attributes: {
            url: string;
        }
    };
}
type ArticleItemProps = {
    cover: ArticlesImgProps,
    title: string;
    description: string;
    createdAt: string;
    content: string;
}

export default async function ArticlePage({params}: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const res = await fetch(
        `https://strapitest.ybru.ru/api/projects/${id}`
    );

    if (!res.ok) notFound();

    const { data } = await res.json();

    if (!data) notFound();

    const ArticleItem: ArticleItemProps = data.attributes;
    const ArticleImg = ArticleItem.cover.data.attributes.url;
    const imageUrl = `https://strapitest.ybru.ru${ArticleImg}`

    const markdownContent = ArticleItem.content
    const result = md.render(markdownContent);



    return (
        <div className="py-30">
            <Container className="w-full px-2 sm:px-6 md:px-14 lg:px-24 text-black">
                <div className="w-full mx-auto py-10">
                    <div className=" w-full h-auto rounded-xl overflow-hidden">
                        <Image
                            src={imageUrl}
                            alt={""}
                            width={1}
                            height={1}
                            className="object-cover w-full h-full mb-10 max-h-[600]"
                            sizes={"1000"}
                        />
                    </div>
                    <h1 className="text-4xl font-bold mb-4">{ArticleItem.title}</h1>
                    <p className="text-gray-600 mb-6  ">{ArticleItem.description}</p>

                    <div
                        className="text-black   shadow-2xl bg-gray-100 p-10 pt-2 rounded-2xl"
                        dangerouslySetInnerHTML={{ __html: result }}
                    />
                </div>
            </Container>
        </div>
    );
}