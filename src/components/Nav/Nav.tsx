import Link from "next/link";

export function Nav() {
    return (
        <nav className="w-full h-[50px] drop-shadow-lg flex flex-row gap-x-48 items-center justify-center bg-[#AED9D0]">
            <Link href='/about'>
                <span className="text-black font-arial text-2xl">Quem Somos</span>
            </Link>
            <Link href='/objective'>
                <button className="bg-[#FF0000] text-xl font-arial font-bold rounded-lg w-[114px] h-[36px]">Objetivo</button>
            </Link>
            <Link href='/about'>
                <span className="text-black font-arial text-2xl">Contato</span>
            </Link>
        </nav>
    )
}