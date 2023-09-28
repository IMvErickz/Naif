import { ObjectiveCard } from "@/components/Field/Objective";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/header";
import Image from "next/image";

export default function Objective() {

    const objectives = [
        {
            text: 'Precisamos de pessoas que estão dispostas a nos ajudar,',
            span: 'parceiros',
            img: '/photos/4.svg'
        },
        {
            text: 'Pessoas que apoiem os nossos programas, que estão de acordo com os nossos ideias',
            img: '/photos/3.svg'
        },
    ]

    return (
        <main className="flex flex-col items-center justify-center bg-[#F6F6F7]">
            <Header />
            <section className="w-full flex items-center justify-center p-2">
                <h1 className="font-arial font-bold text-black text-6xl">Objetivo</h1>
            </section>
            <section className="w-full flex flex-col xl:flex-row items-center justify-center gap-y-4 xl:gap-x-32 py-4">
                {objectives.map(objective => {
                    if (objective.text[0]) {
                        return (
                            <ObjectiveCard key={objective.text} img={objective.img} text={objective.text} span={objective.span} />
                        )
                    }
                })}
            </section>
            <section className="w-full flex flex-col items-center justify-center p-20 space-y-4">
                <ObjectiveCard img="/photos/7.svg" text='Se você está disposto a fazer a mudança em prol de uma vida melhor para você e para todos, entre em contato conosco!' />
                <Image
                    src={'/photos/CAMPANHA DE DOAÇÃO 1.svg'}
                    alt="Não encontrado"
                    width={600}
                    height={600}
                    className="rounded-lg"
                />
            </section>
            <Footer />
        </main>
    )
}