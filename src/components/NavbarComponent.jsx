import Link from "next/link";

const NavbarComponent = () => {
    return (
        <main>
            <header className="py-4 top-0 left-0 right-0 z-10 bg-white bg-opacity-70 backdrop-blur-xl fixed border-b-[1px]">
                <div className="container flex flex-row justify-between lg:justify-evenly items-center px-4 lg:px-8">
                    <div className="max-w-2xl flex items-center">
                        <h1 className="font-bold text-xl w-full">
                            <a href="/">Thoen CHORN</a>
                        </h1>
                        <div className="invisible">
                            <label className="relative text-gray-600">
                                <p className="sr-only">Change language</p>
                                <select className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6">
                                    <option value="en" selected="">🇺🇸 English</option>
                                    <option value="km">🇰🇭 ភាសាខ្មែរ</option>
                                </select>
                                <span className="pointer-events-none absolute right-2 top-[8px]">⌄</span>
                            </label>
                        </div>
                    </div>
                    <nav className="lg:flex hidden">
                        <nav aria-label="Main" data-orientation="horizontal" dir="ltr" className="relative z-10 flex max-w-max flex-1 items-center justify-center text-4xl">
                            <div className="position:relative">
                                <ul data-orientation="horizontal" className="group flex flex-1 list-none items-center justify-center space-x-1" dir="ltr">
                                    <li>
                                        <Link className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-200 hover:text-accent-foreground focus:bg-gray-900 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 bg-transparent hover:underline" href="/">
                                            <span className="text-[17px]">Home</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-200  hover:text-accent-foreground focus:bg-gray-900 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 bg-transparent hover:underline" href="/projects">
                                            <span className="text-[17px]">Projects</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-200  hover:text-accent-foreground focus:bg-gray-900 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 bg-transparent hover:underline" href="/achievements">
                                            <span className="text-[17px]">Achievements</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-200  hover:text-accent-foreground focus:bg-gray-900 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 bg-transparent hover:underline" href="/about">
                                            <span className="text-[17px]">About Me</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </nav>
                    <div className="max-w-2xl flex flex-row gap-4">
                        <div className="flex flex-row items-center gap-2">
                        </div>
                        <div className="sm:flex flex-row gap-4 items-center hidden text-lg">
                            <Link href="/contact" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-900 text-primary-foreground hover:bg-gray-800 h-10 px-4 py-2">Contact Me</Link>
                        </div>
                        <div>
                            <menu className="lg:hidden">
                                <button type="button" className="p-2.5 text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                    </svg>
                                </button>
                            </menu>                           
                        </div>
                    </div>
                </div>
            </header>
        </main>
    );
};

export default NavbarComponent;
