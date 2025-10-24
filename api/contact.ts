import nodemailer from "nodemailer";

export default async function handler(req: { body: { firstName: any; lastName: any; email: any; message: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { success: boolean; preview: string | false; }): void; new(): any; }; }; }) {
    const { firstName, lastName, email, message } = req.body;

    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass,
        },
    });

    const info = await transporter.sendMail({
        from: `"${firstName} ${lastName}" <${email}>`,
        to: "soixallauxaunneu-4076@yopmail.com",
        subject: "New Contact Form Message (Test Mode)",
        text: message,
    });

    console.log("Preview URL:", nodemailer.getTestMessageUrl(info));

    res.status(200).json({
        success: true,
        preview: nodemailer.getTestMessageUrl(info),
    });
}
