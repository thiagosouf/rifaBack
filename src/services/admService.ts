import {
  conflictError,
  notFoundError,
  unauthorizedError,
  unprocessableError,
} from "../utils/errorUtils.js";
import * as repo from "../repositories/admRepository.js";
import validToken from "../utils/validToken.js";

export async function cadastrarRifaService(
  rifaData: repo.admRepository,
  token: string
) {
  const userId = validToken(token);
  if (!userId || userId !== 1) throw unauthorizedError();

  const verificarRifa = await repo.findRifaById(rifaData.rifaId);

  if (verificarRifa) throw conflictError();

  const cadastrar = await repo.createRifa(rifaData);
  console.log("3.3");
  const criarNumeros = await repo.createNumeros(
    rifaData.numeros,
    cadastrar.rifaId
  );
  if (!criarNumeros) return unprocessableError();
  return "Rifa criada com sucesso";
}

export async function admEditService(
  status: string,
  token: string,
  numero: number,
  comprador: number
) {
  const userId = validToken(token);
  if (!userId || userId !== 1) throw unauthorizedError();
  console.log("userId" + comprador);
  const atualizarRifa = await repo.atualizarByNumero(numero, status, comprador);
  return "Rifa atualizada";
}
