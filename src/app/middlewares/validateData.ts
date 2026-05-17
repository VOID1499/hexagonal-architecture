import type { Request, Response, NextFunction } from "express"
import z from "zod"
import { InvalidDataErrorZod } from "../../lib/shared/infraestructure/errors/InvalidDataErrorZod.js"
import { error } from "node:console"

export const validateDataMiddleware =
  (schema: z.ZodType) =>
  (req: Request, res: Response, next: NextFunction) => {

    const result = schema.safeParse(req.body)

    if (!result.success) {
      throw new InvalidDataErrorZod("Formato no valido",result.error)
    }

    req.body = result.data

    next()
  }