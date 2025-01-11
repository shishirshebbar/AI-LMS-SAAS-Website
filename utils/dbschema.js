import { boolean, pgTable, serial, varchar} from "drizzle-orm/pg-core";

export const USER = pgTable('users',{
    id:serial().primaryKey(),
    name:varchar().notNull(),
    email:varchar().notNull(),
    isMember:boolean().default(false)
})