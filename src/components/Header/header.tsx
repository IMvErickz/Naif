'use client'
import Image from "next/image";

export function Header() {
    return (
        <head className="w-full h-[196px] flex items-center justify-center bg-[#DBDBDC]">
            <Image
                src={'/Logo.svg'}
                alt="Não encontrado"
                width={214}
                height={176}
                priority
            />
        </head>
    )
}