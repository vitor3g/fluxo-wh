import { Webhook } from "simple-discord-webhooks";
import config from "../config";
import type { Customer, Product } from "../@types/tebex";

class DiscordSender {
  private readonly discord: Webhook;

  constructor() {
    this.discord = new Webhook(config.webhook_url as unknown as URL);
  }

  public async send(customer: Customer, product: Product) {
    this.discord.send("", [
      {
        title: "Nova Compra no FLUXOP",
        description:
          "O jogador piriripopo comprou um Carro modelo blau na cidade, parabéns meu consagrado",
        color: 11535793,
        fields: [],
        image: {
          url: "https://cache.nowayrp.uk/NoWay/Imagem/banner-detail.gif",
        },
        footer: {
          text: "https://fluxo.gg",
        },
        author: {
          name: "FLUXO ROLEPLAY",
        },
      },
    ]);
  }
}

export { DiscordSender };
