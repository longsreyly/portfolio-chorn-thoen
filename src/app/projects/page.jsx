
import Link from 'next/link';
import React from 'react';
const ProjectPage = () => {
    const project = [
        {
            link: "https://github.com/chornthoen/zalada_flutter",
            title: "Zalada E-commerce | Mobile App",
            paragraph: "A E-commerce design using Flutter."
        },
        {
            link: "https://github.com/chornthoen/Jobby-application",
            title: "Jobby Applicationn | Mobile App",
            paragraph: "A Jobby application design using Flutter."
        },
        {
            link: "https://github.com/chornthoen/movie-app-flutter",
            title: "Movie | Mobile App",
            paragraph: "A Movie app design using Flutter."
        }
    ]
    return (
        <main>
            <section data-aos="fade-up"
     data-aos-duration="3000" className="w-full py-14 ">
                <div className="container px-4 md:px-6 ">
                    <div className="flex flex-col items-center space-y-4 text-center mt-20">
                        <div className="space-y-2 ">
                            <h1 className="text-5xl font-semibold ">My Personal Projects</h1>
                            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 pt-2">
                                Explore some of the projects I've worked on in the past. From custom web applications to mobile apps, I've done it all.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Card Project */}
            <section className="w-full pb-24">
                <div className="container px-4 md:px-6">
                    <div className="flex justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <label className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-semibold" htmlFor="filter">
                                Filter by:
                            </label>
                            <button type="button" role="combobox" aria-controls="radix-:r0:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" data-placeholder="" class="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 w-36"><span className="pointer-events: none;">All Categories</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button>
                        </div>
                    </div>
                    {/* card */}
                    <div data-aos="fade-up"
     data-aos-duration="3000" className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            project.map((data) => (
                                <div class="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                                    <Link className="absolute inset-0 z-10" href={data.link}>
                                        <span className="sr-only">View Project</span>
                                    </Link>
                                    <img  className="object-cover w-full h-60 md:h-72 lg:h-96 group-hover:scale-105 transition-all duration-300 color: transparent; aspect-ratio: 600 / 400; object-fit: cover;" src="/zalada.jpg" alt="No Picture" loading="lazy" decoding="async" data-nimg="1" />
                                    <div className="bg-white p-4 dark:bg-gray-950">
                                        <h3 className="font-semibold text-lg md:text-xl">{data.title}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{data.paragraph}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ProjectPage;
