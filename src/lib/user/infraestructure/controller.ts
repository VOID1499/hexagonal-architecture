import type { Request,Response } from "express"
import { ServiceContainer } from "../../shared/ServiceContainer.js";
import { userSchema } from "./zod/userSchema.js";

export class UserController {


    constructor(){}

    createUser = async (req:Request,res:Response)=>{
        
        //data insertada en middleware de validacion de datos entrantes
        const data = req.body.data;
            
        await ServiceContainer.user.createUser.run(
                data.name,
                data.email,
                data.password,
                new Date()
        )

        res.status(200).send();
   
    }



}