import jwt from "jsonwebtoken";
export default function validToken(token) {
    var chave = process.env.SECRET;
    var dados = jwt.verify(token, chave);
    var user = JSON.parse(JSON.stringify(dados));
    var userId = user.userId;
    return userId;
}
