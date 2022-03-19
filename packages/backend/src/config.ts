import dotenv from "dotenv";

dotenv.config()

const config = {
    LivepeerKey: process.env.LIVEPEER_KEY
}

export default config;