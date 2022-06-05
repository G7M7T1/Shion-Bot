import dotenv from "dotenv"

dotenv.config()

export const TOKEN = process.env.TOKEN_ID || ""
export const APPLICATION_ID = process.env.APPLICATION_ID || ""
export const GUILD_ID = process.env.GUILD_ID || ""
