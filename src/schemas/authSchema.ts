import joi from "joi";

export const signupSchema = joi.object({
  nome: joi.string().required(),
  email: joi.string().email().required(),
  whatsapp: joi.string().max(11).required(),
  senha: joi.string().min(4).required(),
  confirmSenha: joi.ref("senha"),
});

export const loginSchema = joi.object({
  email: joi.string().email().required(),
  senha: joi.string().required(),
});
