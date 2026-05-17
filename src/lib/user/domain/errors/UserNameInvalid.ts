import { DomainError } from "../../../shared/domain/errors/DomainError.js";

export class UserNameInvalid extends DomainError {

    constructor() {
        super(`El nombre del usuario no es valido`)
    }

}