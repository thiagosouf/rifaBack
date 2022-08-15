import { Request, Response } from "express";
import { signupService, loginService } from "../services/authService.js";

export async function signupController(req: Request, res: Response) {
  const result = await signupService(req.body);
  res.send(result);
}

export async function loginController(req: Request, res: Response) {
  const result = await loginService(req.body);
  res.send(result);
}
