import { randomUUID } from "node:crypto";

export class UuidGenerator {

    static generate(): string {
        return randomUUID();
    }

}