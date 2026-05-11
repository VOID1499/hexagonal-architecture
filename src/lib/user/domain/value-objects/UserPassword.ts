export class UserPassword {

    constructor(
        readonly value: string
    ) {
        this.isValid(value)
    }

    private isValid(value: string): void {

        const password = this.value.trim()

        if (!password) {
            throw new Error("La contraseña es requerida")
        }

        if (password.length < 8) {
            throw new Error(
                "La contraseña debe tener al menos 8 caracteres"
            )
        }

    }

}