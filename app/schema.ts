import { pgTable, numeric, serial, text } from "drizzle-orm/pg-core";
import { drizzle } from 'drizzle-orm/postgres-js';
import { eq } from 'drizzle-orm';
import postgres from 'postgres';


let client = postgres(`${process.env.POSTGRES_URL!}?sslmode=require`);
let db = drizzle(client);

export async function getCosto(costo: string) {
  const costofletes = await ensureTableFleteExists();
  return await db.select().from(costofletes).where(eq(costofletes.costo, costo));
}


export async function createCosto(origen: string, destino: string, tallaenvio: string, costo1: number, id_paqueteria1: number) {
  const costofletes = await ensureTableFleteExists();
  const costo = costo1.toString();
  const id_paqueteria = id_paqueteria1.toString();
  return await db.insert(costofletes).values([{ origen, destino, tallaenvio, costo, id_paqueteria}]);
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
        id_paqueteria numeric
      );`;
  }

  const table = pgTable('costofletes', {
    id: serial('id').primaryKey(),
    origen: text('origen'),
    destino: text('destino'),
    tallaenvio: text('tallaenvio'),
    costo: numeric('costo'),
    id_paqueteria: numeric('id_paqueteria'),
  });

  return table;
}

export const costoflete = pgTable('costofletes', {
  id: serial('id').primaryKey(),
  origen: text('origen'),
  destino: text('destino'),
  tallaenvio: text('tallaenvio'),
  costo: numeric('costo'),
  id_paqueteria: numeric('id_paqueteria'),
});

export const dbCosto = drizzle(client)

/*export const users = pgTable('costofletes', {
    id: serial('id').primaryKey(),
    origen: text('origen'),
    destino: text('destino'),
    tallaenvio: text('tallaenvio'),
    costo: numeric('costo'),
    paqueteria: numeric('paqueteria'),
  });
*/

export async function getDatosEmpleado(costo: string) {
  const costofletes = await ensureTableFleteExists();
  return await db.select().from(costofletes).where(eq(costofletes.costo, costo));
}


export async function createDatosEpleado(origen: string, destino: string, tallaenvio: string, costo1: number, id_paqueteria1: number) {
  const costofletes = await ensureTableFleteExists();
  const costo = costo1.toString();
  const id_paqueteria = id_paqueteria1.toString();
  return await db.insert(costofletes).values([{ origen, destino, tallaenvio, costo, id_paqueteria}]);
}


async function ensureTableDatosEmpleados() {
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
        id_paqueteria numeric
      );`;
  }

  const table = pgTable('costofletes', {
    id: serial('id').primaryKey(),
    origen: text('origen'),
    destino: text('destino'),
    tallaenvio: text('tallaenvio'),
    costo: numeric('costo'),
    id_paqueteria: numeric('id_paqueteria'),
  });

  return table;
}




