import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getPatients = async (req: Request, res: Response) => {
  try {
    return await prisma.patient
      .findMany({ include: { Doctor: true } })
      .then((response) => res.json(response));
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

export const getPatient = async (req: Request, res: Response) => {
  try {
    const patientFound = await prisma.patient.findFirst({
      where: { id: +req.params.id },
      include: {
        Doctor: true,
      },
    });
    if (!patientFound)
      return res.status(404).json({ error: "Patient not found" });
    return res.json(patientFound);
  } catch (error) {
    console.log(error);
  }
};

export const createPatientProfile = async (req: Request, res: Response) => {
  try {
    return await prisma.patient
      .create({
        data: req.body,
      })
      .then((response) => res.json(response))
      .catch(() =>
        res.status(400).json({ error: "Some parameter does not match" })
      );
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

export const updatePatient = async (req: Request, res: Response) => {
  try {
    return await prisma.patient
      .update({
        where: { id: +req.params.id },
        data: req.body,
      })
      .then((response) => res.json(response))
      .catch(() =>
        res
          .status(404)
          .json({ error: "Some parameter does not match or patient not found" })
      );
  } catch (error) {
    console.log(error);
  }
};

export const deletePatient = async (req: Request, res: Response) => {
  try {
    return await prisma.patient
      .delete({ where: { id: +req.params.id } })
      .then((response) =>
        res.status(200).json({ success: "patient deleted", patient: response })
      )
      .catch(() => res.status(404).json({ error: "Patient not found" }));
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};
