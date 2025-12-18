import React from 'react';
import Container from "@/components/shared/container";

const About = () => {
    return (
        <section id="About" className="text-black pt-24">
            <Container className="flex flex-col md:flex-row gap-10 md:gap-30 px-5 justify-center">
                <h2 className="text-4xl whitespace-nowrap self-center-safe" >О Компании</h2>
                <p className="max-w-5xl">Мы создаём масштабируемые цифровые продукты с нуля и модернизируем существующие решения. Внедряем интеллектуальные алгоритмы, оптимизируем архитектуру и производительность, чтобы ваш бизнес работал эффективнее, быстрее и готов был к будущему.
                </p>
            </Container>
        </section>
    );
};

export default About;
