import { Resend } from "resend";
import EmailTemplate from "../../components/Email";
import { NextApiRequest, NextApiResponse } from "next";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email } = await req.body;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "colburnsanders@gmail.com",
      subject: "NextBud - Welcomes You!",
      react: EmailTemplate(email),
    });

    return res.status(200).json({ message: "Email Sent! " });
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
}
