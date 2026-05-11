import { UserIdInvalid } from "../errors/UserIdInvalid.js"

export class UserId {

    constructor(
        readonly value: string
    ) {
        this.isValid(value)
    }

    private isValid(value: string): void {

        const id = value.trim()

        if (!id) {
            throw new UserIdInvalid()
        }

        const uuidRegex =
            /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

        if (!uuidRegex.test(id)) {
            throw new UserIdInvalid()
        }

    }

    equals(other: UserId): boolean {
        return this.value === other.value
    }

}