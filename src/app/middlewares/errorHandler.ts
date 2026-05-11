import type { Request ,Response,NextFunction } from "express"
import { DomainError } from "../../lib/shared/domain/errors/Domain.js"

export const errorHandlerMiddleware = (err:unknown ,req:Request,res:Response,next:NextFunction)=>{

    
    if(err instanceof DomainError){
        return res.status(400).json({
            error:err.message,
            data:null
        })
    }

    return res.status(500).json({
        error:"Internal server error"
    })
    

}