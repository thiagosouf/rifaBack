import { Router } from "express";
import { loginController, signupController, } from "../controllers/authController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { loginSchema, signupSchema } from "../schemas/authSchema.js";
var authRouter = Router();
authRouter.post("/login", validateSchema(loginSchema), loginController);
authRouter.post("/signup", validateSchema(signupSchema), signupController);
export default authRouter;
