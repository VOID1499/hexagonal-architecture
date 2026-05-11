import { DomainError } from "../../../shared/domain/errors/Domain.js";

export class UserNameInvalid extends DomainError {

    constructor() {
        super(`El nombre del usuario no es valido`)
    }

}