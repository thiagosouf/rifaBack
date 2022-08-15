import jwt from "jsonwebtoken";

export default function validToken(token: string) {
  const chave = process.env.SECRET;
  const dados = jwt.verify(token, chave);
  const user = JSON.parse(JSON.stringify(dados));
  const userId: number = user.userId;
  return userId;
}
