import { PrismaClient } from "../../generated/prisma/client";
import { url } from "node:inspector/promises";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSqlite3({
    url : "file:./prisma/dev.db"
})

export const prisma = new PrismaClient({ adapter })


