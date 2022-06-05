import { SlashCommandBuilder } from "@discordjs/builders";
import {SlashCommand} from "../types";

export const HelloCommand: SlashCommand = {
    command: new SlashCommandBuilder()
        .setName("hello")
        .setDescription("打招呼吗? Hello!"),

    async run(interaction) {
        await interaction.reply({
            content: `你好喔! ${interaction.user.id}`
        })
    }
}