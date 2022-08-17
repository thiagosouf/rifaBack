import { prisma } from "@prisma/client";
import supertest from "supertest";
import app from "./../src/app.js";
import { client } from "../src/database.js";

const URL = "http://localhost:5000";
const NAME = "NOMETESTE";
const EMAIL = "usuario@TESTE.com";
const WHATSAPP = "1234567891";
const PASSWORD = "senhausuario";
const cadastro = {
  nome: NAME,
  email: EMAIL,
  whatsapp: WHATSAPP,
  senha: PASSWORD,
  confirmSenha: PASSWORD,
};
const login = { email: EMAIL, senha: PASSWORD };
let token = "";

describe("testes usuario", () => {
  it("criar conta", async () => {
    // await client.$executeRaw`DELETE FROM users WHERE email = "usuario@TESTE.com"`;
    const response = await supertest(app).post(`/signup`).send(cadastro);
    expect(response.status).toBe(200);
  });

  it("criar conta com email existente", async () => {
    const response = await supertest(app).post(`/signup`).send(cadastro);
    expect(response.status).toBe(409);
  });

  it("Fazer login com usuario cadastrado", async () => {
    const response = await supertest(app).post(`/login`).send(login);
    token = response.text;
    expect(token.length > 0).toBe(true);
  });

  it("Tentar fazer login com usuario Não cadastrado", async () => {
    const response = await supertest(app)
      .post(`/login`)
      .send({ email: "aaa@aaa.com", senha: "aaa" });
    const token = response.text;
    expect(token.length > 0).toBe(false);
  });

  it("Tentar marcar numero da rifa com usuario Não Autenticado", async () => {
    token = "";

    const response = await supertest(app)
      .put(`/rifa`)
      .send({ numero: 1 })
      .set("Authorization", token);
    expect(response.status).toBe(500);
  });

  it("Marcar numero da rifa", async () => {
    const response1 = await supertest(app).post(`/login`).send(login);
    token = response1.text;

    const response = await supertest(app)
      .put(`/rifa`)
      .send({ numero: 1 })
      .set("Authorization", token);
    expect(response.status).toBe(200);
  });

  it("Marcar numero da rifa 2 vez", async () => {
    const response1 = await supertest(app).post(`/login`).send(login);
    token = response1.text;

    const response = await supertest(app)
      .put(`/rifa`)
      .send({ numero: 1 })
      .set("Authorization", token);
    expect(response.status).toBe(409);
  });

  it("Tentar desmarcar numero da rifa com usuario Não Autenticado", async () => {
    token = "";

    const response = await supertest(app)
      .put(`/rifa/unselect`)
      .send({ numero: 1 })
      .set("Authorization", token);
    expect(response.status).toBe(500);
  });

  it("Desmarcar numero da rifa", async () => {
    const response1 = await supertest(app).post(`/login`).send(login);
    token = response1.text;

    const response = await supertest(app)
      .put(`/rifa/unselect`)
      .send({ numero: 1 })
      .set("Authorization", token);
    expect(response.status).toBe(200);
  });

  it("Tentar desmarcar numero da rifa 2 vez", async () => {
    const response1 = await supertest(app).post(`/login`).send(login);
    token = response1.text;

    const response = await supertest(app)
      .put(`/rifa/unselect`)
      .send({ numero: 1 })
      .set("Authorization", token);
    expect(response.status).toBe(409);
  });

  it("Tentar Mostrar numeros escolhidos Usuario Não Autenticado", async () => {
    token = "";

    const response = await supertest(app)
      .get(`/rifa/checkout`)
      .set("Authorization", token);

    expect(response.status).toBe(500);
  });

  it("Mostrar numeros escolhidos pelo usuario", async () => {
    const response1 = await supertest(app).post(`/login`).send(login);
    token = response1.text;

    const response = await supertest(app)
      .get(`/rifa/checkout`)
      .set("Authorization", token);

    expect(response.status).toBe(200);
  });
});
