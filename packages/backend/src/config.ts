import dotenv from "dotenv";

dotenv.config()

const config = {
    LivepeerKey: process.env.LIVEPEER_KEY,
    LivepeerUrl: 'https://livepeer.com/api/'
}

export default config;