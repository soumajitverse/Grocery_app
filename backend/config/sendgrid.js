import dotenv from 'dotenv'
dotenv.config()
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key from environment variables
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Generic email sending function
export const sendEmail = async (to, subject, html) => {
    const msg = {
        to,
        from: process.env.SENDGRID_VERIFIED_SENDER,
        subject,
        html
    };
    await sgMail.send(msg)
    console.log(`Email sent successfully to ${to}`)
};
