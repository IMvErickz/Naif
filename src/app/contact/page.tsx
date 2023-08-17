import { Form } from "@/components/Footer/Form";
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
        <main className="flex flex-col items-center justify-center bg-[#0F3F43]">
            <Header />
            <section className="w-[467px] flex items-center justify-center pt-20">
                <h1 className="text-white font-arial font-bold text-2xl text-center">
                    Entre em contato conosco para promover umas das melhores ações para a vida das pessoas.
                </h1>
            </section>
            <section className="w-full flex flex-col gap-y-4 sm:flex-row items-center justify-center p-20">
                {contacts.map(contatc => {
                    return (
                        <div className="w-full flex flex-col items-center justify-center gap-x-96">
                            <label className="font-arial font-bold text-4xl">{contatc.labe}</label>
                            <span className="font-arial font-bold text-2xl">{contatc.value}</span>
                        </div>
                    )
                })}
            </section>
            <section className="w-full flex flex-col items-center justify-center p-2">
                <Form />
            </section>
        </main>
    )
}