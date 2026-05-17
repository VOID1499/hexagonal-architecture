import { DomainError } from "../../../shared/domain/errors/DomainError.js";

export class UserIdInvalid  extends DomainError {


    constructor(){
        super("El id de usuario no esvalido")
    }

}