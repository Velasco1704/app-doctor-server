import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { hash, compare } from "bcrypt";
import { tokenSign } from "../helpers";

const prisma = new PrismaClient();

export const getDoctors = async (req: Request, res: Response) => {
  try {
    return await prisma.doctor
      .findMany({ include: { patients: true } })
      .then((response) => res.json(response));
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

export const getDoctor = async (req: Request, res: Response) => {
  try {
    const doctorFounded = await prisma.doctor.findFirst({
      where: { id: +req.params.id },
      include: {
        patients: true,
      },
    });
    if (!doctorFounded)
      return res.status(404).json({ error: "Doctor not found" });
    return res.json(doctorFounded);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

export const createDoctor = async (req: Request, res: Response) => {
  try {
    const plainToHash = await hash(req.body.password, 5);
    const newDoctor = await {
      ...req.body,
      password: plainToHash,
    };
    return await prisma.doctor
      .create({ data: newDoctor })
      .then(async (response) => {
        const tokenSession = await tokenSign(response);
        return res.json({
          success: "SUCCESS",
          data: response,
          token: tokenSession,
        });
      })
      .catch(() =>
        res.status(400).json({ error: "Some parameter does not match" })
      );
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

export const updateDoctor = async (req: Request, res: Response) => {
  try {
    let payload = req.body;
    if (payload.password) {
      payload = {
        ...req.body,
        password: await hash(payload.password, 5),
      };
    }
    return await prisma.doctor
      .update({
        where: { id: +req.params.id },
        data: payload,
      })
      .then((response) => res.json(response))
      .catch(() =>
        res
          .status(404)
          .json({ error: "Some parameter does not match or doctor not found" })
      );
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

export const deleteDoctor = async (req: Request, res: Response) => {
  try {
    return await prisma.doctor
      .delete({ where: { id: +req.params.id } })
      .then((response) =>
        res.status(200).json({ success: "Doctor deleted", doctor: response })
      )
      .catch(() => res.status(404).json({ error: "Doctor not found" }));
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const doctorFounded = await prisma.doctor.findFirst({
      where: { email: req.body.email },
      include: {
        patients: true,
      },
    });
    if (!doctorFounded)
      return res.status(404).json({ error: "Email incorrect" });
    return compare(req.body.password, doctorFounded?.password || "")
      .then(async (result) => {
        const tokenSession = await tokenSign(doctorFounded);
        if (result)
          return res.json({
            success: "SUCCESS",
            data: doctorFounded,
            token: tokenSession,
          });
        else return res.status(403).json({ error: "Password incorrect" });
      })
      .catch(() => res.status(400).json({ error: "something went wrong" }));
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};
