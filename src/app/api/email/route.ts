import { NextRequest, NextResponse } from "next/server";
import { conection } from "../../../lib/email";
interface MailProps {
    html: string
    subject: string
    Name: string
}

export async function POST(req: NextRequest) {

    const emailSchema: MailProps = await req.json()

    const { html, subject, Name } = emailSchema

    const message = await conection.sendMail({
        to: "erickspy2003@gmail.com",
        subject: `De: ${Name}, Assunto: ${subject}`,
        html: html,
    })

    return NextResponse.json(message)
}