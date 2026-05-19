import { CreateUser } from "../user/application/CreateUser.js";
import { InMemoryUserRepository } from "../user/infraestructure/repositories/InMemoryUserRepository.js";
import { PostgresUserRepository } from "../user/infraestructure/repositories/PostgresUserRepository.js";
import { PrismaConnection } from "./infraestructure/data/prisma/PrismaClient.js";

//unica instancia del cliente de prisma en toda la aplicacion
const prismaClient = PrismaConnection.create();

const inMemoryUserRepository = new InMemoryUserRepository();

const postgresUserRepository = new PostgresUserRepository(
    prismaClient
);

export const ServiceContainer = {

    user: {
        createUser: new CreateUser(postgresUserRepository)
    }

}