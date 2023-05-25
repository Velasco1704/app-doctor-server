import {
  createPatientProfile,
  deletePatient,
  getPatient,
  getPatients,
  updatePatient,
} from "../controllers/patients.controllers";
import { Router } from "express";

const router = Router();

router.get("/patients", getPatients);
router.get("/patients/:id", getPatient);
router.post("/create-patient", createPatientProfile);
router.put("/update-patient/:id", updatePatient);
router.delete("/patients/:id", deletePatient);

export default router;
