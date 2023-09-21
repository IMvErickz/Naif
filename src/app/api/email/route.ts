import { transporter } from "@/lib/Email";
import { NextRequest, NextResponse } from "next/server";


type Data = {
    name: string;
    subject: string;
    text: string;
}

export async function POST(request: NextRequest) {
    const data: Data = await request.json()
    const { name, subject, text } = data
    let hasPassed = false

    const message = await transporter.sendMail({
        from: "sender@server.com",
        to: "diretor@institutonaif.org",
        subject: `${name} - ${subject}`,
        html: `<p>${text}</p>`,
    })
    if (message.accepted) {
        hasPassed = true;
    }
    return new NextResponse(JSON.stringify({ hasPassed }))
}