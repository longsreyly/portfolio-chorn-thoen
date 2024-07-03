import { Select, SelectItem } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';


const ProjectPage = () => {


    return (
        <main>
            <section className="w-full py-14">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-5xl font-semibold">My Personal Projects</h1>
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
                    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                        <div class="group relative overflow-hidden rounded-lg">
                            <Link class="absolute inset-0 z-10" href="#">
                                <span class="sr-only">View Project</span>
                            </Link>
                            <img alt="Zalada E-commerce | Mobile App" loading="lazy" width="600" height="400" decoding="async" data-nimg="1" class="object-cover w-full h-60 md:h-72 lg:h-96 group-hover:scale-105 transition-all duration-300" className="color: transparent; aspect-ratio: 600 / 400; object-fit: cover;" src="/project.png" />
                            <div class="bg-white p-4 dark:bg-gray-950">
                            <h3 class="font-semibold text-lg md:text-xl">Zalada E-commerce | Mobile App</h3>
                        <p class="text-sm text-gray-500 dark:text-gray-400">A E-commerce design using Flutter.</p>
                        </div>
                        </div>

                       

                    </div>
                </div>
            </section>
        </main>
    );
}

export default ProjectPage;
