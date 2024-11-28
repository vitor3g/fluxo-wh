import { Webhook } from "simple-discord-webhooks";
import config from "../config";
import type { Customer, Product } from "../@types/tebex";

class DiscordSender {
  private readonly discord: Webhook;

  constructor() {
    this.discord = new Webhook(config.webhook_url as unknown as URL);
  }

  public async send(customer: Customer, product: Product) {
    const discord_id = product.variables.find(
      (variable) => variable.identifier === "discord_id"
    );

    if (!discord_id) return;

    this.discord.send("", [config.embed]);
  }
}

export { DiscordSender };
