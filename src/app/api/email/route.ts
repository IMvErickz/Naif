import { NextResponse } from "next/server";
import { conection } from "../../../lib/email";
import { NextApiRequest } from "next";
import { z } from "zod";

export async function POST(req: NextApiRequest) {

    if (req.method == 'POST') {

        const emailSchema = z.object({
            subject: z.string(),
            html: z.string()
        })

        const { html, subject } = emailSchema.parse(req.body)

        const message = await conection.sendMail({
            to: "erick.spbrasil@outlook.com",
            subject,
            html,
        })

        return NextResponse.json(message)
    }
}