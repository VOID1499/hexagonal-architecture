import { DomainError } from "../../../shared/domain/errors/Domain.js";

export class UserIdInvalid  extends DomainError {


    constructor(){
        super("El id de usuario no esvalido")
    }

}