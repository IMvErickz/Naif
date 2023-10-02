'use client'

import axios from "axios"
import { FormEvent, useState } from "react"

export function EmailForm() {

    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const [text, setText] = useState('')

    async function handleSendEmail(event: FormEvent) {
        event.preventDefault()

        await axios.post('/api/email', {
            name,
            subject,
            text
        })
    }

    return (
        <form onSubmit={handleSendEmail} className="flex flex-col items-center justify-center space-y-8">
            <h1 className="text-2xl font-semibold text-center">Nos envie uma mensagem</h1>
            <input placeholder="Nome" type="text" onChange={event => setName(event.target.value)} className="bg-[#DBDBDC] rounded outline-none text-black p-2 placeholder:text-zinc-700" />
            <input placeholder="Assunto" type="text" onChange={event => setSubject(event.target.value)} className="bg-[#DBDBDC] rounded outline-none text-black p-2 placeholder:text-zinc-700" />
            <textarea placeholder="Digite aqui sua mensagem" onChange={event => setText(event.target.value)} className="bg-[#DBDBDC] rounded outline-none text-black p-2 placeholder:text-zinc-700" />
            <button type="submit" className="bg-[#FE0000] rounded px-4 py-1 hover:bg-red-400 hover:text-black transition-colors">Enviar</button>
        </form>
    )
}