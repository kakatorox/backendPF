-- This script was generated by the ERD tool in pgAdmin 4.
-- Please log an issue at https://redmine.postgresql.org/projects/pgadmin4/issues/new if you find any bugs, including reproduction steps.
BEGIN;


DROP TABLE IF EXISTS "Usuario";

CREATE TABLE IF NOT EXISTS "Usuario"
(
    "ID" integer,
    "Nombres" character varying(100),
    "Apellido_Paterno" character varying(100),
    "Celular" character varying(30),
    "Contraseña" character varying(255),
    "Tipo" character varying(50),
    "Rut" character varying(11),
    "Correo" character varying(200),
    "Apellido_Materno" character varying(100),
    PRIMARY KEY ("ID")
);

DROP TABLE IF EXISTS "Direccion";

CREATE TABLE IF NOT EXISTS "Direccion"
(
    "ID_direccion" integer,
    "Region" character varying(50),
    "Comuna" character varying(50),
    "Calle" character varying(50),
    "Numero" integer,
    "Descripcion" character varying(200)
);

DROP TABLE IF EXISTS "Producto";

CREATE TABLE IF NOT EXISTS "Producto"
(
    "ID_producto" integer,
    "Nombre" character varying(50),
    "Descripcion" character varying(200),
    "Img" character varying(200),
    "Precio" integer,
    "Stock" integer,
    "Estado" character varying(50),
    "Fecha_ingreso" date,
    PRIMARY KEY ("ID_producto")
);

DROP TABLE IF EXISTS "Categoria";

CREATE TABLE IF NOT EXISTS "Categoria"
(
    "ID_Categoria" integer,
    "Nombre" character varying(50),
    "Descripcion" character varying(255),
    PRIMARY KEY ("ID_Categoria")
);

DROP TABLE IF EXISTS "Vendedor";

CREATE TABLE IF NOT EXISTS "Vendedor"
(
    id_vendedor bigserial NOT NULL,
    rut_vendedor character varying(20) NOT NULL,
    nombre_vendedor character varying(200) NOT NULL,
    apellido_paterno character varying(200) NOT NULL,
    apellido_materno character varying(200) NOT NULL,
    telefono_vendedor character varying(100) NOT NULL,
    correo_vendedor character varying(200) NOT NULL,
    direccion_usuario character varying(200),
    fecha_ingreso_usuario date NOT NULL,
    PRIMARY KEY (id_vendedor)
);

DROP TABLE IF EXISTS "Ventas";

CREATE TABLE IF NOT EXISTS "Ventas"
(
    id_venta bigserial NOT NULL,
    productos_venta json NOT NULL,
    fecha_venta date NOT NULL,
    direccion_venta character varying NOT NULL,
    metodo_pago_venta character varying NOT NULL,
    PRIMARY KEY (id_venta)
);

ALTER TABLE IF EXISTS "Direccion"
    ADD FOREIGN KEY ("ID_direccion")
    REFERENCES "Usuario" ("ID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS "Producto"
    ADD FOREIGN KEY ("ID_producto")
    REFERENCES "Vendedor" (id_vendedor) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS "Categoria"
    ADD FOREIGN KEY ("ID_Categoria")
    REFERENCES "Producto" ("ID_producto") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS "Ventas"
    ADD FOREIGN KEY (id_venta)
    REFERENCES "Usuario" ("ID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

END;