import { Router } from "express";
import { UserRouter } from "../lib/user/infraestructure/routes.js";

export class AppRoutes{

    constructor(){}

    static createAppRoutes():Router{
        const router = Router();

        //
        router.get("/",(req,res)=>{
            res.send("Hola mundo!")
        });


        router.use("/api/users",UserRouter.createRoutes());


        

        return router;
    }

    
}