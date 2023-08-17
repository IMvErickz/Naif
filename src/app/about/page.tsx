import { Footer } from "@/components/Footer/Footer";
import Image from "next/image";

export default function About() {
    return (
        <main className="flex flex-col items-center justify-center bg-[#F6F6F7]">
            <head className="w-full h-[196px] flex items-center justify-center bg-[#DBDBDC]">
                <h1 className="font-bold font-arial text-7xl">Quem Somos</h1>
            </head>
            <section className="w-full flex items-center justify-center">
                <Image
                    src={'/photos/LogoLarge.svg'}
                    alt="Não encontrado"
                    width={435}
                    height={472}
                />
            </section>
            <section className="w-[600px] h-full flex flex-col items-center justify-center">
                <p className="text-black font-bold text-base sm:text-2xl text-center font-arial">Somos a esperança para as famílias de todas as comunidades.</p>
            </section>
            <Footer />
        </main>
    )
}