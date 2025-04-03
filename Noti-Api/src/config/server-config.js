const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  GMAIL_EMAIL: process.env.GMAIL_EMAIL,
  MAIL_CONNECTION: process.env.MAIL_CONNECTION,
};
