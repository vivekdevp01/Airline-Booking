const nodemailer = require("nodemailer");

const { GMAIL_EMAIL, MAIL_CONNECTION } = require("./server-config");

const mailsender = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: GMAIL_EMAIL,
    pass: MAIL_CONNECTION,
  },
});

module.exports = mailsender;
