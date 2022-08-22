import { client } from "../database.js";

export interface rifaInterface {
  numero: number;
}

export async function findStatusByNumber(numero: number) {
  console.log(numero);
  return await client.rifas.findFirst({
    where: { numero },
  });
}

export async function selectRifa(numero: number, userId: number) {
  return await client.rifas.update({
    data: {
      status: "Selecionado",
      userId: userId,
    },
    where: {
      numero,
    },
  });
}

export async function unselectRifa(numero: number, userId: number) {
  return await client.rifas.update({
    data: {
      status: "Disponíveis",
      userId: null,
    },
    where: {
      numero,
    },
  });
}

export async function mostrarTodos() {
  return await client.rifas.findMany({
    orderBy: {
      numero: "asc",
    },
  });
}

export async function findSelected(userId: number) {
  return await client.rifas.findMany({
    where: {
      userId,
      status: "Selecionado",
    },
    orderBy: {
      numero: "asc",
    },
  });
}

export async function findUser(userId: number) {
  return await client.users.findFirst({
    where: {
      id: userId,
    },
  });
}
