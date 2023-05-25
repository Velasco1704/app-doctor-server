import express from "express";
import cors from "cors";
import patientsRoutes from "./routes/patients.routes";
import doctorsRoutes from "./routes/doctors.routes";
import { PORT } from "./config";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", patientsRoutes);
app.use("/api", doctorsRoutes);

app.listen(PORT);
console.log(`Server listen on port`, PORT);
