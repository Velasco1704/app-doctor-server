import { welcomeController } from "../controllers/index.controller";
import { Router } from "express";

const router = Router();

router.get("/", welcomeController);

export default router;
