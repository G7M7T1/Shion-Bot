import { SlashCommandBuilder } from "@discordjs/builders";
import {SlashCommand} from "../types";

export const HelloCommand: SlashCommand = {
    command: new SlashCommandBuilder()
        .setName("hello")

        .setNameLocalizations({
            'zh-CN': '简体',
            'zh-TW': '繁体',
        })

        .setDescriptionLocalizations({
            'zh-CN': '简体',
            'zh-TW': '繁体',
        })

        .setDMPermission(true)
        .setDefaultMemberPermissions(null)
        .setDefaultPermission(true)
        .setDescription("打招呼吗? Hello!"),

    async run(interaction) {
        await interaction.reply({
            content: `你好喔! ${interaction.user.id}`
        })
    }
}