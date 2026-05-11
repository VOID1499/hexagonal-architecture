import { DomainError } from "../../../shared/domain/errors/Domain.js";

export class UserNotFound extends DomainError {

    constructor(id: string) {
        super(`Usuario con id ${id} no encontrado`)
    }

}