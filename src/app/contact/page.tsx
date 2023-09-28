import { EmailForm } from "@/components/Form/EmailForm";
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
        <main className="w-full h-full flex flex-col items-center justify-center bg-[#0F3F43]">
            <header className="w-full h-full flex items-center justify-center">
                <Header />
            </header>
            <section className="xl:w-[467px] w-full h-full flex items-center justify-center py-20 px-4">
                <h1 className="text-white font-arial font-bold text-base xl:text-2xl text-center">
                    Entre em contato conosco para promover uma das melhores ações para a vida das pessoas.
                </h1>
            </section>
            <section className="w-full h-full flex flex-col gap-y-4 sm:flex-row items-center justify-center p-20">
                <EmailForm />
                {contacts.map(contatc => {
                    return (
                        <div key={contatc.labe} className="w-full h-full flex flex-col items-center justify-center gap-x-96 py-10">
                            <label className="font-arial font-bold text-4xl text-center">{contatc.labe}</label>
                            <span className="font-arial font-bold text-2xl text-center">{contatc.value}</span>
                        </div>
                    )
                })}
            </section>
        </main>
    )
}