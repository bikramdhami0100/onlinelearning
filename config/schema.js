
import { boolean, integer, pgTable, varchar ,json} from "drizzle-orm/pg-core";
export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  subscriptionId:varchar(),
});

export const coursesTable = pgTable("courses", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  cid:varchar({ length: 255 }).unique(),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }),
  noOfChapters: integer().notNull(),
  includeVideo: boolean().notNull().default(false),
  level: varchar({ length: 255 }).notNull(),
  category: varchar({ length: 255 }).notNull(),
  courseJson:json(),
  courseContent:json().default({}),
  bannerImagePrompt:varchar({ length: 255 }).default(''),
  userEmail: varchar('userEmail').references(() => usersTable.email),
});

export const enrollCourseTable = pgTable("enrollCourse", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  cid:varchar('cid').references(() => coursesTable.cid),
  userEmail: varchar('userEmail').references(() => usersTable.email),
  completedChapters:json(),
});
