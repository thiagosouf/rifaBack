import {
  conflictError,
  notFoundError,
  unauthorizedError,
  unprocessableError,
} from "../utils/errorUtils.js";
import validToken from "../utils/validToken.js";
import * as repo from "../repositories/rifaRepository.js";

//vou receber os numeros pelo body e o token é o user
//para cada numero selecionado
export async function selecionarRifaService(rifaData: any, token: string) {
  const userId = validToken(token);
  if (!userId) throw unauthorizedError();
  if (userId === 1) throw unprocessableError();
  console.log("aqui1");
  console.log(rifaData.numero);
  const verificaNumero = await repo.findStatusByNumber(rifaData.numero);
  console.log("aqui2");
  if (verificaNumero.status !== "Disponíveis") throw conflictError();
  console.log("aqui3");
  const selecionar = await repo.selectRifa(rifaData.numero, userId);
  console.log("aqui4");
  if (!selecionar) throw unprocessableError();
  console.log("aqui5");
  return "numero selecionado";
}

export async function desmarcarRifaService(rifaData: any, token: string) {
  const userId = validToken(token);
  if (!userId) throw unauthorizedError();
  if (userId === 1) throw unprocessableError();
  const verificaNumero = await repo.findStatusByNumber(rifaData.numero);
  if (verificaNumero.status === "Disponíveis") throw conflictError();
  if (verificaNumero.userId !== userId) throw unauthorizedError();
  const desmarcar = await repo.unselectRifa(rifaData.numero, userId);
}

export async function mostrarRifaService() {
  const result = await repo.mostrarTodos();
  return result;
}

export async function carrinhoRifaService(token: string) {
  const userId = validToken(token);
  if (!userId) throw unauthorizedError();
  if (userId === 1) throw unprocessableError();
  const pegarEscolhidos = await repo.findSelected(userId);
  return pegarEscolhidos;
}

export async function checkoutRifaService(checkout: number, token: string) {
  const userId = validToken(token);
  if (!userId) throw unauthorizedError();
  if (userId === 1) throw unprocessableError();
  const pegarEscolhidos = await repo.findSelected(userId);
  console.log(pegarEscolhidos.length);
  const pegarUsuario = await repo.findUser(userId);
  const dadosUsuario = [
    pegarUsuario.nome,
    pegarUsuario.email,
    pegarUsuario.whatsapp,
  ];
  return { dadosUsuario, pegarEscolhidos };
}
