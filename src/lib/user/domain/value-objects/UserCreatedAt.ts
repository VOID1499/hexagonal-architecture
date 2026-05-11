export class UserCreatedAt {

    constructor(
        readonly value: Date
    ) {
        this.isValid(value)
    }

    private isValid(value: Date): void {

        if (!(value instanceof Date)) {
            throw new Error("La fecha no es válida")
        }

        if (isNaN(value.getTime())) {
            throw new Error("La fecha no es válida")
        }

    }

}