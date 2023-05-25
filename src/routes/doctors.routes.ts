import {
  createDoctor,
  deleteDoctor,
  getDoctor,
  getDoctors,
  login,
  updateDoctor,
} from "../controllers/doctors.controller";
import { Router } from "express";

const router = Router();

router.get("/doctors", getDoctors);
router.get("/doctors/:id", getDoctor);
router.post("/create-doctor", createDoctor);
router.post("/login", login);
router.put("/update-doctor/:id", updateDoctor);
router.delete("/doctors/:id", deleteDoctor);

export default router;
