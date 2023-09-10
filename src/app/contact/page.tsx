import { Header } from "@/components/Header/header";

export default function Contact() {

    const contacts = [
        {
            labe: 'Email',
            value: 'diretor@institutonaif.org'
        },
        {
            labe: 'Redes Sociais',
            value: '@instituto.naif'
        }
    ]

    return (
        <main className="w-screen h-screen flex flex-col items-center justify-center bg-[#0F3F43]">
            <header className="w-full h-full flex items-center justify-center">
                <Header />
            </header>
            <section className="w-[467px] h-full flex items-center justify-center py-20">
                <h1 className="text-white font-arial font-bold text-2xl text-center">
                    Entre em contato conosco para promover umas das melhores ações para a vida das pessoas.
                </h1>
            </section>
            <section className="w-full h-full flex flex-col gap-y-4 sm:flex-row items-center justify-center p-20">
                {contacts.map(contatc => {
                    return (
                        <div key={contatc.labe} className="w-full h-full flex flex-col items-center justify-center gap-x-96">
                            <label className="font-arial font-bold text-4xl">{contatc.labe}</label>
                            <span className="font-arial font-bold text-2xl">{contatc.value}</span>
                        </div>
                    )
                })}
            </section>
        </main>
    )
}