import { pgTable, numeric, serial, text } from "drizzle-orm/pg-core";

export const users = pgTable('costofletes', {
    id: serial('id').primaryKey(),
    origen: text('origen'),
    destino: text('destino'),
    tallaenvio: text('tallaenvio'),
    costo: numeric('costo'),
    paqueteria: numeric('paqueteria'),
  });




/*export async function getCosto(destino: string) {
  const costofletes = await ensureTableFleteExists();
  return await db.select().from(costofletes).where(eq(costofletes.destino, destino));
}


export async function createCosto(origen: string, destino: string, tallaenvio: string, costo: number, paqueteria: number) {
  const costofletes = await ensureTableFleteExists();
  return await db.insert(costofletes).values({origen, destino, tallaenvio, costo, paqueteria});
}


async function ensureTableFleteExists() {
  const result = await client`
    SELECT EXISTS (
      SELECT FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name = 'costofletes'
    );`;

  if (!result[0].exists) {
    await client`
      CREATE TABLE "costofletes" (
        id SERIAL PRIMARY KEY,
        origen VARCHAR(64),
        destino VARCHAR(64),
        tallaenvio VARCHAR(64),
        costo numeric,
        paqueteria numeric
      );`;
  }

  const table = pgTable('costofletes', {
    id: serial('id').primaryKey(),
    origen: varchar('origen', { length: 64 }),
    destino: varchar('destino', { length: 64 }),
    tallaenvio: varchar('tallaenvio', { length: 64 }),
    costo: numeric('costo'),
    paqueteria: numeric('paqueteria'),
  });

  return table;
}


*/