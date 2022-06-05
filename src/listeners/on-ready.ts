import { Client } from "discord.js"

export const onReady = (client: Client) => {
  client.on("ready", async () => {
    console.log(`${client.user?.username} is online now`)
  })
}
