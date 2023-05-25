import { sign } from "jsonwebtoken";
import { JWT_SECRET } from "../config";
import { Doctor } from "@prisma/client";

export const tokenSign = async (user: Doctor) =>
  sign({ id: user.id }, JWT_SECRET, { expiresIn: "2h" });
