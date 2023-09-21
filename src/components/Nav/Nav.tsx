'use client'

import Link from "next/link";
import DropdownMenuDemo from "../DropDown/DropDown";

export function Nav() {
    return (

        <nav className="w-full h-[50px] drop-shadow-lg flex flex-col gap-x-48 items-center justify-center bg-[#AED9D0]">
            <div className="w-full flex flex-wrap items-start justify-start mx-auto px-4">
                <button data-collapse-toggle="navbar-default" type="button" className="items-start p-2 w-10 h-10 justify-start text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <DropdownMenuDemo />
                </button>
            </div>
            <div className="hidden w-full md:block md:w-auto items-center justify-center" id="navbar-default">
                <ul className="font-medium flex flex-col justify-between p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                    <li>
                        <Link href='/about'>
                            <span className="text-black font-arial text-2xl">Quem Somos</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/objective'>
                            <button className="bg-[#FF0000] mr-14 text-xl font-arial font-bold rounded-lg w-[114px] h-[36px]">Objetivo</button>
                        </Link>
                    </li>
                    <li>
                        <Link href='/contact'>
                            <span className="text-black font-arial text-2xl">Contato</span>
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>

    )
}