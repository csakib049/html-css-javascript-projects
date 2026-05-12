import { Router } from "express";
import * as authController from "../controllers/auth.controller.js"

const authRouter = Router();



authRouter.post("/register",authController.register)

authRouter.post("/get-me",authController.getMe)


export default authRouter;