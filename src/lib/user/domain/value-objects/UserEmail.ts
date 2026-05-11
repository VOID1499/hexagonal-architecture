export class UserEmail {

    constructor(
        readonly value: string
    ){
        this.isValid(value)
    }

    private isValid(value: string): void {

        const email = value.trim()

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!emailRegex.test(email)) {
            throw new Error("El email no es válido")
        }

    }

}