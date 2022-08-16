import { client } from "../database.js";

export interface admRepository {
  //   id: number;
  numeros: number;
  valor: number;
  premio: string;
  rifaId: number;
}
//findRifaById
//createRifa
export async function findRifaById(rifaId: number) {
  return await client.admRifas.findFirst({
    where: { rifaId },
  });
}

export async function createRifa(rifaData: admRepository) {
  const { numeros, valor, premio, rifaId } = rifaData;

  return await client.admRifas.create({
    data: {
      totalNumeros: numeros,
      valor: valor,
      premio: premio,
      rifaId: rifaId,
    },
  });
}

export async function createNumeros(numeros: number, rifaId: number) {
  let gerados: any = gerarNumeros(numeros, rifaId);
  console.log(gerados);
  // return await client.rifas.createMany({
  //   data: gerados,
  return await client.rifas.createMany({
    data: gerados,
  });
}

function gerarNumeros(numero: number, rifaId: number) {
  let array = [];

  for (let i = 0; i < numero; i++) {
    let numerosGerados: any = {};
    numerosGerados.numero = i;
    numerosGerados.rifaId = rifaId;
    array.push(numerosGerados);
  }
  return array;
}

// export async function createNumbers(numeros: number, rifaId: number) {
//   let num = 0;
//   await client.rifas.createMany({
//     data: {
//       numero: num,
//       rifaId: rifaId,
//     },
//   });
//   console.log("4.9");
// }

export async function atualizarByNumero(
  numero: number,
  status: string,
  comprador: number
) {
  return await client.rifas.update({
    data: {
      status,
      userId: comprador,
    },
    where: {
      numero,
    },
  });
}
