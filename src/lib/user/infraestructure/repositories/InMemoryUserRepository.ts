import type { User } from "../../domain/User.js";
import type { UserRepository } from "../../domain/UserRepository.js";



export class InMemoryUserRepository implements UserRepository {

    users:User[] = [];

    async create(user: User):Promise<void> {
        this.users.push(user);
    }

    
}