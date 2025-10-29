import dotenv from 'dotenv'
dotenv.config()
import nodemailer from "nodemailer";

console.log("for testing smtp_host: ", process.env.SMTP_HOST)
console.log("for testing smtp_port: ", process.env.SMTP_PORT)
console.log("for testing smtp_user: ", process.env.SMTP_USER)

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

export default transporter;