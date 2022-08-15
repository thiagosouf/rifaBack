import { Request, Response } from "express";
import {
  cadastrarRifaService,
  admEditService,
} from "../services/admService.js";

export async function admRifa(req: Request, res: Response) {
  const token = req.headers.authorization;
  const result = await cadastrarRifaService(req.body, token);
  res.send(result);
}

export async function admEdit(req: Request, res: Response) {
  const token = req.headers.authorization;
  const { numero, status, comprador } = req.body;

  const result = await admEditService(status, token, numero, comprador);
  res.send(result);
}
