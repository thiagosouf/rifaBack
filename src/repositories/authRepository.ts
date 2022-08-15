import { client } from "../database.js";
import { CreateSignupData, CreateLoginData } from "../services/authService.js";
import bcrypt from "bcrypt";

export interface UserRepository {
  id: number;
  nome: string;
  email: string;
  whatsapp: string;
  senha: string;
  confirmSenha: string;
}

export async function findUserByEmail(email: string) {
  return await client.users.findUnique({
    where: { email },
  });
}

export async function createUser(signupData: CreateSignupData) {
  const { nome, email, whatsapp, senha } = signupData;
  const hash = await bcrypt.hash(senha, 10);
  return await client.users.create({
    data: {
      nome: nome,
      email: email,
      whatsapp: whatsapp,
      senha: hash,
    },
  });
}

export async function checkLogin(loginData: string, loginBanco: string) {
  const validPass = await bcrypt.compare(loginData, loginBanco);
  return validPass;
}
