import {SlashCommands} from "./slash-commands";
import {REST} from "@discordjs/rest";
import {APPLICATION_ID, TOKEN} from "./config";
import {Routes} from "discord-api-types/v9";

const registerGuildCommand = async () => {
    try {
        const commands = SlashCommands.map(({command}) => command.toJSON())
        const rest = new REST({ version: '9' }).setToken(TOKEN)
        await rest.put(
            Routes.applicationCommands(APPLICATION_ID),
            { body: commands },
        )
        console.log("Guild Commands Loaded")
    } catch (err) {
        console.log(err)
    }
}

registerGuildCommand()