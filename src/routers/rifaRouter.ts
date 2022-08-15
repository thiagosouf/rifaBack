import { Router } from "express";
import {
  rifaController,
  mostrarRifaController,
  carrinhoRifaController,
  checkoutRifaController,
  unselectRifaController,
} from "../controllers/rifaController.js";

const rifaRouter = Router();

rifaRouter.get("/rifa", mostrarRifaController);
rifaRouter.put("/rifa", rifaController);
rifaRouter.put("/rifa/unselect", unselectRifaController);
rifaRouter.get("/rifa/carrinho", carrinhoRifaController);
rifaRouter.get("/rifa/checkout", checkoutRifaController);

export default rifaRouter;
