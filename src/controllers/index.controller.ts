import { Request, Response } from "express";

export const welcomeController = (req: Request, res: Response) => res.send('welcome');
