const express = require("express");
const amqplib = require("amqplib");
const { EmailService } = require("./services");
async function connectQueue() {
  try {
    const connection = await amqplib.connect("amqp://localhost");
    const channel = await connection.createChannel();
    await channel.assertQueue("noti-queue");
    channel.consume("noti-queue", async (data) => {
      try {
        const contentString = `${Buffer.from(data.content).toString()}`;
        const object = JSON.parse(contentString);
        console.log(object);
        // console.log(`Received ${data.content.toString()}`);
        await EmailService.sendEmail(
          "airnoti468@gmail.com",
          object.recepientEmail,
          object.subject,
          object.text
        );
        channel.ack(data);
      } catch (error) {
        console.error("Failed to process message:", error.message);
        console.error("Message content:", data.content.toString());
      }
    });
  } catch (error) {
    console.log(error);
  }
}
const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");
// const mailsender = require("./config/email-config");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, async () => {
  console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
  //   try {
  //     const response = await mailsender.sendMail({
  //       from: ServerConfig.GMAIL_EMAIL,
  //       to: "vivek.pundir33@gmail.com",
  //       subject: "is service running",
  //       text: "Flight Notification API Server is up and running", // plain text body
  //     });
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  await connectQueue();
  console.log("queued connection");
});
