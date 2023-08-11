import nodemailer from "nodemailer";

export const conection = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'erickspy2003@gmail.com',
        pass: 'keypxodipetznkwu',
    },
});