import { pgTable, numeric, serial, text } from "drizzle-orm/pg-core";
import { drizzle } from 'drizzle-orm/postgres-js';
import { eq } from 'drizzle-orm';
import postgres from 'postgres';


let client = postgres(`${process.env.POSTGRES_URL!}?sslmode=require`);
let db = drizzle(client);

export async function getCosto(destino: string) {
  const costofletes = await ensureTableFleteExists();
  return await db.select().from(costofletes).where(eq(costofletes.destino, destino));
}


export async function createCosto(origen: string, destino: string, tallaenvio: string, costo: number, paqueteria: number) {
  const costofletes = await ensureTableFleteExists();
  return await db.insert(costofletes).values([{ origen, destino, tallaenvio, costo: costo.toFixed(), paqueteria: paqueteria.toFixed() }]);
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
        origen TEXT,
        destino TEXT,
        tallaenvio TEXT,
        costo numeric,
        paqueteria numeric
      );`;
  }

  const table = pgTable('costofletes', {
    id: serial('id').primaryKey(),
    origen: text('origen'),
    destino: text('destino'),
    tallaenvio: text('tallaenvio'),
    costo: numeric('costo'),
    paqueteria: numeric('paqueteria'),
  });

  return table;
}



/*export const users = pgTable('costofletes', {
    id: serial('id').primaryKey(),
    origen: text('origen'),
    destino: text('destino'),
    tallaenvio: text('tallaenvio'),
    costo: numeric('costo'),
    paqueteria: numeric('paqueteria'),
  });
*/

