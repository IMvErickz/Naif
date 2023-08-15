'use client'

import axios from "axios";
import Image from "next/image";
import { FormEvent, useState } from "react";

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

    const [subject, setSubject] = useState('')
    const [html, setMessage] = useState('')
    const [Name, setName] = useState('')


    async function handleEmail(event: FormEvent) {
        event.preventDefault()

        await axios.post('/api/email', {
            subject,
            html,
            Name
        })
    }

    return (
        <footer className="w-full h-[368px] flex flex-col items-center justify-center bg-[#0F3F43]">
            <h1 className="text-white font-bold text-6xl font-arial pt-2">Contato</h1>

            <div className="w-full h-full flex flex-row items-center justify-center">
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
                <form onSubmit={handleEmail} className="flex flex-col items-center justify-center gap-y-4">
                    <h3 className="text-2xl font-arial text-white">Deixe-nos uma mensagem</h3>
                    <input className="bg-[#F7F2DF] p-2 rounded-lg h-10 text-black outline-none"
                        type="text"
                        placeholder="Seu Nome"
                        onChange={event => setName(event.target.value)}
                    />
                    <input className="bg-[#F7F2DF] p-2 rounded-lg h-10 text-black outline-none"
                        type="text"
                        placeholder="Assunto"
                        onChange={event => setSubject(event.target.value)}
                    />
                    <textarea
                        placeholder="Sua Mensagem"
                        name="" id=""
                        cols={20}
                        rows={3}
                        className="rounded-lg placeholder:items-center placeholder:justify-center bg-[#F7F2DF] text-black outline-none p-2"
                        onChange={event => setMessage(event.target.value)}
                    >

                    </textarea>
                    <button type="submit" className="bg-[#78B5AE] rounded-lg w-[144px] h-[36px] font-bold font-arial">Enviar</button>
                </form>
            </div>
        </footer>
    )
}