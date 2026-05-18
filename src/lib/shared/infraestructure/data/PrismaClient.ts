import { PrismaPg } from "@prisma/adapter-pg";
import { envs } from "../../../../config/envs.js";

//se importa desde el output generado
import { PrismaClient } from "../data/prisma/generated/prisma/client.js";

export class PrismaConnection {

    private static instance: PrismaClient;

    private constructor() {}

    static create(): PrismaClient {

        if (!this.instance) {

            const adapter = new PrismaPg({
                connectionString: envs.DATABASE_URL
            });

            this.instance = new PrismaClient({
                adapter
            });

        }

        return this.instance;
    }

}