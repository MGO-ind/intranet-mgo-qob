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

export async function getProducto(codigo_producto: string) {
  const catalogoProductos = await ensureTableCatalogoProductosExists();
  return await db.select().from(catalogoProductos).where(eq(catalogoProductos.codigo_producto, codigo_producto));
}

export async function createNewProduct(marca_temporal: string, codigo_producto: string, nombre_producto: string, empresa_producto: string, categoria: string, clave_sat: string, correo_empleado: string, subcategoria: string) {
  const catalogoProductos = await ensureTableCatalogoProductosExists();
  return await db.insert(catalogoProductos).values([{ marca_temporal, codigo_producto, nombre_producto, empresa_producto, categoria, clave_sat, correo_empleado, subcategoria }]);
}

async function ensureTableCatalogoProductosExists() {
  const result = await client`
    SELECT EXISTS (
      SELECT FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name = 'catalogo_productos'
    );`;

  if (!result[0].exists) {
    await client`
      CREATE TABLE "datosUsuario" (
        id_producto SERIAL PRIMARY KEY,
        marca_temporal TEXT,
        codigo_producto TEXT,
        nombre_producto TEXT,
        empresa_producto TEXT,
        categoria TEXT,
        clave_sat TEXT,
        correo_empleado TEXT,
        subcategoria TEXT
      );`;
  }

  const tableCatalogoProducto = pgTable('catalogo_productos', {
    id_producto: serial('id_producto').primaryKey(),
    marca_temporal: text('marca_temporal'),
    codigo_producto: text('codigo_producto'),
    nombre_producto: text('nombre_producto'),
    empresa_producto: text('empresa_producto'),
    categoria: text('categoria'),
    clave_sat: text('clave_sat'),
    correo_empleado: text('correo_empleado'),
    comentarios: text('comentarios'),
    subcategoria: text('subcategoria'),
  });

  return tableCatalogoProducto;
}

export const catalogoProdusctos = pgTable('catalogo_productos', {
  id_producto: serial('id_producto').primaryKey(),
  marca_temporal: text('marca_temporal'),
  codigo_producto: text('codigo_producto'),
  nombre_producto: text('nombre_producto'),
  empresa_producto: text('empresa_producto'),
  categoria: text('categoria'),
  clave_sat: text('clave_sat'),
  correo_empleado: text('correo_empleado'),
  comentarios: text('comentarios'),
  subcategoria: text('subcategoria'),
});

export const datosUsuario1 = pgTable('datosUsuario', {
  id: serial('id').primaryKey(),
  nombre: text('nombre'),
  apellido: text('apellido'),
  nivel: text('nivel'),
  correo: text('correo'),
});




