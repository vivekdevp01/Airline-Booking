const { TicketRepository } = require("../repositories");
const { Mailer } = require("../config");
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");
const ticketRepository = new TicketRepository();
async function sendEmail(mailFrom, mailTo, subject, text) {
  try {
    const response = await Mailer.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: subject,
      text: text,
    });
    return response;
  } catch (error) {
    console.log(error);
    if (
      error.name == "SequelizeValidationError" ||
      error.name == "SequelizeUniqueConstraintError"
    ) {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });

      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot create a new response",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function createTicket(data) {
  try {
    const response = await ticketRepository.create(data);
    return response;
  } catch (error) {
    throw new AppError(
      "Cannot update a city",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function getpendingEmails() {
  try {
    const response = await ticketRepository.getPendingTickets();
    return response;
  } catch (error) {
    throw new AppError(
      "Cannot see pending emails",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
module.exports = {
  sendEmail,
  createTicket,
  getpendingEmails,
};
