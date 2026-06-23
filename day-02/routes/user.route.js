import express from "express"
import { createUser, getParamsUser, getUsers } from "../controllers/userControllers.js";
import { middleware2 } from "../middlewares/middleware2.js";

export const userRouter = express.Router();


userRouter.get('/',middleware2,getUsers)
userRouter.post('/create',createUser)
userRouter.get('/one/:params',getParamsUser)