import nodemailer from "nodemailer";
import "dotenv/config";

const { GMAIL_EML, GMAIL_PWD } = process.env;

const nodemailerConfig = {
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: GMAIL_EML,
    pass: GMAIL_PWD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: GMAIL_EML };
  await transport.sendMail(email);
};

export { sendEmail };