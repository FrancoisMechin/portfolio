const sgMail = require('@sendgrid/mail');
import { NextApiRequest, NextApiResponse } from "next";

export default async function sendMail(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const { first, last, phone, email, subject, message } = req.body;

    const msg = {
        to: 'dev@francoismechin.com', // Remplacez par votre adresse e-mail de réception
        from: 'dev@francoismechin.com',
        subject,
        text: `Nom: ${first} ${last}\nTéléphone: ${phone}\n\n${message}`,
        html: `<p><strong>Nom:</strong> ${first} ${last}</p><p><strong>Téléphone:</strong> ${phone}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
    };

    try {
        sgMail
            .send(msg)
            .then(() => {
                console.log('res', res.json);
                return res.status(200).end();
            })
    } catch(error) {
            console.log('error', error);
            return res.status(500).send(error);
    };

}

export const config = {
    api: {
        externalResolver: true,
    },
}
