"use client"
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";


const AchievementsPage = () => {
    const information = [
        {
            image: "/rupp.png",
            title: "Introduction to Networks ",
            name: "Issued by Royal University of Phnom Penh",
            completed: "Completed on 8 Sep 2022",
            cridentail: "https://drive.google.com/file/d/1D7uWSOfk_drt5WiZYJ3r8IeMWhPp3IEj/view?usp=sharing"
        },
        {
            image: "/rupp.png",
            title: "Switching, Routing, and Wireless Essentials ",
            name: "Issued by Royal University of Phnom Penh",
            completed: "Completed on 28 Jul 2023",
            cridentail: "https://drive.google.com/file/d/1NJaxH-5B8LFvlbOW33ifoHAfC7sa6ntt/view?usp=sharing"
        },
        {
            image: "/coursera.png",
            title: "Programming Fundamentals in Kotlin",
            name: "Issued by Coursera",
            completed: "Completed on July 3, 2024",
            cridentail: "https://coursera.org/share/7cd2ba448e87e8f767c64efc3c00b068"
        },
        {
            image: "/coursera.png",
            title: "Introduction to iOS Mobile Application Development",
            name: "Issued by Coursera",
            completed: "Completed on May 27, 2024",
            cridentail: "https://coursera.org/share/2bd0592436aa00879d760a8b49271011"

        },
        {
            image: "/coursera.png",
            title: "Version Control",
            name: "Issued by Coursera",
            completed: "Completed on June 26, 2024",
            cridentail: "https://coursera.org/share/1f872ccee0df931d732bb1809cfbee88"

        },
        {
            image: "/coursera.png",
            title: "Programming Fundamentals in Swift",
            name: "Issued by Coursera",
            completed: "Completed on July 5, 2024",
            cridentail: "https://coursera.org/share/63a8dd9f75157792cf000acbe60eef6d"

        }
    ]

    const enducation = [
        {
            name : "ADITI ACADEMY",
            year : "2024 - present",
            discription : "Certificatte course flutter scholarship"
        },
        {
            name : "INSTINCT INSTITUTE",
            year : "2022 - 2023",
            discription : "Certificatte course flutter scholarship"
        },
        {
            name : "Bachelor of Computer Science",
            year : "2020 - 2024",
            discription : "Royal University of Pnhom Penh."
        },
        {
            name : "Bachelor of Computer Science",
            year : "2020 - 2024",
            discription : "Royal University of Pnhom Penh."
        },
    ]
    return (
        <main>
            <section data-aos="fade-up"
                data-aos-duration="3000" className="w-full py-14">
                <div className="container px-4 md:px-6">
                    <div className="text-center flex flex-col gap-2 items-center justify-center h-[40vh]">
                        <div className="space-y-2">
                            <h1 className="text-5xl font-semibold">My Achievements</h1>
                            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 pt-2">
                                Here are some of the certifications and credentials I have earned over the years. I am always learning and growing to become a better developer.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Card Achievements */}
            <section data-aos="fade-up"
                data-aos-duration="3000" className="container w-full py-10  lg:py-30">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {
                        information.map((data) => (
                            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                                <div className="flex flex-col justify-between bg-white p-6 dark:bg-gray-950">
                                    <div>
                                        <img alt="Issuing Organization" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" className="mb-4 h-12 w-12 rounded-full object-contain color: transparent; aspect-ratio: 50 / 50; object-fit: cover;" src={data.image} />
                                        <h3 className="mb-2 text-lg font-bold">{data.title}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{data.name}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{data.completed}</p>
                                    </div>
                                    <Link href={data.cridentail} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-gray-900 underline-offset-4 hover:underline h-9 rounded-md px-3 mt-4">View Credentail</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
            {/* Enducation */}
            <section data-aos="zoom-in-left" className="w-full py-12 md:py-24 lg:py-32">
                <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                            My Enducation
                        </h1>
                        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Sed ut perspiciatis unde omnis iste natus kobita tumi sopno charini hoye khbor nio na sit voluptatem accusantium dolore.</p>
                       {
                        enducation.map((data)=> (
                            <div className="grid gap-2 transition-transform hover:scale-105">
                            <div>
                                <h3 className="text-lg font-semibold">{data.name}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{data.year}</p>
                                <p className="text-gray-500 dark:text-gray-400">
                                    {data.discription}
                                </p>
                            </div>
                        </div>
                        ))
                       }
                    </div>
                    {/* <img src="/thoen.jpg" alt="No Picture" /> */}
                    <img data-aos="fade-left"
                        data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500" alt="Thorn CHORN" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" className="mx-auto aspect-square rounded-md overflow-hidden  object-cover object-center transition-transform hover:scale-105 w-[350px] md:w-[450px] color: transparent;" src="/endu.jpg" />
                </div>
            </section>
        </main>
    )
}
export default AchievementsPage;