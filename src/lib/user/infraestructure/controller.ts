import type { Request,Response } from "express"
import { ServiceContainer } from "../../shared/ServiceContainer.js";
import { error } from "node:console";

export class UserController {


    constructor(){}

    createUser = async (req:Request,res:Response)=>{
        const body = req.body as {name:string,email:string,password:string}

            await ServiceContainer.user.createUser.run(
                body.name,
                body.email,
                body.password,
                new Date()
            )

            res.status(200).send();
   
    }



}