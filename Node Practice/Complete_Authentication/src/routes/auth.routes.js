import { Router } from "express";
import * as authController from "../controllers/auth.controller.js"

const authRouter = Router();



authRouter.post("/register",authController.register)

authRouter.post("/login",authController.login)

authRouter.post("/get-me",authController.getMe)

authRouter.post("/refresh-token",authController.refreshToken)

authRouter.post("/logout",authController.logout)

authRouter.post("/logout-all",authController.logoutAll)





export default authRouter;


