'use client'

import Image from "next/image";

const contacts = [
    {
        label: 'Email',
        value: 'diretor@institutonaif.org'
    },
    {
        label: 'Redes sociais',
        value: '@instituto.naif'
    },
]


export function Footer() {

    return (
        <footer className="w-full sm:h-[300px] flex flex-col items-center justify-center bg-[#0F3F43]">
            <h1 className="text-white font-bold text-6xl font-arial pt-2">Contato</h1>

            <div className="w-full h-full flex sm:flex-row flex-col items-center justify-center">
                <section className="flex flex-row items-center justify-center">
                    <div>
                        <Image
                            src={'/Logo.svg'}
                            alt="Não encontrado"
                            width={214}
                            height={176}
                            priority
                        />
                    </div>
                    <div>
                        {contacts.map(contact => {
                            return (
                                <div key={contact.label} className="flex flex-row gap-x-2">
                                    <label htmlFor="" className="font-arial text-white text-2xl">{`${contact.label}: `}</label>
                                    <span className="font-arial text-white text-2xl">{contact.value}</span>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </div>
        </footer>
    )
}