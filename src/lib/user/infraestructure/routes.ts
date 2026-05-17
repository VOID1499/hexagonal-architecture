import { Router } from "express";
import { UserController } from "./controller.js";
import { asyncHandler } from "../../../utils/asyncHandler.js";
import { validateDataMiddleware } from "../../../app/middlewares/validateData.js";
import { userSchema } from "./zod/userSchema.js";



export class UserRouter {


    constructor(){}


    static createRoutes(){
        const router = Router();

        const userContoller = new UserController()

        router.post("/",validateDataMiddleware(userSchema) ,asyncHandler(userContoller.createUser))

        return router;
    }


}