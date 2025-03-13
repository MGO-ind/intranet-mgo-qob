import { pgTable, numeric, serial, text } from "drizzle-orm/pg-core";
import { drizzle } from 'drizzle-orm/postgres-js';
import { eq } from 'drizzle-orm';
import postgres from 'postgres';


let client = postgres(`${process.env.POSTGRES_URL!}?sslmode=require`);
let db = drizzle(client);

export const dbTablas = drizzle(client)

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


/*export const users = pgTable('costofletes', {
    id: serial('id').primaryKey(),
    origen: text('origen'),
    destino: text('destino'),
    tallaenvio: text('tallaenvio'),
    costo: numeric('costo'),
    paqueteria: numeric('paqueteria'),
  });
*/

export async function getDatosUsuario(correo: string) {
  const datosUsuario = await ensureTableDatosUsuarioExists();
  return await db.select().from(datosUsuario).where(eq(datosUsuario.correo, correo));
}

export async function getUsuario(correo: string) {
  const datosUsuario = await ensureTableDatosUsuarioExists();
  return await db.select().from(datosUsuario).where(eq(datosUsuario.correo, correo));
}

export async function createDatosUsuario(nombre: string, apellido: string, correo: string, nivel: string) {
  const datosUsuario = await ensureTableDatosUsuarioExists();
  return await db.insert(datosUsuario).values([{ nombre, apellido, nivel, correo }]);
}

async function ensureTableDatosUsuarioExists() {
  const result = await client`
    SELECT EXISTS (
      SELECT FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name = 'datosUsuario'
    );`;

  if (!result[0].exists) {
    await client`
      CREATE TABLE "datosUsuario" (
        id SERIAL PRIMARY KEY,
        nombre TEXT,
        apellido TEXT,
        nivel TEXT,
        correo TEXT
      );`;
  }

  const tableDatosUsuario = pgTable('datosUsuario', {
    id: serial('id').primaryKey(),
    nombre: text('nombre'),
    apellido: text('apellido'),
    nivel: text('nivel'),
    correo: text('correo'),
  });

  return tableDatosUsuario;
}

export const datosUsuario = pgTable('datosUsuario', {
  id: serial('id').primaryKey(),
  nombre: text('nombre'),
  apellido: text('apellido'),
  nivel: text('nivel'),
  correo: text('correo'),
});




