import Link from "next/link";

const AchievementsPage = () => {
    const information = [
        {
            image : "/rupp.png",
            title : "Introduction to Networks ",
            name : "Issued by Royal University of Phnom Penh",
            completed : "Completed on 8 Sep 2022",
            cridentail : "https://drive.google.com/file/d/1D7uWSOfk_drt5WiZYJ3r8IeMWhPp3IEj/view?usp=sharing"       
        },
        {
            image : "/rupp.png",
            title : "Switching, Routing, and Wireless Essentials ",
            name : "Issued by Royal University of Phnom Penh",
            completed : "Completed on 28 Jul 2023",
            cridentail : "https://drive.google.com/file/d/1NJaxH-5B8LFvlbOW33ifoHAfC7sa6ntt/view?usp=sharing"          
        },
        {
            image : "/coursera.png",
            title : "Programming Fundamentals in Kotlin",
            name : "Issued by Coursera",
            completed : "Completed on July 3, 2024",
            cridentail : "https://coursera.org/share/7cd2ba448e87e8f767c64efc3c00b068"           
        },
        {
            image : "/coursera.png",
            title : "Introduction to iOS Mobile Application Development",
            name : "Issued by Coursera",
            completed : "Completed on May 27, 2024",
            cridentail : "https://coursera.org/share/2bd0592436aa00879d760a8b49271011"           

        },
        {
            image : "/coursera.png",
            title : "Version Control",
            name : "Issued by Coursera",
            completed : "Completed on June 26, 2024",
            cridentail : "https://coursera.org/share/1f872ccee0df931d732bb1809cfbee88"           

        },
    ]
    return (
        <main>
            <section className="w-full py-14">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
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
            <section className="container w-full py-12 md:py-24 lg:py-32">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {
                    information.map((data)=>(
                        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                        <div className="flex flex-col items-center justify-between bg-white p-6 dark:bg-gray-950">               
                            <div>
                                <img alt="Issuing Organization" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" className="mb-4 h-12 w-12 rounded-full object-contain color: transparent; aspect-ratio: 50 / 50; object-fit: cover;" src={data.image}/>
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
        </main>
    )
}
export default AchievementsPage;