import { DomainError } from "../../../shared/domain/errors/DomainError.js";

export class UserNotFound extends DomainError {

    constructor(id: string) {
        super(`Usuario con id ${id} no encontrado`)
    }

}