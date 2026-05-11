import { CreateUser } from "../user/application/CreateUser.js";
import { InMemoryUserRepository } from "../user/infraestructure/repositories/InMemoryUserRepository.js";


const inMemoryUserRepository = new InMemoryUserRepository();

export const ServiceContainer = {

    user:{
        createUser: new CreateUser(inMemoryUserRepository)
    }

}