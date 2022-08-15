import { Request, Response } from "express";
import {
  selecionarRifaService,
  desmarcarRifaService,
  mostrarRifaService,
  carrinhoRifaService,
  checkoutRifaService,
} from "../services/rifaService.js";

export async function rifaController(req: Request, res: Response) {
  const token = req.headers.authorization;
  const result = await selecionarRifaService(req.body, token);
  res.send(result);
}

export async function unselectRifaController(req: Request, res: Response) {
  const token = req.headers.authorization;
  const result = await desmarcarRifaService(req.body, token);
  res.send(result);
}

export async function mostrarRifaController(req: Request, res: Response) {
  const result = await mostrarRifaService();
  res.send(result);
}

export async function carrinhoRifaController(req: Request, res: Response) {
  const token = req.headers.authorization;
  const result = await carrinhoRifaService(token);
  res.send(result);
}

export async function checkoutRifaController(req: Request, res: Response) {
  const token = req.headers.authorization;
  const result = await checkoutRifaService(req.body, token);
  res.send(result);
}
