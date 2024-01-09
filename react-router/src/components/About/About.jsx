import React from "react";


export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="/src/assets/personal-img.jpg"
                            alt="image"
                        />
                    </div>

                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            👋 About Me
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Hello! I'm Priyal Gupta, a passionate React developer with a knack for crafting dynamic and user-friendly web applications. My journey in the world of web development has been an exciting exploration of cutting-edge technologies and a commitment to creating seamless user experiences.
                        </p>
                        <p>
                            <p className="font-bold">React Enthusiast:</p>
                            My primary focus lies in React development, where I leverage the power of declarative components and efficient state management to build robust and scalable front-end solutions. I'm dedicated to staying up-to-date with the latest advancements in the React ecosystem, ensuring that my projects are not only functional but also incorporate best practices and industry standards.

                        </p>
                        <p className="mt-4 text-gray-600">

                            <p className="font-bold">Full-Stack Proficiency:</p>
                            In addition to my expertise in React, I am well-versed in various backend technologies. I have a strong background in Java, PHP, Yii2, Python, and Flask. This full-stack proficiency allows me to create end-to-end solutions that seamlessly integrate front-end and back-end functionalities.
                        </p>

                        <p className="mt-4 text-gray-600">

                            <p className="font-bold">Problem Solver:</p>
                            I thrive on tackling challenges and solving complex problems. Whether it's optimizing performance, implementing scalable architectures, or refining user interfaces, I enjoy the process of turning ideas into elegant and efficient code.
                        </p>

                        <p className="mt-4 text-gray-600">


                            <p className="font-bold">Continuous Learner:</p>
                            The tech landscape is ever-evolving, and I embrace the opportunity to learn and adapt. Whether it's exploring new React libraries, experimenting with backend frameworks, or diving into emerging technologies, I'm always eager to expand my skill set and bring fresh perspectives to my work.
                        </p>

                        <p className="mt-4 text-gray-600">

                            <p className="font-bold">Collaborative Mindset:</p>
                            I believe in the power of collaboration and open communication. Working in diverse teams has enriched my development journey, allowing me to learn from others and contribute my skills to shared successes.
                            <br />
                            If you're looking for a dedicated React developer with a holistic understanding of web development, combined with expertise in Java, PHP, Yii2, Python, and Flask, I'd love to connect and discuss how we can create something amazing together!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}