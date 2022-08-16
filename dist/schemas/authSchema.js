import joi from "joi";
export var signupSchema = joi.object({
    nome: joi.string().required(),
    email: joi.string().email().required(),
    whatsapp: joi.string().max(11).required(),
    senha: joi.string().min(4).required(),
    confirmSenha: joi.ref("senha")
});
export var loginSchema = joi.object({
    email: joi.string().email().required(),
    senha: joi.string().required()
});
