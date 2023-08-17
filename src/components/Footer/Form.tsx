'use client'

import axios from "axios"
import { FormEvent, useState } from "react"

export function Form() {

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
    )
}