import { z } from "zod"

export class InvalidDataErrorZod extends Error {

    constructor(
        message: string,
        public readonly error: z.ZodError
    ) {
        super(message)

        this.name = this.constructor.name
    }


    public format(){
        return z.flattenError(this.error)
    }

}