import { User } from "./User.js";

export interface UserRepository {

    create(user:User):Promise<void>

}



