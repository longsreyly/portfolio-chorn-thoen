import Link from "next/link";

const NavbarComponent = () => {
    return (
        <main>
            <header class="sticky inset-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-lg">
                <nav class="mx-auto flex max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
                    <div class="relative flex items-center">
                        <h1 className="font-bold ">Thoen CHORN</h1>
                    </div>
                    <ul class="hidden items-center justify-center gap-6 md:flex">
                        <li class="pt-1.5 font-dm text-sm font-medium text-slate-700">
                            <Link href="#">Home</Link>
                        </li>
                        <li class="pt-1.5 font-dm text-sm font-medium text-slate-700">
                        <Link href="#">Projects</Link>
                        </li>
                        <li class="pt-1.5 font-dm text-sm font-medium text-slate-700">
                        <Link href="#">Achievements</Link>
                        </li>
                        <li class="pt-1.5 font-dm text-sm font-medium text-slate-700">
                        <Link href="#">About Me</Link>
                        </li>
                      
                    </ul>
                    <div class="flex-grow"></div>
                    <div class="hidden items-center justify-center gap-6 md:flex">
                        <a href="#"
                            class="rounded-md bg-[#0f172a] px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md transition-transform duration-200 ease-in-out hover:scale-[1.03]">
                            Contact Me
                        </a>
                    </div>
                </nav>
            </header>
        </main>
    )
}
export default NavbarComponent;