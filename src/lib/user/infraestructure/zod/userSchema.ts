import { z } from "zod"

export const userSchema = z.object({
  name: z
    .string({
      message: "Name requerido"
    })
    .min(5, "Name debe tener minimo 5 caracteres"),

  email: z
    .string({
      message: "Email requerido"
    })
    .email("Email no valido"),

  password: z
    .string({
      message: "Password requerido"
    })
    .min(5, "Password debe tener minimo 5 caracteres")
})

export type UserCreateInput = z.infer<typeof userSchema>