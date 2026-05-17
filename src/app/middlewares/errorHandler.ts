import type { Request ,Response,NextFunction } from "express"
import { DomainError } from "../../lib/shared/domain/errors/DomainError.js"
import { InvalidDataErrorZod } from "../../lib/shared/infraestructure/errors/InvalidDataErrorZod.js"

export const errorHandlerMiddleware = (err:unknown ,req:Request,res:Response,next:NextFunction)=>{

    //console.log(err)
    
    if(err instanceof DomainError){
        return res.status(400).json({
            error:err.message,
            data:null
        })
    }

    if(err instanceof InvalidDataErrorZod){
        
        return res.status(400).json({
            errors:err.format(),
            data:null
        })
    }

    return res.status(500).json({
        error:"Internal server error"
    })
    

}