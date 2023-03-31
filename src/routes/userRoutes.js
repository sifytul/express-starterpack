import { Router } from "express";
import { signupController } from "../controllers/userController.js";

const userRouter = Router()

userRouter.get("/signup", signupController)

export default userRouter;