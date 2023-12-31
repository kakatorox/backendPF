-- public.categorias_id_seq definition

-- DROP SEQUENCE public.categorias_id_seq;

CREATE SEQUENCE public.categorias_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
COMMENT ON SEQUENCE categorias_id_seq IS 'DbWrench Autogenerated Sequence.';


-- public.compras_id_seq definition

-- DROP SEQUENCE public.compras_id_seq;

CREATE SEQUENCE public.compras_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
COMMENT ON SEQUENCE compras_id_seq IS 'DbWrench Autogenerated Sequence.';


-- public.direccion_id_seq definition

-- DROP SEQUENCE public.direccion_id_seq;

CREATE SEQUENCE public.direccion_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
COMMENT ON SEQUENCE direccion_id_seq IS 'DbWrench Autogenerated Sequence.';


-- public.productos_id_seq definition

-- DROP SEQUENCE public.productos_id_seq;

CREATE SEQUENCE public.productos_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
COMMENT ON SEQUENCE productos_id_seq IS 'DbWrench Autogenerated Sequence.';


-- public.usuario_id_seq definition

-- DROP SEQUENCE public.usuario_id_seq;

CREATE SEQUENCE public.usuario_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
COMMENT ON SEQUENCE usuario_id_seq IS 'DbWrench Autogenerated Sequence.';


-- public.vendedor_id_seq definition

-- DROP SEQUENCE public.vendedor_id_seq;

CREATE SEQUENCE public.vendedor_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
COMMENT ON SEQUENCE vendedor_id_seq IS 'DbWrench Autogenerated Sequence.';
-- public.categorias definition

-- Drop table

-- DROP TABLE public.categorias;

CREATE TABLE public.categorias (
	id_categoria int4 NOT NULL DEFAULT nextval('categorias_id_seq'::regclass),
	nombre varchar(100) NOT NULL,
	descripcion varchar(200) NOT NULL,
	CONSTRAINT categorias_pkey PRIMARY KEY (id_categoria)
);


-- public.usuario definition

-- Drop table

-- DROP TABLE public.usuario;

CREATE TABLE public.usuario (
	id_usuario int4 NOT NULL DEFAULT nextval('usuario_id_seq'::regclass),
	nombres varchar(100) NOT NULL,
	apellido_paterno varchar(100) NOT NULL,
	apellido_materno varchar(100) NOT NULL,
	celular varchar(30) NOT NULL,
	contrasena varchar(250) NOT NULL,
	rut varchar(50) NOT NULL,
	correo varchar(200) NOT NULL,
	sexo varchar NOT NULL,
	fecha_nacimiento date NOT NULL,
	CONSTRAINT usuario_pkey PRIMARY KEY (id_usuario)
);


-- public.vendedor definition

-- Drop table

-- DROP TABLE public.vendedor;

CREATE TABLE public.vendedor (
	id_vendedor int4 NOT NULL DEFAULT nextval('vendedor_id_seq'::regclass),
	rut varchar(20) NOT NULL,
	nombre varchar(200) NOT NULL,
	apellido_paterno varchar(200) NOT NULL,
	apellido_materno varchar(200) NOT NULL,
	telefono varchar(100) NOT NULL,
	correo varchar(200) NOT NULL,
	region varchar(200) NOT NULL,
	ciudad varchar(200) NOT NULL,
	comuna varchar(200) NOT NULL,
	calle varchar(200) NOT NULL,
	numero int4 NOT NULL,
	fecha_ingreso date NOT NULL,
	contrasena varchar(250) NOT NULL,
	CONSTRAINT vendedor_pkey PRIMARY KEY (id_vendedor)
);


-- public.compras definition

-- Drop table

-- DROP TABLE public.compras;

CREATE TABLE public.compras (
	id_compra int4 NOT NULL DEFAULT nextval('compras_id_seq'::regclass),
	productos json NOT NULL,
	fecha date NOT NULL,
	direccion varchar(200) NOT NULL,
	id_usuario int4 NOT NULL,
	CONSTRAINT compras_pkey PRIMARY KEY (id_compra),
	CONSTRAINT compras_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario)
);


-- public.direccion definition

-- Drop table

-- DROP TABLE public.direccion;

CREATE TABLE public.direccion (
	id_direccion int4 NOT NULL DEFAULT nextval('direccion_id_seq'::regclass),
	region varchar(50) NOT NULL,
	ciudad varchar(50) NOT NULL,
	comuna varchar(50) NOT NULL,
	calle varchar(50) NOT NULL,
	numero varchar(50) NOT NULL,
	descripcion varchar(200) NOT NULL,
	id_usuario int4 NULL,
	CONSTRAINT direccion_pkey PRIMARY KEY (id_direccion),
	CONSTRAINT direccion_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario)
);


-- public.productos definition

-- Drop table

-- DROP TABLE public.productos;

CREATE TABLE public.productos (
	id_producto int4 NOT NULL DEFAULT nextval('productos_id_seq'::regclass),
	nombre varchar(100) NOT NULL,
	descripcion varchar NOT NULL,
	img varchar NOT NULL,
	precio int4 NOT NULL,
	stock int4 NOT NULL,
	estado varchar(100) NOT NULL,
	fecha_ingreso date NOT NULL,
	marca varchar(200) NOT NULL,
	id_vendedor int4 NOT NULL,
	id_categoria int4 NOT NULL,
	CONSTRAINT productos_pkey PRIMARY KEY (id_producto),
	CONSTRAINT productos_id_categoria_fkey FOREIGN KEY (id_categoria) REFERENCES public.categorias(id_categoria),
	CONSTRAINT productos_id_vendedor_fkey FOREIGN KEY (id_vendedor) REFERENCES public.vendedor(id_vendedor)
);
