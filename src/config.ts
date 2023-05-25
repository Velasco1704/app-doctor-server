import { config } from "dotenv";
config();

export const PORT = process.env.PORT_APP;
export const JWT_SECRET = process.env.JWT_SECRET || "";
