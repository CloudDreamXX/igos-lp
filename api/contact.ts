import nodemailer from "nodemailer";

export default async function handler(req: { body: { firstName: any; lastName: any; email: any; message: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { success: boolean; }): void; new(): any; }; }; }) {
    const { firstName, lastName, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    await transporter.sendMail({
        from: `"${firstName} ${lastName}" <${email}>`,
        to: "contact@igos.io",
        subject: "New Contact Form Message",
        text: message,
    });

    res.status(200).json({ success: true });
}
