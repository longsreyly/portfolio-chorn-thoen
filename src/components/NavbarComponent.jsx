import Link from "next/link";

const NavbarComponent = () => {
    return (
        <main>
            <header className=" sticky inset-0 z-50 border-2 p-5 border-slate-100 bg-white/80 backdrop-blur-lg">
                <div className="px-4 container">
                    <div className="flex items-center justify-between">
                        <div className="flex shrink-0">
                            <a aria-current="page" className="flex items-center" href="/">
                                <h1 className="font-bold">Thoen CHORN</h1>
                                <p className="sr-only">Website Title</p>
                            </a>
                        </div>
                        <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                            <Link aria-current="page"
                                className="igroup inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-400 hover:text-accent-foreground focus:bg-gray-900 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 bg-transparent hover:underline"
                                href="/">Home</Link>
                            <Link aria-current="page"
                                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-400 hover:text-accent-foreground focus:bg-gray-900 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 bg-transparent hover:underline"
                                href="/projects">
                                Projects
                            </Link>
                            <Link aria-current="page"
                                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-400 hover:text-accent-foreground focus:bg-gray-900 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 bg-transparent hover:underline"
                                href="/achievements">
                                Achievements
                            </Link>
                            <Link aria-current="page"
                                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-400 hover:text-accent-foreground focus:bg-gray-900 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 bg-transparent hover:underline"
                                href="/about"> About Me
                            </Link>
                        </div>
                        <div className="flex items-center justify-end gap-3">
                            <button className="hidden items-center justify-center rounded-md bg-gray-900 px-4 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-800 sm:inline-flex" >Contact Me</button>
                        </div>
                    </div>
                </div>
            </header>
        </main>
    )
}
export default NavbarComponent;