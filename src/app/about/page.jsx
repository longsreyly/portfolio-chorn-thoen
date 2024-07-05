"use client"
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';

const AboutMePage = () => {
    return (
        <main className="flex flex-col min-h-[100dvh]">
            {/* Profile */}
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                        <TypeAnimation
                  sequence={[
                    'Thoen CHORN',
                    1000,
                   
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: '1em', display: 'inline-block' }}
                  repeat={Infinity}
                />
                        </h1>
                        <h3 className="text-2xl font-semibold text-gray-500 dark:text-gray-400">Mobile Developer</h3>
                        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            I am a Mobile developer with a passion for building mobile applications. I have experience working with a variety of technologies including Flutter, PostgreSQL. I am always eager to lern new thing and take on new challenes.
                        </p>
                    </div>
                    {/* <img src="/thoen.jpg" alt="No Picture" /> */}
                    <img alt="Thorn CHORN" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" className="mx-auto aspect-square overflow-hidden rounded-full object-cover object-center transition-transform hover:scale-105 w-[350px] md:w-[450px] color: transparent;" src="/thoen.jpg" />
                </div>
            </section>
            {/* Experince */}
            <section className="py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-1 lg:gap-10">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experince</h1>
                    <div className="mt-6 grid gap-6 max-w-4xl">
                        <div className="grid gap-2 transition-transform hover:scale-105">
                            <div>
                                <h3 className="text-lg font-semibold">Fluutter Developer</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">2024- present</p>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Develop Mobile Application with Flutter, Design mobile UX/UI to code, Implement Flutter with API, Develop Front-End Mobile with API,
                                    And Implement translation languages,Build Release app to AppStore & Google Play Store.
                                </p>
                            </div>
                        </div>
                        {/* experiences */}
                        <div className="grid gap-2 transition-transform hover:scale-105">
                            <div>
                                <h3 className="text-lg font-semibold">Fluutter Developer Internship</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">2023 - 2024</p>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Develop Mobile Application with Flutter, Design mobile UX/UI to code, Implement Flutter with API, Develop Flutter with Firebase, And Implement translation languages.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Hiere for me */}
            <section className="w-full py-12 md:py-24 lg:py-20">
                <div className="container grid items-center gap-6 px-4 md:px-6">
                    <div className="space-y-4 text-center">
                        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">Hire me for your next project</h1>
                        <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            I am a Mobile developer with experience in building modern mobile application. I am available for freelance work and open to new opportunities.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-md bg-gray-900 px-8 text-lg font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                            Contact Me
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default AboutMePage;