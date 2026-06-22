import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const checkoutSchema = z.object({
  items: z.array(z.object({
    id: z.string(),
    name: z.string().min(1),
    price: z.number().positive(),
    quantity: z.number().int().positive(),
    image: z.string().url().optional(),
  })).min(1),
  customerEmail: z.string().email(),
  customerName: z.string().min(1).optional(),
  shippingAddress: z.object({
    address: z.string().min(1),
    city: z.string().min(1),
    zip: z.string().min(1),
  }).optional(),
});

export type CheckoutInput = z.infer<typeof checkoutSchema>;
