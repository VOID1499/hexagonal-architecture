import { Router } from "express";
import { UserController } from "./controller.js";
import { asyncHandler } from "../../../utils/asyncHandler.js";



export class UserRouter {


    constructor(){}


    static createRoutes(){
        const router = Router();

        const userContoller = new UserController()

        router.post("/",asyncHandler(userContoller.createUser))

        return router;
    }


}