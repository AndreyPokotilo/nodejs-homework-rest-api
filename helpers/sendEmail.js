const nodemailer = require("nodemailer");

require("dotenv").config();

const {  META_PASSWORD } = process.env;
const nodemalierConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "andrii-pokotilo@meta.ua",
    pass: META_PASSWORD,
  },
};
const transport = nodemailer.createTransport(nodemalierConfig);




const sendEmail = async (body) => {
  try {
    const email = {
        to: "hexab79748@kkoup.com",
        from: "andrii-pokotilo@meta.ua",
        subject: "Test",
        html:"<p><strong>Test email</strong> from localhost:3000</p>",
    };

    await transport.sendMail(email);
    console.log("Email send success", { ...body });
    return true;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = sendEmail;