import type { UserRepository } from "../../domain/UserRepository.js";
import type { User } from "../../domain/User.js";

import { PrismaClient } from "../../../shared/infraestructure/data/prisma/generated/prisma/client.js";
import { DomainError } from "../../../shared/domain/errors/DomainError.js";


export class PostgresUserRepository implements UserRepository{

    constructor(
        private prismaClient:PrismaClient
    ){}



    async create(user: User): Promise<void> {

        //aca llega un user ya creado desde la capa aplicacion

        const userPrimitiveObject = user.toPrimitives();

        const userFound = await this.prismaClient.user.findUnique({
            where:{
                email:userPrimitiveObject.email,
            }
        });

        if(userFound) throw new DomainError("Email ya registrado!");

        await this.prismaClient.user.create({
            data:{
                id:userPrimitiveObject.id,
                email:userPrimitiveObject.email,
                name:userPrimitiveObject.name,
                password:userPrimitiveObject.password,
            }
        });


    }

    

}