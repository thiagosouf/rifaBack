import { Router } from "express";
import { admRifa, admEdit } from "../controllers/admController.js";

const admRouter = Router();

admRouter.post("/adm", admRifa);
admRouter.post("/adm/edit", admEdit);

export default admRouter;
