import { User } from "../domain/User.js";
import type { UserRepository } from "../domain/UserRepository.js";
import { UserCreatedAt } from "../domain/value-objects/UserCreatedAt.js";
import { UserEmail } from "../domain/value-objects/UserEmail.js";
import { UserId } from "../domain/value-objects/UserId.js";
import { UserName } from "../domain/value-objects/UserName.js";
import { UserPassword } from "../domain/value-objects/UserPassword.js";
import { randomUUID } from "node:crypto";

export class CreateUser {

    constructor(
        private readonly userRepository:UserRepository
    ){}


    async run(name:string,email:string,password:string,createdAt:Date ):Promise<void>{


        //Se transforman los datos planos a la entidad esperada
        const userEntity = new User(
            new UserId(randomUUID()),
            new UserName(name),
            new UserEmail(email),
            new UserPassword(password),
            new UserCreatedAt(createdAt))

        console.log(userEntity.toPrimitives())
        
        return this.userRepository.create(userEntity)
    }

}