import React from 'react';
import Container from "@/components/shared/container";

const About = () => {
    return (
        <section id="About" className="text-black pt-24">
            <Container className="flex flex-col md:flex-row gap-10 md:gap-30 px-5 justify-center">
                <h2 className="text-4xl whitespace-nowrap self-center-safe" >О Компании</h2>
                <p className="max-w-5xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias at cupiditate distinctio dolorem earum ex facilis id ipsa nobis obcaecati quis rem soluta ut, voluptatem. Adipisci aliquam aspernatur, blanditiis commodi culpa debitis deserunt doloribus eaque illo inventore ipsam iusto maxime necessitatibus nemo nostrum odio, perferendis, porro quia quo rerum. Adipisci at ea error harum in magnam molestiae nulla perspiciatis qui soluta. Ducimus, molestiae, obcaecati!
                </p>
            </Container>
        </section>
    );
};

export default About;