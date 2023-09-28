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
            <section className="sm:w-[600px] w-full h-full flex flex-col items-center justify-center py-20 space-y-8">
                <p className="text-black font-bold text-2xl text-center font-arial">Somos a esperança para as famílias de todas as comunidades.</p>
                <Image
                    src={'/carrossel/OK 1.svg'}
                    alt="Não encontrado"
                    width={0}
                    height={0}
                    className="sm:w-full w-[50%]"
                />
            </section>
            <Footer />
        </main>
    )
}