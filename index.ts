import express from "express";
import type { Root } from "./@types/tebex";
import { Webhook } from "simple-discord-webhooks";
import { DiscordSender } from "./senders/discord";

const server = express();
const discordSender = new DiscordSender();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.post("/tebex", async (req, res) => {
  const request = req.body as Root;

  // mock discord event
  switch (request.status.id) {
    case 1:
      const product = request.products[0];
      const customer = request.customer;

      await discordSender.send(customer, product);

      res.status(200).json({
        status: "success",
        message: "Event has been called.",
      });
      break;
    default:
      console.log("Another event has been called.");
  }
});

server.listen(3333, () => {
  console.log("Server is running on port 3333");
});
