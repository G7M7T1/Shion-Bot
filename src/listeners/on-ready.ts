import { Client } from "discord.js"
import {SlashCommands} from "../slash-commands";

export const onReady = (client: Client) => {
  client.on("ready", () => {
    console.log(`${client.user?.username} is online now`)

    const commands = SlashCommands.map(slashCommand => slashCommand.command.toJSON())

    console.log(commands)

    // client.application?.commands.set(commands)
  })
}
